import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = ['Alvin', 'Pascal'];

  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>('assets/products-small.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getProducts() {
    return this.http
      .get<any>('assets/products.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getProductsWithOrdersSmall() {
    return this.http
      .get<any>('assets/products-orders-small.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  generatePrduct(): Product {
    const product: Product = {
      name: this.generateName(),
      inventoryStatus: this.generateStatus(),
    };

    product.image =
      product?.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
    return product;
  }

  generateId() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }
}
