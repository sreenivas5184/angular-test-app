import { Component, OnInit, Input } from '@angular/core';
import { IotServiceService } from '../iot-service.service';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})
export class MakerComponent implements OnInit {

  // @Input()
  mkVal: any;
  constructor(private iotSv: IotServiceService) { }

  ngOnInit() {
    // this.mkVal = this.iotSv.getColour();
    this.iotSv.subscribeAl((mkVal: string) => {
      this.mkVal = mkVal;
    });
  }

}
