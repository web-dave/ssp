import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../shared/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: Item;
  @Output() selected = new EventEmitter();

  selectItem() {
    this.selected.emit(this.item);
  }

  constructor() { }

}
