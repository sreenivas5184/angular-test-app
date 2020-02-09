import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustalertComponent } from './custalert.component';

describe('CustalertComponent', () => {
  let component: CustalertComponent;
  let fixture: ComponentFixture<CustalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
