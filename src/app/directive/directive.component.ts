import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  mobiles = ['Apple', 'Moto', 'MI', 'Nokia'];
  bool: boolean;
  constructor() { }

  ngOnInit() {
  }
  toggle = () => {
    this.bool = !this.bool;
  }
}
