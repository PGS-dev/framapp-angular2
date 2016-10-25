import {Component, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent {
  @Input('isYesNoModal') isYesNoModal: boolean = false;
  @Input('msg') msg: string = '';
  @Output('modalCloseEE') modalCloseEE: EventEmitter<any> = new EventEmitter();
  @ViewChild('content') modal: ViewChild;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.modal).result.then((result) => {
      /* close */
      this.modalCloseEE.next(result);
    }, (result) => {/* dismiss */});
  }
}
