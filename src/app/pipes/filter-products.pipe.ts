import { IProduct } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if (!search) return products;
    
    return products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    })
  }
}
