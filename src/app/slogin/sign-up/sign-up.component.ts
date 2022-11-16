import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators  } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
registerForm = new FormGroup({
   name : new FormControl('', [
    Validators.required,
   ]),
   email : new FormControl(''),
   password : new FormControl(''),
   confirm  : new FormControl('') 
})

register(){
  console.log("called");
  
}
  constructor() {
   }
}
