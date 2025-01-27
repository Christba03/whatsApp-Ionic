import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: false,
})
export class ItemCardComponent {
  @Input() title: string = 'Button Item';
  @Input() description: string = 'Default detail - detail arrow displays on iOS only';
  @Input() time: string = '8:00 a.m.';
  @Input() badge: number = 22;
}