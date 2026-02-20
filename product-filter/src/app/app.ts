import { Component } from '@angular/core';
import { Filters } from './filters/filters';
import { ProductList } from './product-list/product-list';

export interface Product {
  title: string;
  category: 'clothing' | 'footwear' | 'accessories';
  gender: 'men' | 'women';
  brand: string;
}

@Component({
  selector: 'app-root',
  imports: [Filters, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // App heading
  title = 'Product Filter';

  // filter option arrays (lowercase to avoid case mismatch)
  genders: string[] = ['all', 'men', 'women'];
  categories: string[] = ['all', 'clothing', 'footwear', 'accessories'];

  // sample product list (all values lowercase)
  products: Product[] = [
    { title: 'Basic T-Shirt', category: 'clothing', gender: 'men', brand: 'Nike' },
    { title: 'Women Heels', category: 'footwear', gender: 'women', brand: 'Zara' },
    { title: 'Running Sneakers', category: 'footwear', gender: 'men', brand: 'Adidas' },
    { title: 'Leather Handbag', category: 'accessories', gender: 'women', brand: 'Gucci' },
    { title: 'Denim Jacket', category: 'clothing', gender: 'men', brand: 'Levis' },
    { title: 'Scarf', category: 'accessories', gender: 'women', brand: 'H&M' }
  ];

  // current selected filters (null => no filter)
  selectedGender: string | null = null;
  selectedCategory: string | null = null;

  // normalize selection: convert 'all' to null, otherwise lowercase
  onGenderSelected(value: string | null) {
    this.selectedGender = (value && value.toLowerCase() !== 'all') ? value.toLowerCase() : null;
  }

  onCategorySelected(value: string | null) {
    this.selectedCategory = (value && value.toLowerCase() !== 'all') ? value.toLowerCase() : null;
  }

  // filtered products, applying both filters (AND). simple and readable.
  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const genderMatch = !this.selectedGender || product.gender === this.selectedGender;
      const categoryMatch = !this.selectedCategory || product.category === this.selectedCategory;
      return genderMatch && categoryMatch;
    });
  }
}
