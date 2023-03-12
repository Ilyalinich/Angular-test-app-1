import { Component } from '@angular/core';
import { Address } from 'src/app/address';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  address = new Address();

  onSubmit() {
    alert("Thanks for submiting! Data: " + JSON.stringify(this.address));
  }

}
