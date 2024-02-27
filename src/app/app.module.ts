import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import{DataService} from './data.service'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import{FormGroup} from '@angular/forms';
import { SampleComponent } from './sample/sample/sample.component';
import { ChildofsampleComponent } from './sample/childofsample/childofsample.component';
import { DataTablesModule } from 'angular-datatables';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ChildofsampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule
  ],
  providers: [DataService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
