import { ItemType } from './item-type.enum';

export class Item {
  constructor(public type: ItemType, public winsAgainst: ItemType[]) { }
  playAgainst(enemy: ItemType): string {

    if (enemy === this.type) {
      return 'unentschieden';
    } else {
      console.log(enemy, this.type, this.winsAgainst);
      return this.winsAgainst.indexOf(enemy) === -1 ? 'Du hast verloren' : 'Du hast gewonnen';
    }
  }
  getSpriteOffsetX(): string {
    return `${150 * this.getClassName()}px`;
  }
  getClassName(): number {
    return this.type;
  }
}
