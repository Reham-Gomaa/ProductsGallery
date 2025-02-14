import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
   
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component: HomeComponent },
    {path:'details/:p_id' , loadComponent:()=> import('./pages/product-details/product-details.component').then( (c)=> c.ProductDetailsComponent )},
    {path:'**' , loadComponent:()=>import('./pages/notfound/notfound.component').then((c)=>c.NotfoundComponent)},
    
];
