import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { ChildComponent } from './child/child.component';
import { PostsServiceService } from './posts-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralDirectiveDirective } from './structural-directive.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { CustalertComponent } from './custalert/custalert.component';
import { ServicesComponent } from './services/services.component';
import { IotServiceService } from './iot-service.service';
import { PickerComponent } from './services/picker.component';
import { MakerComponent } from './services/maker.component';
import { MyserviceService } from './services/myservice.service';
import { RxjsfeaturesComponent } from './rxjsfeatures/rxjsfeatures.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { AuthserviceService } from './interceptors/authservice.service';
import { ErrorService } from './interceptors/error.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    ChildComponent,
    DirectiveComponent,
    StructuralDirectiveDirective,
    LifecycleComponent,
    DatabindingComponent,
    CustalertComponent,
    ServicesComponent,
    PickerComponent,
    MakerComponent,
    RxjsfeaturesComponent,
    InterceptorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents : [
    ChildComponent
  ],

  providers: [PostsServiceService, IotServiceService, MyserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthserviceService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
