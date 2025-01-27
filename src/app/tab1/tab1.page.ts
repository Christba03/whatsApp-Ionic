import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../app-popover-menu/app-popover-menu.component';  // Import the PopoverMenuComponent

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) {}

    // Method to open the popover when the button is clicked
    async openPopover(event: any) {
      const popover = await this.popoverController.create({
        component: PopoverMenuComponent,  // The component to display inside the popover
        event: event,  // Use the event to position the popover near the button
        translucent: true,  // Optional: make the background translucent
      });
      await popover.present();  // Present the popover
    }

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
