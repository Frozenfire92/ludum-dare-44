import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShopComponent extends Component {
  @service data;

  @action buyItem(item) {
    if (!this.data.player.equipment.findBy('name', item.name)) {
      this.data.player.equipment = [
        ...this.data.player.equipment,
        item
      ];
    }
  }
}
