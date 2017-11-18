import { Component } from '@angular/core';
import { DatePicker, PopupObjectArgs } from '@syncfusion/ej2-ng-calendars'; 

@Component({
    selector: 'app-container',
    template: `<ej-datepicker id="datepick" (open)="onOpen($event)" (close)="onClose($event)"></ej-datepicker>`
})
export class AppComponent {
    constructor() { 
    }
    onOpen(args: any) {
      document.querySelector('#overlay').classList.add('modal-backdrop', 'fade', 'in');
      let elements: Element[] = <NodeListOf<Element> & Element[]>document.querySelectorAll('body > *');
      let value: string[] =[];
      for (let i = 0; i < elements.length; i++) {
          var element = document.defaultView.getComputedStyle(elements[i], null);
          if (element.getPropertyValue('position') !== 'static') {
              value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex'));// fetching z-index values 
          }
      }
      let index: string = Math.max.apply(Math, value);// fetching maximum z-index value
      args.popupElement.element.style.zIndex = index + 1; // setting z-index of calendar
      } 
     onClose(args: any) {
       document.querySelector('#overlay').classList.remove('modal-backdrop', 'fade', 'in');
     }
}
