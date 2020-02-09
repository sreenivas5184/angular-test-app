import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.css']
})
export class InterceptorsComponent implements OnInit {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  ngOnInit() {
    const obs = this.http.get('https://api.github.com/users/koushikkothagal');
    obs.subscribe((response) => {
      console.log(response);
    });
  }

}
