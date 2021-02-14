import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoundPageRoutingModule } from './sound-routing.module';

import { SoundPage } from './sound.page';

import { Backlight } from '@ionic-native/backlight/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoundPageRoutingModule
  ],
  declarations: [SoundPage]
})
export class SoundPageModule {

  constructor(private backlight: Backlight) { }

}
