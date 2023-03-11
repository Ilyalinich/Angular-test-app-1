import { ModalService } from './../../services/modal.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = 'Default modal title'

  constructor(public modalService: ModalService) {}
}
