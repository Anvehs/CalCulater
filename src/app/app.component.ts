import { Component, ElementRef, ViewChild, ViewChildren,OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalCulater';

  showValue:string='0'
  currentValue:string='';
  constructor(private el:ElementRef){
  }
  ngOnChanges(Change:SimpleChange){
        
  }
  function(value:any){
    this.currentValue=this.currentValue + value
    this.showValue=this.currentValue
  }
  

  finalResulat(){
    this.showValue=eval(this.currentValue);
    this.currentValue=this.showValue;
  }

  inputBox(value:any){
    if(value.charAt(0)=='0')
    {
      value=value.slice(1,)
    }
  this.showValue=eval(value)
  }
  clear(){
    this.showValue='0';
  }

  
  back(){
    this.currentValue=this.currentValue.slice(0,-1);
    this.showValue=this.currentValue;
    if(this.showValue=='')
    {
      this.showValue='0'
    }
  }


}
