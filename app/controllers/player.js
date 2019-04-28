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
        options: ['Basic cap', 'Cool cap']
      },
      {
        value: 'tunic',
        label: 'Tunic',
        options: ['Basic tunic', 'Cool tunic']
      },
      {
        value: 'pants',
        label: 'Pants',
        options: ['Basic pants', 'Cool pants']
      },
      {
        value: 'boots',
        label: 'Boots',
        options: ['Basic boots']
      },
      {
        value: 'weapon',
        label: 'Weapon',
        options: ['Basic dagger']
      },
      {
        value: 'spell',
        label: 'Spell',
        options: ['Basic prayer']
      }
    ];
  }

  @action updateEquipment(equipment, evt) {
    console.log('updateEquipment', equipment.value, evt.target.value);
    this.data.player[equipment.value] = evt.target.value;
  }
}
