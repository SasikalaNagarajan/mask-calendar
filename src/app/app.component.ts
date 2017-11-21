
import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';
//import the datepicker component module
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
//import the loodCldr and L10n from base source
import { loadCldr, L10n, enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
    <hr>
    <p>
      This demo plnkr explains ng-modal dialog with Syncfusion Calendar component.
    </p>
    <hr>
    <ngbd-modal-basic></ngbd-modal-basic>
  </div>
  `
})
export class AppComponent {
   ngOnInit(): void {
    /*loads the localization text*/
    L10n.load({
        'de': {
            'datepicker': {
                placeholder: 'Wählen Sie ein Datum'
            }
        }
    });
    
    /*  loadCldr method to load the 'de' culture specific JSON file.*/
    loadCldr(
        require('../../node_modules/cldr-data/main/de/ca-gregorian.json'),
        require('../../node_modules/cldr-data/main/de/numbers.json'),
        require('../../node_modules/cldr-data/main/de/timeZoneNames.json')
    );
        
   }
}   


