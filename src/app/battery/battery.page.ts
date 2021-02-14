import { Component, OnInit } from '@angular/core';

import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.page.html',
  styleUrls: ['./battery.page.scss'],
})
export class BatteryPage implements OnInit {
  subscription: any;
  isCharging: any;
  findCharge: any;

  ngOnInit() {
    this.onBatteryStatus();
  }

  constructor(private batteryStatus: BatteryStatus) {

  }

  // Check battery status
  onBatteryStatus() {
    this.subscription = this.batteryStatus.onChange().subscribe(status => {
      this.isCharging = "" + status.isPlugged;
      this.findCharge = "" + status.level;

      console.log(this.isCharging + " " + this.findCharge)

      //alert("Level: " + status.level + " Is plugged: " + status.isPlugged);
    });
  }

  getCharge() {
    this.onBatteryStatus();

    var html = "" + this.findCharge + "%";

    return html;
  }

  chargingStatus() {
    var html = "";

    if (this.isCharging == true) {
      html += "Charging";
    }
    else {
      html += "Not Charging";
    }

    return html;
  }

  isCritical() {
    this.subscription = this.batteryStatus.onCritical().subscribe(status => {
      alert("Battery Level Critical. Put it on Charger");
    });

    this.subscription = this.batteryStatus.onLow().subscribe(status => {
      alert("Battery Level Critical. Put it on Charger");
    });

  }
  // Unsubscribe subscription
  unsubscribeBatteryCheck() {
    this.subscription.unsubscribe();
  }

}
