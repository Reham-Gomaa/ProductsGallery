import { SearchPipe } from './../../shared/pipes/search/search.pipe';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../core/interfaces/products/iproduct';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ CurrencyPipe , CarouselModule , SearchPipe , FormsModule , RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy{
  constructor(private _ProductsService : ProductsService){}

  products !: IProduct[];
  productSub !: Subscription;
  searchKey :string = '';
  data :boolean = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this.productSub = this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res;
        this.data = true;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

}
