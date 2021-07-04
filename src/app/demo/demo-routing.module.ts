import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [{
  path: '',
  component: DemoComponent
}];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule { }
