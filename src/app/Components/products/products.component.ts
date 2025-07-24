import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategories } from '../../Models/icategories';
import { FormsModule } from '@angular/forms';
import { ImageStylingDirective } from '../../Directives/image-styling.directive';
import { SeparatorPipe } from '../../Pipes/separator.pipe';
import { ProductsService } from '../../Services/products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products', // directive => component directive
  standalone: true,
  imports: [CommonModule, FormsModule, ImageStylingDirective, SeparatorPipe , RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges, OnInit {

  // products: Iproduct[];
  // productsCategories: ICategories[];
  totoalPrice: number = 0;
  selectedId: number = 1;
  filteredProducts!: Iproduct[];
  dateNow: Date = new Date;

  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';

  @Input() selectedCategoreId: number = 1;
  @Output() onTotoalPriceChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private productsService: ProductsService , private router: Router) {
    // this.products = [
    //   { id: 1, name: 'T-shirt', price: 222, imgUrl: 'https://picsum.photos/seed/picsum/200/300', quantity: 3, categoryId: 1 },
    //   { id: 2, name: 'Shoose', price: 333, imgUrl: 'https://picsum.photos/seed/picsum/200/300', quantity: 6, categoryId: 1 },
    //   { id: 3, name: 'Iphone', price: 2345, imgUrl: 'https://picsum.photos/seed/picsum/200/300', quantity: 1, categoryId: 2 },
    //   { id: 4, name: 'Andorid', price: 70000, imgUrl: 'https://picsum.photos/seed/picsum/200/300', quantity: 2, categoryId: 2 },
    //   { id: 5, name: 'Dell', price: 9000000, imgUrl: 'https://picsum.photos/seed/picsum/200/300', quantity: 8, categoryId: 3 },
    //   { id: 6, name: 'Mac', price: 9000000, imgUrl: 'https://picsum.photos/seed/picsum/200/300', quantity: 0, categoryId: 3 },
    // ];

    // this.productsCategories = [
    //   {catId: 1, name: "Closses"},
    //   {catId: 2, name: "Mobile"},
    //   {catId: 3, name: "Labtob"},
    // ]

  }
  ngOnInit() {
    // this.filteredProducts = this.products;
    this.filteredProducts = this.productsService.getAllProducts();
  }


  buy(prdPrice: number, inpValue: string) {
    this.totoalPrice += prdPrice * +inpValue;
    // prdPrice * parseInt(inpValue)
    this.onTotoalPriceChanged.emit(this.totoalPrice)
  }

  // clickBTN(){
  //   this.selectedId = 3;
  // }

  trackFun(index: number, prd: Iproduct) {
    return prd.id;
  }

  // life cycle 

  ngOnChanges() {
    // this.filterProducts()
    this.filteredProducts = this.productsService.getProductByCategoryId(this.selectedCategoreId)
  }

  // filterProducts() {
  //   // this.filteredProducts = this.products.filter((prd) => prd.categoryId == this.selectedCategoreId)

  // }


  showDetails(id: number){
    // this.router.navigateByUrl(`/productDetails/${id}`)
    this.router.navigate(['/productDetails',id]).then(()=> console.log('Gone To this route successfully'))
  }


}
