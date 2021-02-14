import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccelerationPage } from './acceleration.page';

const routes: Routes = [
  {
    path: '',
    component: AccelerationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccelerationPageRoutingModule {}
