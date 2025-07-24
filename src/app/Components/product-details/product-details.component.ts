import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productId: number = 0;
  product: Iproduct | null = null;
  productsIDS: number[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private procutsService: ProductsService,
    private location: Location,
    private router: Router
  ) { }


  ngOnInit() {
    // this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    this.activatedRoute.paramMap.subscribe((pramas) => {
      this.productId = Number(pramas.get('id'))
      // console.log(pramas);
      // console.log(this.productId)

      this.product = this.procutsService.getProductById(this.productId)
    })

  }

  goBack() {
    this.location.back();
  }

  goPrev() {
    this.productsIDS = this.procutsService.getProductsIDS()
    let idx = this.productsIDS.indexOf(this.productId);
    this.router.navigateByUrl(`productDetails/${this.productsIDS[--idx]}`)
    // if(idx != 0) this.router.navigateByUrl(`productDetails/${this.productsIDS[--idx]}`)
    // else alert('this is the last one') 
  }

  goNext() {
    this.productsIDS = this.procutsService.getProductsIDS()
    let idx = this.productsIDS.indexOf(this.productId);
    this.router.navigateByUrl(`productDetails/${this.productsIDS[++idx]}`)
  }


}
