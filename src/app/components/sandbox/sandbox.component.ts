import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent{
   user = {
      name: '',
      email: '',
      phoneNo: ''
   }

   onSubmit({value, valid}){
      if(valid){
         console.log(value);
      }
      else{
         alert("Form is Invalid");
      }
   }
}

