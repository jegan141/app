import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  img1=false;
  img2=false;
  img3=false;
  img4=false;
imgClick1(){
this.router.navigate(['science']);
this.img1=true;
this.img2=true;
this.img3=true;
this.img4=true;
}
imgClick2(){
  this.router.navigate(['politics']);
  this.img1=true;
this.img2=true;
this.img3=true;
this.img4=true;
  }
  imgClick3(){
    this.router.navigate(['tech']);
    this.img1=true;
this.img2=true;
this.img3=true;
this.img4=true;
    }
    imgClick4(){
      this.router.navigate(['sports']);
      this.img1=true;
this.img2=true;
this.img3=true;
this.img4=true;
      }
}
