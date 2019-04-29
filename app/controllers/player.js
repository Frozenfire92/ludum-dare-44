import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlayerController extends Controller {
  @service data;

  @computed()
  get equipables() {
    return [
      {
        value: 'headgear',
        label: 'Headgear',
        options: this.data.player.equipment.filterBy('type', 'headgear').mapBy('name')
      },
      {
        value: 'tunic',
        label: 'Tunic',
        options: this.data.player.equipment.filterBy('type', 'tunic').mapBy('name')
      },
      {
        value: 'pants',
        label: 'Pants',
        options: this.data.player.equipment.filterBy('type', 'pants').mapBy('name')
      },
      {
        value: 'boots',
        label: 'Boots',
        options: this.data.player.equipment.filterBy('type', 'boots').mapBy('name')
      },
      {
        value: 'weapon',
        label: 'Weapon',
        options: this.data.player.equipment.filter(n => ['guns', 'swords', 'daggers', 'nontraditional'].includes(n.type)).mapBy('name')
      }
    ];
  }

  @action updateEquipment(equipment, evt) {
    console.log('updateEquipment', equipment.value, evt.target.value);
    this.data.player[equipment.value] = evt.target.value;
  }
}
