// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy, Input } from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input()
  demo: string;
  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('onchages');
    console.log(changes);
  }
  ngOnInit() {
    console.log('oninit');
  }
  ngDoCheck(): void {
    console.log('docheck');
  }
  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }
  ngAfterContentInit(): void {
    console.log('aftercontentinit');

  }
  ngAfterViewChecked(): void {
    console.log('afterviewchecked');
  }
  ngAfterContentChecked(): void {
    console.log('aftercontentcheck');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}
