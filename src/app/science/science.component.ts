import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  next1=true;
  next2=true;
  next3=true;
  next4=true;
  next5=true;

  qn1=false;
  qn2=true;
  qn3=true;
  qn4=true;
  qn5=true;
qns1=false;
qns2=true;
qns3=true;
qns4=true;
qns5=true;
ans1=true;
ans2=false;
ans3=false;
ans4=false;
ans5=false;
scoreCard=true;
count=0;
cAns1(){
this.qns1=true;
this.ans1=false;
this.count=this.count+1;
this.next1=false;

}
wAns1(){
  this.qns1=true;
  this.ans1=false;
  this.next1=false;
}
nextBut1(){
this.qn1=true;
this.qn2=false;
this.qns2=false;
this.ans2=true;
}
cAns2(){
  this.qns2=true;
  this.ans2=false;
  this.count=this.count+1;
  this.next2=false;
  }
  wAns2(){
    this.qns2=true;
    this.ans2=false;
    this.next2=false;
  }
  nextBut2(){
  this.qn2=true;
  this.qn3=false;
  this.qns3=false;
    this.ans3=true;
  }
  cAns3(){
    this.qns3=true;
    this.ans3=false;
    this.count=this.count+1;
    this.next3=false;
    
    }
    wAns3(){
      this.qns3=true;
      this.ans3=false;
      this.next3=false;
    }
    nextBut3(){
    this.qn3=true;
    this.qn4=false;
    this.qns4=false;
    this.ans4=true;
    }
    cAns4(){
      this.qns4=true;
      this.ans4=false;
      this.count=this.count+1;
      this.next4=false;
      
      }
      wAns4(){
        this.qns4=true;
        this.ans4=false;
        this.next4=false;
      }
      nextBut4(){
      this.qn4=true;
      this.qn5=false;
      this.qns5=false;
      this.ans5=true;
      }
      cAns5(){
        this.qns5=true;
        this.ans5=false;
        this.count=this.count+1;
        this.next5=false;
        
        }
        wAns5(){
          this.qns5=true;
          this.ans5=false;
          this.next5=false;
        }
        finish(){
          this.qn5=true;
          this.scoreCard=false;
        }
}
