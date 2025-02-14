import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/interfaces/products/iproduct';
import { ProductsService } from '../../core/services/products/products.service';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [ CurrencyPipe ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit , OnDestroy{

  productID !:string;
  id !:number;
  products !:IProduct[];
  productSub !: Subscription;

  constructor(private _ActivatedRoute : ActivatedRoute , private _ProductsService : ProductsService){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param)=>{
        this.productID = param.get('p_id') !;
      }
    })

    this.id = +this.productID;

    this.productSub = this._ProductsService.getAllProducts().subscribe({
      next: (res)=>{
        this.products = res;
      }
    })
  }
  
  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }
}
