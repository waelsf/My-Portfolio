import { Component, OnInit } from '@angular/core';
import { information } from '../information';
import { ProductService } from '../productservice';
import {Product} from '../product';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.scss']
})
export class ListitemsComponent implements OnInit {

  information=information;
  products: Product[] = [];

	responsiveOptions;

	constructor(private productService: ProductService) {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
}
}
