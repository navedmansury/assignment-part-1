import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Shake } from '@ionic-native/shake/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-acceleration',
  templateUrl: './acceleration.page.html',
  styleUrls: ['./acceleration.page.scss'],
})
export class AccelerationPage implements OnInit {
  subscription: any;
  watch: any;

  public accX: any;
  public accY: any;
  public accZ: any;

  public shakeCount: any;

  ngOnInit() {
    this.Accelerometer();
    this.shakeToVibrate();
  }

  constructor(private deviceMotion: DeviceMotion, private shake: Shake, private vibration: Vibration) {
    this.accX = 0;
    this.accY = 0;
    this.accZ = 0;
    this.shakeCount = 0;

  }

  // Watch device acceleration
  Accelerometer() {
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) =>
        console.log(acceleration),
      (error: any) => console.log(error)

    );

    // Watch device acceleration
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
      this.accX = acceleration.x;
      this.accY = acceleration.y;
      this.accZ = acceleration.z;
    });

  }

  shakeToVibrate() {
    this.watch = this.shake.startWatch(60).subscribe(() => {
      if (this.shakeCount % 2 == 0) {
        this.shakeCount = 1;

        // Vibrate 2 seconds
        // Pause for 1 second
        // Vibrate for 2 seconds
        // Patterns work on Android and Windows only
        this.vibration.vibrate([2000, 1000, 2000]);
      }
      else {
        this.shakeCount = 0;
        // Stop any current vibrations immediately
        // Works on Android and Windows only
        this.vibration.vibrate(0);
      }

    });


  }


  //Stop Shake
  unsubscibeShake() {
    this.vibration.vibrate(0);
    this.watch.unsubscribe();
  }


  // Stop watch
  unsubscribeAcceleration() {
    this.subscription.unsubscribe();
  }

}
