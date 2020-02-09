import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsfeaturesComponent } from './rxjsfeatures.component';

describe('RxjsfeaturesComponent', () => {
  let component: RxjsfeaturesComponent;
  let fixture: ComponentFixture<RxjsfeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsfeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
