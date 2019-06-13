import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'да'
  },{
    type: 'no',
    text: 'нет'
  }];

  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl(''),
      country: new FormControl('ua'),
      answer: new FormControl('no')
    });
  }

  onSubmit(){
    console.log(this.form)
  }
}
