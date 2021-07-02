import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'contacts',
  component: ContactComponent
},
{
  path: 'demo',
  component: DemoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
