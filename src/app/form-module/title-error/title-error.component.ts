import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-title-error',
  templateUrl: './title-error.component.html',
  styleUrls: ['./title-error.component.scss'],
})
export class TitleErrorComponent implements OnInit {
  group: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.group = this.builder.group({});
    this.group.addControl('errorItem', this.builder.control('', Validators.required));
    const errorControl: AbstractControl = this.group.controls.errorItem;
    this.group.addControl('error21', this.builder.control('', this.createValidator('Error2', errorControl)));
    this.group.addControl('error31', this.builder.control('', this.createValidator('Error3', errorControl)));
    this.group.addControl('error41', this.builder.control('', this.createValidator('Error4', errorControl)));
    this.group.addControl('error42', this.builder.control('', this.createValidator('Error4', errorControl)));
    this.group.addControl(
      'error51',
      this.builder.control(
        '',
        Validators.compose([Validators.pattern('[0-9]*'), this.conditonalValidators([Validators.pattern('[0-9]*')], 'Error5', errorControl)])
      )
    );
    this.group.addControl(
      'error61',
      this.builder.control('', [
        this.createValidator('Error6', errorControl), //
        Validators.pattern('/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/'),
      ])
    );
    this.group.controls.errorItem.valueChanges.subscribe((val) => {
      this.group.controls.error21.setValue('');
      this.group.controls.error21.disable();

      this.group.controls.error31.setValue('');
      this.group.controls.error31.disable();

      this.group.controls.error41.setValue('');
      this.group.controls.error41.disable();
      this.group.controls.error42.setValue('');
      this.group.controls.error42.disable();
      this.group.controls.error51.setValue('');
      this.group.controls.error51.disable();
      if (val === 'Error2') {
        this.group.controls.error21.enable();
      }
      if (val === 'Error4') {
        this.group.controls.error41.enable();
        this.group.controls.error42.enable();
      }
      if (val === 'Error5') {
        this.group.controls.error51.enable();
      }
    });
  }

  createValidator(testValue: string, aControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      aControl.valueChanges.subscribe((val) => {
        if (val === testValue && !control.value) {
          control.setValidators(Validators.required);
        } else {
          control.setValidators(null);
        }
      });
      return null;
    };
  }

  conditonalValidators(otherValid: ValidatorFn[], testValue: string, aControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      aControl.valueChanges.subscribe((val) => {
        const others: ValidatorFn[] = otherValid.slice();
        if (val === testValue && !control.value) {
          others.push(Validators.required);
        }
        control.setValidators(others);
      });
      return null;
    };
  }
}
