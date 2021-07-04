import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  clickProduct(id: number) {
    console.log(id);
  }

  getProducts() {
    this.productsService.getAllProducts()
    .subscribe(res => {
      this.products = res;
    });
  }
}
