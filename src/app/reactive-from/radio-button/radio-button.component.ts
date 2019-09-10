import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  public reactiveForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      reactiveRadio: new FormControl(),
    });
  }

  changeUpdate() {
    console.warn(this.reactiveForm.value);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.reactiveForm.value);
  }
}
