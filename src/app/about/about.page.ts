import { Component, OnInit } from '@angular/core';
//import { Device } from '@ionic-native/device';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*constructor(private device: Device) { }

  ngOnInit() {
  }

  getDeviceModel() {
    //device model
    return "" + this.device.model;
  }

  getPlatform() {
    //device’s operating system name
    return "" + this.device.platform;

  }

  getName() {
    //get name and version of OS
    return "" + this.device.platform + " " + this.device.version;
  }

  getDeviceManufacturer() {
    return "" + this.device.manufacturer;
  }*/

}
