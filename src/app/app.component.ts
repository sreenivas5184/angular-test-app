import { Component, ViewChild, AfterContentInit, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { PostsServiceService } from './posts-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  isSh: boolean;
  title = 'angular';
  ttll: string;
  typl: string;
  constructor() {

  }
  onChange() {
    this.title = new Date().toString();
  }

  Clk(event: any) {
    this.ttll = event.ttl;
    this.typl = event.typ;
  }
  // responses$;
  // @ViewChild('childComp', {static : true, read : ViewContainerRef}) container;
  // @ViewChild('param', {static : true}) param: ChildComponent;
  // handleOnNameChange(event: any) {
  //  this.person.name = event;
  // }
 // ngOnInit(): void {
    // this.responses$ = this.service.getPosts();
  // }
  // constructor(private resolver: ComponentFactoryResolver) {

  // }
   // tslint:disable-next-line:use-lifecycle-interface
   // ngAfterContentInit(): void {
     // const singleFactory = this.resolver.resolveComponentFactory(ChildComponent);
    // const ref = this.container.createComponent(singleFactory);
    // ref.instance.title = 'Child title';
     // this.param.changeName();
  // }

}
