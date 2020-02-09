import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custalert',
  templateUrl: './custalert.component.html',
  styleUrls: ['./custalert.component.css']
})
export class CustalertComponent implements OnInit {

  @Input()
  ttl: string;
  // tslint:disable-next-line:no-input-rename
  @Input('typ')
  type: string;

  @Output()
  BtnClk: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.type = `alert alert-${this.type}`;
  }
  Clk() {
    const ev: any = {
      ttl: this.ttl,
      typ: this.type
    };

    this.BtnClk.emit(ev);
  }
}
