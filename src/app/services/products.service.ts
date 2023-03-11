import { ErrorService } from './error.service';
import { IProduct } from './../models/product';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { catchError, delay, Observable, throwError, retry, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {
        this.errorHandler = this.errorHandler.bind(this)
    }

    products: IProduct[] = []

    private errorHandler(error: HttpErrorResponse) {        
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: {limit: 5}
            })
        }).pipe(
            delay(200),
            retry(2),
            tap((products) => this.products = products),
            catchError(this.errorHandler)
        )
    }

    create(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
            .pipe(
                tap((prod) => this.products.push(prod))
            )
    }
}