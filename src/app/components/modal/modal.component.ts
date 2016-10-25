import {Component,ViewChild,EventEmitter} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
  inputs: ['isYesNoModal:isYesNoModal','msg:msg'],
  outputs: ['modalCloseEE']
})
export class ModalComponent {
  private isYesNoModal: boolean = false;
  private msg: string = '';
  private modalCloseEE: EventEmitter<any> = new EventEmitter();
  @ViewChild('content') modal: ViewChild;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.modal).result.then((result) => {
      /* close */
      this.modalCloseEE.next(result);
    }, (result) => {/* dismiss */});
  }
}
