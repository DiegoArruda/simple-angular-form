import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleFormComponent } from '../simple-form/simple-form.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, SimpleFormComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: String = '';
  age: String = '';
  buttonState: boolean = false;

  clearFields() {
    this.name = '';
    this.age = '';
  }

  toggleButton() {
    this.buttonState = !this.buttonState;
  }
}
