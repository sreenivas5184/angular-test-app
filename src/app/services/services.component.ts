import { Component, OnInit } from '@angular/core';
import { IotServiceService } from '../iot-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
  // providers: [IotServiceService]
})
export class ServicesComponent implements OnInit {

  crRpm: number;
  altVal: any;
  constructor(private iotSv: IotServiceService) { }

  ngOnInit() {
  }
  inc(val: number) {
    if (val === 1) {
      this.crRpm = this.iotSv.incRpm();
    } else {
      this.crRpm = this.iotSv.decRpm();
    }
  }
  makeColour(val: any) {
    this.altVal = val;
  }

}
