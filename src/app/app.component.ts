
import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
import { NgbdModalBasic } from './modal-basic';
import { DatePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { loadCldr, L10n } from '@syncfusion/ej2-base';

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
   @ViewChild('ejDatePicker') ejDatePicker: DatePickerComponent;
   ngOnInit(): void {
    /*loads the localization text*/
    L10n.load({
        'de': {
            'datepicker': {
                placeholder: 'Wählen Sie ein Datum'
            }
        },
        'en': {
            'datepicker': {
                placeholder: 'Choose a date'
            }
        },
        'ar': {
            'datepicker': {
                placeholder: 'اختر تاريخا'
            }
        }
    });
    
    /*  loadCldr method to load the culture specific JSON file.*/
    loadCldr(
        require('../../node_modules/cldr-data/main/de/ca-gregorian.json'),
        require('../../node_modules/cldr-data/main/de/numbers.json'),
        require('../../node_modules/cldr-data/main/de/timeZoneNames.json')
    );
        
   }
}   


