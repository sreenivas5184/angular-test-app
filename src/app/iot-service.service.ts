import { Injectable, EventEmitter } from '@angular/core';
import { MyserviceService } from './services/myservice.service';


export class IotServiceService {

  private rpm = 0;
  private altValue: any;

  private alEm: EventEmitter<string> = new EventEmitter();
  constructor(mySer: MyserviceService) { }
  incRpm() {
    return ++this.rpm;
  }
  decRpm() {
    return --this.rpm;
  }
  setColour(val: any) {
    this.altValue = val;
  }
  getColour() {
    return this.altValue;
  }

  publishAl(al: string) {
    this.alEm.emit(al);
  }
  subscribeAl(cbFn: (val: string) => void) {
    this.alEm.subscribe(val => cbFn(val));
  }

}
