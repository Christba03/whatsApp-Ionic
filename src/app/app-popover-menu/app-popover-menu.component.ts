import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-menu',
  standalone: false,
  template: `
    <ion-list lines="none">
      <ion-item button (click)="selectOption(tab1)">
        <ion-label>{{ tab1 }}</ion-label>
      </ion-item>
      <ion-item button (click)="selectOption(tab2)">
        <ion-label>{{ tab2 }}</ion-label>
      </ion-item>
      <ion-item button (click)="selectOption(tab3)">
        <ion-label>{{ tab3 }}</ion-label>
      </ion-item>
      <ion-item button (click)="selectOption(tab4)">
        <ion-label>{{ tab4 }}</ion-label>
      </ion-item>
      <!-- Aquí agregamos el botón para ajustes con el [routerLink] -->
      <ion-item button [routerLink]="['/settings']" (click)="closePopover()">
        <ion-label>Ajustes</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class PopoverMenuComponent {
  // Define inputs for dynamic content
  @Input() tab1: string = 'Option 1'; 
  @Input() tab2: string = 'Option 2';
  @Input() tab3: string = 'Option 3';
  @Input() tab4: string = 'Option 4';

  constructor(private popoverController: PopoverController) {}

  selectOption(option: string) {
    console.log('Opción seleccionada: ' + option);
    // Add custom logic when an option is selected
  }

  closePopover() {
    this.popoverController.dismiss();
  }
}
