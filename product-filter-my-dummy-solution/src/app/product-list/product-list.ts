import { Component, Input } from '@angular/core';
import { Product } from '../app';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() productsList: Product[] = [];

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
