import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  @Input() title;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onNameChange = new EventEmitter();

  date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  changeName(): void {
    this.title = 'Rajaa';
    this.onNameChange.emit('Rajaa');
  }

}
