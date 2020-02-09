import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IotServiceService } from '../iot-service.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  // @Output()
  // ClEvt: EventEmitter<any> = new EventEmitter();
  constructor(private iotSv: IotServiceService) { }

  ngOnInit() {
  }
  pickColour(val: any) {
   // console.log(val);
   // this.iotSv.setColour(val);
    this.iotSv.publishAl(val);
  //  this.ClEvt.emit(val);
  }

}
