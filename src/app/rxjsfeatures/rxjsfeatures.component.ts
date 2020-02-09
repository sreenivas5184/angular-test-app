import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';


@Component({
  selector: 'app-rxjsfeatures',
  templateUrl: './rxjsfeatures.component.html',
  styleUrls: ['./rxjsfeatures.component.css']
})
export class RxjsfeaturesComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    const person = {
      name: 'Sreenivas'
    };
    // const promisPer: Promise<any> = Promise.resolve(person);
    // it will convert the promise into observable
    // const obsPer: Observable<any> = from(promisPer);
    // below line convert the person object into Observale object
    const obsPer: Observable<any> = of(person);
    obsPer.subscribe(val => console.log(val));

    const data = of('Sreenivas').pipe(map(name => name.toUpperCase()));
    data.subscribe(val => console.log(val));
    // tap() will not change the data but we can see the data in tap()
    // const data = of('Sreenivas').pipe(tap(name => name.toUpperCase()));
    // map() is same as a java8 map()
    // if we call subscribe on obserable then obserable will execute multiple times.
    // here we can see pipe console 2 times as we call subscribe 2 times
    // const data = of('Sreenivas').pipe(tap(name => { console.log('in observable method'); name.toUpperCase(); }));
    // data.subscribe(val => console.log(val));
    // data.subscribe(val => console.log(val));
    // if we use share() then only one time obserable will execute
    // const data = of('Sreenivas').pipe(share());
    // data.subscribe(val => console.log(val));
    // data.subscribe(val => console.log(val));

  }

}
