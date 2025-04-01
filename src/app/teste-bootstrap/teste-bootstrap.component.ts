import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-teste-bootstrap',
  templateUrl: './teste-bootstrap.component.html',
  styleUrl: './teste-bootstrap.component.css',
  imports: [MatFormFieldModule, MatSelectModule]
})
export class TesteBootstrapComponent {
  selected = 'option2';
}
