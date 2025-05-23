import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  imports: [FormsModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css',
})
export class SimpleFormComponent {
  nameInput: String = '';
  ageInput: String = '';
  cityInput: String = '';
}
