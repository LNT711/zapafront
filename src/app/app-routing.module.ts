import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

  {
    path:'admin',
    component: PrivateLayoutComponent,
    children: [ 
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin/product/list'
      },
      {
        path: 'index.html',
        pathMatch: 'full',
        redirectTo: 'src\app\product\product-list\product-list.component.html'
      },

      {
        path:'product/list',
        component: ProductListComponent
        
      },
      {
        path:'invoice/list',
        component: InvoiceListComponent
      },
      {
        path:'product/create',

        component: ProductFormComponent,
        pathMatch: 'full'
      },
      {
        path:'product/id/:productId',
        component: ProductFormComponent,
        pathMatch: 'full'
      }  
    ]},
    {
      path:'public',
      component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
