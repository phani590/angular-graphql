import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormExModule } from './reactive-from/reactive-form-ex.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormExModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
