import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  toggleButton(selectedButton: string) {
    const buttons = document.querySelectorAll('.radio-btn');

    // Reset all buttons to inactive state
    buttons.forEach((btn: any) => {
      btn.disabled = false;
      btn.classList.remove('active');
    });

    // Disable and activate the clicked button
    const clickedButton = document.getElementById(selectedButton) as HTMLIonButtonElement;
    clickedButton.disabled = true;
    clickedButton.classList.add('active');
  }

  onCameraClick() {
    console.log('Camera button clicked!');
  }

  onSearchClick() {
    console.log('Search button clicked!');
  }

  onMenuClick() {
    console.log('Menu button clicked!');
  }
}
