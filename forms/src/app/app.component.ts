import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-invalid.ng-touched {
    border: 1px solid red;
  }`]
})
export class AppComponent {
  
  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'да'
  },{
    type: 'no',
    text: 'нет'
  }];

  defaultAnswer = 'yes';
  defaultCountry = 'uk';

  addRandEmail(){
    const randEmail = "sfgrsg@sgr.com";
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: '' 
    // });
    this.form.form.patchValue({
      user: { 
        email: randEmail
       }
    });
  }

  formData = {};
  isSubmited = false;

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
    console.log("Submited", this.form);
  }
}
