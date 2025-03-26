import { Component, OnInit } from '@angular/core';
import { ProductService, Product, Category } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    categories: string[] = ['Phone', 'Laptop', 'Watches', 'Headphones', 'Audio equipment'];
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data.map((category: Category) => category.name);
    });
  }

  loadProductsByCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.productService.getProductsByCategory(categoryId).subscribe((data) => {
      this.products = data;
    });
  }
}
