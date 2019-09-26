import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleErrorComponent } from '../form-module/title-error/title-error.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent, TitleErrorComponent],
  exports: [RadioButtonComponent, TitleErrorComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ReactiveFormExModule {}
