import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  answers = [{
    type: 'yes',
    text: 'да'
  },{
    type: 'no',
    text: 'нет'
  }];

  submitForm(event: Event, form: HTMLFormElement) {
    event.preventDefault();
    console.log("Submited", form);
  }
}
