import { Component, OnInit,ElementRef,ViewChild,AfterViewInit,OnDestroy } from '@angular/core';
import{ChildofsampleComponent} from 'src/app/sample/childofsample/childofsample.component'
import{DataService} from 'src/app/data.service';
import {ClassModule} from 'src/app/class.module';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import{FormGroup} from '@angular/forms'
import { Posts } from 'src/app/posts';
import { Router, ActivatedRoute } from '@angular/router';
import * as JSZip from 'jszip';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';
declare var sketchup:any;
declare var $:any;
declare var require: any
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};

  zipvalue:any
  @ViewChild(('some'),{static: true}) something:ElementRef
  //@ViewChild(('ChildofsampleComponent'),{static: true}) someof:ChildofsampleComponent
  items:any=[]
  someof: any;
  ngAfterViewInit(){
   // this.zipvalue=this.someof.search
    //console.log(this.someof.search,"some")
  }
  
  checkoutForm:any;
  
  username:any=[]
  password:any=[];
  titles:any=["Pin1","Pin2",'Pin3'];
 
customer:any=["Customer1","Customer2","Customer3"];
policy:any=["Public","Private",'Public'];
  constructor(private dataservice:DataService,private formBuilder:FormBuilder,private router:Router,private eltRef:ElementRef,private authservice:AuthService) {
    this.checkoutForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password:['',[Validators.required]]
    });
    setTimeout(() => {
    let prop = eltRef.nativeElement.getAttribute('bodyData');
    console.log("prop",prop)
  }, 500)
   }

  file:any;
  //file upload
  fileChanged(e) {
    this.file = e.target.files[0];
    
    var that=this;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      that.someof=fileReader.result
      //base64toarraybuffer
      var BASE64_MARKER = ';base64,';
      var base64Index = that.someof.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      var base64 = that.someof.substring(base64Index);
      var raw = window.atob(base64);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));
    
      for(var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
        
      }
      var blob = new Blob([new Uint8Array(array)], { type: 'img/png' });
      var FileSaver = require('file-saver');
     FileSaver.saveAs(blob, this.file.name);
    // var blobUrl = URL.createObjectURL(blob);
    // console.log(blobUrl,"store")
    // var xhr = new XMLHttpRequest;
    // xhr.responseType = 'blob';
    
    // xhr.onload = function() {
    //    var recoveredBlob = xhr.response;
    
    //    var reader = new FileReader;
    
    //    reader.onload = function() {
    //      var blobAsDataUrl = reader.result;
    //      window.location.href =<any> blobAsDataUrl;
    //    };
    
    //    reader.readAsDataURL(recoveredBlob);
    // };
    
    // xhr.open('GET', blobUrl);
    // xhr.send();
      //arraybuffertobase64;
      var binary = '';
      var bytes = new Uint8Array( array );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      var base= window.btoa( binary )
      var a= document.getElementById("ItemPreview") as HTMLVideoElement
      a.src= "data:video/mp4;base64," + base;
      var b= document.getElementById("Item") as HTMLImageElement
      b.src= "data:img/png;base64," + base;
      console.log("sss",base)
      console.log("typroffff",array)
     }
     fileReader.readAsDataURL(this.file)
     
    var $result = $("#result");
      $result.html("");
      // be sure to show the results
      $("#result_block").removeClass("hidden").addClass("show");
  
      // Closure to capture the file information.
      
          var $title = $("<h4>", {
              text : this.file.name
          });
          var $fileContent = $("<ul>");
          $result.append($title);
          $result.append($fileContent);
          var new_zip = new JSZip();
          new_zip.loadAsync(this.file)                                   // 1) read the Blob
          .then((zip)=> {
              Object.keys(zip.files).forEach((filename)=> {
                zip.files[filename].async('blob').then((fileData)=> {
                  let fileReader = new FileReader();
                  fileReader.onload = (e) => {
                    var blob=new Blob()
                    var url = URL.createObjectURL(blob);
                    console.log("simple",url)
                 var a=fileReader.result
                 console.log(a)
                 $result.append($("<img>").attr("src",a))
                    //$fileContent.append($("<li>").append($("<a>").attr("href", a).attr("download",filename).append(filename)))
                    //console.log(fileReader.result);
                    //var that=this;
                    //that.zipvalue=fileReader.result
                    //document.getElementById('output').setAttribute( 'src',fileReader.result );
                  }
                  fileReader.readAsDataURL(fileData)     
                })
              })
              
          }, function (e) {
              $result.append($("<div>", {
                  "class" : "alert alert-danger",
                  text : "Error reading " + this.file.name + ": " + e.message
              }));
          });
}
  
  ngOnInit(){}
forms:boolean
region:any;
heading: string;
customers(){
  document.getElementById("overlay").style.display = "block";
  this.heading = "Create Customer"
  this.forms = true
  // While receiving request getting cors policy error
  this.dataservice.getapi().subscribe(data=>{data
    console.log("datas",data)
    })
}

pin(){
  document.getElementById("overlay").style.display = "block";
  this.heading = "Create Pin"
  this.forms = false
  // While receiving request getting cors policy error
  this.dataservice.getapi().subscribe(data=>{data
    console.log("datas",data)
    })
}



}
