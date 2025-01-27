import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { RouterModule } from '@angular/router';  // Import RouterModule
import { FloatingButtonComponent } from '../floating-button/floating-button.component';
import { ItemCardComponent } from '../item-card/item-card.component';
import { PopoverMenuComponent } from '../app-popover-menu/app-popover-menu.component';  // Import PopoverMenuComponent

@NgModule({
  declarations: [
    FloatingButtonComponent,
    ItemCardComponent,
    PopoverMenuComponent,  // Declare PopoverMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,  // Ensure IonicModule is imported for Ionic components
    RouterModule,  // Import RouterModule for routing functionality
  ],
  exports: [
    FloatingButtonComponent,
    ItemCardComponent,
    PopoverMenuComponent,  // Export PopoverMenuComponent
  ]
})
export class SharedModule {}
