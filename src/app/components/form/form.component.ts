import { Component } from '@angular/core';
// component directives
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // /ngIf
isAllowed:boolean=true;

// ngFor data
userlist:any[]=[
  {name:"john",age:25},
  {name:"raju",age:29},
  {name:"reena",age:25}

];

// ngSwitch
selectedValue:string="blue"



paracolor:string='red'

isActive:boolean=true



}
