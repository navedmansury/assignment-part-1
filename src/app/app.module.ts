import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BatteryStatus } from '@ionic-native/battery-status/ngx';
//import { Device } from '@ionic-native/device';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Shake } from '@ionic-native/shake/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Backlight } from '@ionic-native/backlight/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    BatteryStatus,
    //Device,
    DeviceMotion,
    Shake,
    Vibration,
    NativeAudio,
    Backlight,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
