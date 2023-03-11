import { ModalService } from '../../services/modal.service';
// import { Observable, tap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
// import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  title = 'Angular test app';
  term = '';
  loading = false;
  // products$: Observable<IProduct[]>;
  // isModalOpen = false;
  // products: IProduct[] = [];

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // );
    this.productsService.getAll().subscribe(() => {
      // this.products = products;
      this.loading = false;
    })
  }

  // openModal() {
  //   this.isModalOpen = true;
  // }
}
