import { Component, OnInit, ElementRef, ViewChild, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit , AfterContentInit {
  val = 'sreenivas';
  @ViewChild('nvm', {static : true})
  evt: ElementRef;
  @ContentChild('app', {static : true})
  app: ElementRef;

  @ContentChildren(ChildComponent) childComponent: QueryList<ChildComponent>;
  constructor(private router: Router) { }

  ngOnInit() {
    this.evt.nativeElement.style.border = '1px solid green';
    this.app.nativeElement.style.border = '1px solid green';
  }
  clk() {
    this.val = 'Rajaaa';
  }
  ngAfterContentInit(): void {
    console.log(this.childComponent);
  }
}
