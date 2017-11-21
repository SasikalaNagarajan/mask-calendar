import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
import { NgbdModalBasic } from './modal-basic';
import { DatePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { AppComponent } from './app.component';


/**
 * Module
 */

@NgModule({
  imports: [BrowserModule, FormsModule, DatePickerModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()], 
  declarations: [AppComponent, NgbdModalBasic],
  bootstrap: [AppComponent]
})
export class AppModule { }
