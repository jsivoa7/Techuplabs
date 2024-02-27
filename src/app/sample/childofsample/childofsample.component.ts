import { Component, OnInit,ViewChild,ElementRef, AfterViewInit,Inject,HostListener, Input } from '@angular/core';
import{SampleComponent} from '../sample/sample.component'
import { DOCUMENT } from '@angular/common';
import{DataService} from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-childofsample',
  templateUrl: './childofsample.component.html',
  styleUrls: ['./childofsample.component.scss']
})
export class ChildofsampleComponent implements OnInit {
  @Input() customer: boolean;
  @Input() heading: string;
  checkoutForm: any;
  countries:any=["India","USA",'UK'];
  regions:any=["Tamilnadu","Washington",'London'];
  selectedValue=''
  name:any;
  public values;
  ngOnInit(): void {
    console.log(this.customer)
  }
  
  constructor(@Inject(DOCUMENT) private document,private formBuilder:FormBuilder,private dataservice:DataService,private activatedRoute:ActivatedRoute,private router:Router ) { 
    this.checkoutForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      email:['',[Validators.required]],
    });
  }
  onSubmit(customerData) {
    this.checkoutForm.reset();
    this.checkoutForm.markAsUntouched();
  console.log(this.checkoutForm)

   
    }
    overlayoff(){
      document.getElementById("overlay").style.display = "none";
      this.checkoutForm.reset();
    this.checkoutForm.markAsUntouched();
    }
  
}
