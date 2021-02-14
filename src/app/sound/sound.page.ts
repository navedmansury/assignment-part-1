import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Backlight } from '@ionic-native/backlight/ngx';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.page.html',
  styleUrls: ['./sound.page.scss'],
})
export class SoundPage implements OnInit {

  cnt: any;
  torchOn: any;
  torchStatus: any;

  constructor(private nativeAudio: NativeAudio, private backlight: Backlight) {
    this.cnt = 0;
    this.torchOn = false;
    this.torchStatus = "OFF";

    this.nativeAudio.preloadSimple('uniqueId1', './file1.mpeg').then(function (msg) { }, function (msg) {
      console.log('error: ' + msg);
    });

    this.nativeAudio.preloadSimple('uniqueId2', './file2.mpeg').then(function (msg) { }, function (msg) {
      console.log('error: ' + msg);
    });
  }

  ngOnInit() {
  }

  playSound() {

    if (this.cnt == 0) {
      this.cnt = 1;

      this.nativeAudio.loop('uniqueId1').then(function (msg) { }, function (msg) {
        console.log('error: ' + msg);
      });

    }
    else {
      this.cnt = 0;

      this.nativeAudio.loop('uniqueId2').then(function (msg) { }, function (msg) {
        console.log('error: ' + msg);
      });
    }

    /*this.nativeAudio.stop('uniqueId1').then(function (msg) { }, function (msg) {
      console.log('error: ' + msg);
    });

    this.nativeAudio.unload('uniqueId1').then(function (msg) { }, function (msg) {
      console.log('error: ' + msg);
    });*/

  }

  torchFunction() {
    if (this.torchOn == false) {
      // Turn backlight on
      this.torchOn = true;
      this.torchStatus = "ON";
      this.backlight.on().then(() => console.log('backlight on'));
    }
    else {
      // Turn backlight off
      this.torchOn = false;
      this.torchStatus = "OFF";
      this.backlight.off().then(() => console.log('backlight off'));
    }



  }



}
