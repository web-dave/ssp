import { Component } from '@angular/core';

import { ItemType, Item } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SSP';
  private result: string = null;
  private userSelected: Item;
  private mySelected: Item;

  private sspList: Item[] = [
    new Item(ItemType.Schere, [ItemType.Papier]),
    new Item(ItemType.Papier, [ItemType.Stein, ItemType.Brunnen]),
    new Item(ItemType.Stein, [ItemType.Schere]),
    new Item(ItemType.Brunnen, [ItemType.Stein, ItemType.Schere])];


  selectSSP(type: Item) {
    this.userSelected = type;
    this.myTurn();
  }

  myTurn() {
    this.mySelected = this.sspList[(Math.ceil(this.sspList.length * Math.random()) - 1)];
    this.result = this.andTheWinnerIs(this.userSelected, this.mySelected);
  }

  andTheWinnerIs(user: Item, computer: Item): string {
    return user.playAgainst(computer.type);
  }
}

