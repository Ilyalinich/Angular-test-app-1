import { IProduct } from './../../models/product';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() product: IProduct

    showDetails = false

    changeDetailsVision(): void {
        this.showDetails = !this.showDetails
    }
}