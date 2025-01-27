import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  standalone: false,
})
export class FloatingButtonComponent {
  buttonIcon = 'camera';  // Change to your default icon
  showSecondButton = true;  // Controls visibility of second button

  // Toggle the first button's icon
  toggleIcon() {
    this.buttonIcon = this.buttonIcon === 'camera' ? 'search' : 'camera';
  }

  // Handle the second button's click event
  onSecondButtonClick() {
    console.log('Second button clicked!');
    // Perform actions for the second button
  }
}
