import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePicker, PopupObjectArgs } from '@syncfusion/ej2-ng-calendars';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: 'app/modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  //Calendar open event
  onCalendarOpen(args: PopupObjectArgs) {
    // To fetch the available child elements in body
    let elements: Element[] = <NodeListOf<Element> & Element[]>document.querySelectorAll('body > *');
    let value: string[] = [];
    for (let i = 0; i < elements.length; i++) {
      var element = document.defaultView.getComputedStyle(elements[i], null);
      if (element.getPropertyValue('position') !== 'static') {
        value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex'));// fetching z-index values 
      }
    }
    // fetching maximum z-index value
    let index: string = Math.max.apply(Math, value);
    // setting z-index to calendar popup element
    args.popupElement.element.style.zIndex = index + 1;
  }

  open(content: string) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
