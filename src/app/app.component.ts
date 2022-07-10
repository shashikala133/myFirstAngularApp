import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  name = 'John';
  random_number="";
  //property
  image ="assets/mobile.jpg ";
  //event binding
  onclick(){
    alert("im an event binding")
  }
  onclick1(){
    console.log("im an event binding")
  }
  
  courses:Courses[]=
  [
    {courseid:1,
    coursename:"angular"},
    {courseid:2,
      coursename:"react"},
      {courseid:3,
        coursename:"vue"},
  ]

  //ngstyle
  mycolor:string='red';
  //bgcolor:string='pink';
css:CSSClass=new CSSClass();
  //ngclass
  //cssprop:string='violet size24';
  cssprop:string[]=['red','size24'];
}
//class for ngfor demo
class Courses{
  courseid:number|undefined;
  coursename:string|undefined;
}

class CSSClass

{
  red:boolean=true;
  size24:boolean=true;
}

