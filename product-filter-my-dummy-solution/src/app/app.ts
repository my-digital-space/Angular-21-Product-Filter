import { Component } from '@angular/core';
import { Filter } from './filter/filter';
import { ProductList } from './product-list/product-list';

export interface Product {
  id: number;
  title: string;
  category: string;
  gender: string;
  brand: string;
}

@Component({
  selector: 'app-root',
  imports: [Filter, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  gendersList: string[] = ["All", "Men", "Women"];
  categoriesList: string[] = ["All", "Clothing", "Footwear", "Accessories"];

  selectedGender: string = '';
  selectedCategory: string = '';

  productsList: Product[] = [
    { id: 1, title: 'Basic T-Shirt', category: 'Clothing', gender: 'Men', brand: 'Nike' },
    { id: 2, title: 'Women Heels', category: 'Footwear', gender: 'Women', brand: 'Zara' },
    { id: 3, title: 'Running Sneakers', category: 'Footwear', gender: 'Men', brand: 'Adidas' },
    { id: 4, title: 'Leather Handbag', category: 'Accessories', gender: 'Women', brand: 'Gucci' },
    { id: 5, title: 'Denim Jacket', category: 'Clothing', gender: 'Men', brand: 'Levis' },
    { id: 6, title: 'Scarf', category: 'Accessories', gender: 'Women', brand: 'H&M' }
  ];

  onGenderChanged(genderFilter: string): void {
    this.selectedGender = genderFilter;
    // console.log('Parent received genderFilter:', this.selectedGender);
  }

  onCategoryChanged(categoryFilter: string): void {
    this.selectedCategory = categoryFilter;
    // console.log('Parent received categoryFilter:', this.selectedCategory);
  }

  // filtered products, applying both filters (AND).
  get getFilteredProducts(): Product[] {
    return this.productsList.filter(product => {
      
      const genderMatch = !this.selectedGender ||
        this.selectedGender.toLowerCase() === "all" ||
        product.gender.toLowerCase() === this.selectedGender.toLowerCase();

      const categoryMatch = !this.selectedCategory ||
        this.selectedCategory.toLowerCase() === "all" ||
        product.category.toLowerCase() === this.selectedCategory.toLowerCase();

      return genderMatch && categoryMatch;
    });
  }

}
