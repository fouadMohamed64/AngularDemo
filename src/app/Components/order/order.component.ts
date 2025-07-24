import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ICategories } from '../../Models/icategories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, ProductsComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {

  selectedId: number = 1;
  productsCategories: ICategories[];
  totalOrderPrice:number=0;

  @ViewChild('userName') inputValue!:ElementRef;
  @ViewChild(ProductsComponent) prdComponent!:ProductsComponent;

  constructor() {
    this.productsCategories = [
      { catId: 1, name: "Closses" },
      { catId: 2, name: "Mobile" },
      { catId: 3, name: "Labtob" },
    ]
  }

  ngAfterViewInit() {
    console.log(this.inputValue.nativeElement.value)
    console.log(this.prdComponent)
  }

  viewTotalPrice(tOPrice:number){
    this.totalOrderPrice = tOPrice;
  }
}
