import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ReactiveFormExModule {}
