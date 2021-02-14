import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccelerationPageRoutingModule } from './acceleration-routing.module';

import { AccelerationPage } from './acceleration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccelerationPageRoutingModule
  ],
  declarations: [AccelerationPage]
})
export class AccelerationPageModule {}
