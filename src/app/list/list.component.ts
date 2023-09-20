interface MyWindow extends Window {
  updateParams: () => void;
}

declare var window: MyWindow;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  param1 = 'Value 1';
  param2 = 'Value 2';
  param3 = 'Value 3';
  param4 = 'Value 4';
  constructor(private router: Router) { }
  products: any = [{ 
  id: '1001',
  code: this.param1,
  name: this.param2,
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 70,
  category: this.param3,
  quantity: this.param4,
  inventoryStatus: 'INSTOCK',
  rating: 6},
  { 
  id: '2000',
  code: this.param1,
  name: this.param2,
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 99,
  category: this.param3,
  quantity: this.param4,
  inventoryStatus: 'INSTOCK',
  rating: 45},
  { 
  id: '1000',
  code: this.param1,
  name: this.param2,
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: this.param3,
  quantity: this.param4,
  inventoryStatus: 'INSTOCK',
  rating: 5}
  
  ];
  filteredProducts: any = this.products;
  edit(): void {
    console.log("111");
    this.router.navigate(['/login']); // Перенаправление на модуль
    //console.log("111");
  }
  updateList(filters: any) {
    this.filteredProducts = this.products.filter((product: any) => {
      let isMatch = true;
      if (filters.nameFilter) isMatch = isMatch && product.name.includes(filters.nameFilter);
      if (filters.codeFilter) isMatch = isMatch && product.code.includes(filters.codeFilter);
      if (filters.categoryFilter) isMatch = isMatch && product.category.includes(filters.categoryFilter);
      if (filters.quantityFilter) isMatch = isMatch && product.quantity.includes(filters.quantityFilter);
      return isMatch;
    });
  }
  
  // param1 = 'Value 1';
  // param2 = 'Value 2';
  // param3 = 'Value 3';
  // param4 = 'Value 4';
  openEditWindow(productId: string) {
    const editWindow = window.open('', '_blank', 'width=400,height=400');
    
    if (editWindow) {
      

      editWindow.document.write('<html><head><title>Edit Parameters</title></head><body>');
      editWindow.document.write('<div><label for="param1">Parameter 1: </label><input id="param1" value="' + this.param1 + '"></div>');
      editWindow.document.write('<div><label for="param2">Parameter 2: </label><input id="param2" value="' + this.param2 + '"></div>');
      editWindow.document.write('<div><label for="param3">Parameter 3: </label><input id="param3" value="' + this.param3 + '"></div>');
      editWindow.document.write('<div><label for="param4">Parameter 4: </label><input id="param4" value="' + this.param4 + '"></div>');
      editWindow.document.write('<button onclick="window.opener.updateParams()">Update</button>');
      editWindow.document.write('</body></html>');
      editWindow.document.close();

      
      window.updateParams = () => {
        this.param1 = (editWindow.document.getElementById('param1') as HTMLInputElement)?.value || this.param1;
        this.param2 = (editWindow.document.getElementById('param2') as HTMLInputElement)?.value || this.param2;
        this.param3 = (editWindow.document.getElementById('param3') as HTMLInputElement)?.value || this.param3;
        this.param4 = (editWindow.document.getElementById('param4') as HTMLInputElement)?.value || this.param4;
    
        this.updateProduct(productId);
      };
    }
    
    
      // обновите фильтрованный список после изменения продукта
      this.updateList({}); 
    }
  updateProduct(productId: string) {
    const productToUpdate = this.products.find((product: any) => product.id === productId);
    if (productToUpdate) {
      productToUpdate.code = this.param1;
      productToUpdate.name = this.param2;
      productToUpdate.category = this.param3;
      productToUpdate.quantity = this.param4;
    }
    }
}
