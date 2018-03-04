import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mob:number;
name:string;
image=false;
login=false;
otpkey=true;
n:number;
home=true;
  alert(name:string,mob:number){
    this.name=name;
    this.mob=mob;
    this.n=(((mob%10000)*3252345345)%10000);
      alert("HI "+name+" YOUR OTP IS : "+this.n);
    this.login=true;
    this.otpkey=false;
    }
    otp(pass:number){
if(this.n==pass)
{
     this.home=false;
     this.otpkey=true;
     this.image=true;
}else{
this.login=false;
this.otpkey=true;
}
    }
}
