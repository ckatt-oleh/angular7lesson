import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'да'
  },{
    type: 'no',
    text: 'нет'
  }];

  charsCount = 5;

  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('slv'),
      answer: new FormControl('yes')
    });
  }

  onSubmit(){
    console.log(this.form)
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount){
      return {
        'lengthError': true
      };
    }
    return null;
  }
}
