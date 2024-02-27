import { Component,ElementRef,ViewChild,AfterViewInit } from '@angular/core';
import{DataService} from './data.service';
import {ClassModule} from './class.module';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import{FormGroup} from '@angular/forms'
import { Posts } from './posts';
import { Router, ActivatedRoute } from '@angular/router';
import * as JSZip from 'jszip';
import { Observable } from 'rxjs';
declare var sketchup:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  constructor(){
    
    
  }
  
}
