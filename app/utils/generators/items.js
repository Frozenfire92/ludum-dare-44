const armorDefinitions = {
  qualities: ['weak', 'tattered', 'worn', 'sturdy', 'durable', 'strong', 'perfect'],
  materials: ['ragged', 'cloth', 'leather', 'plate', 'mail'],
  types: {
    headgear: ['cap', 'circlet', 'helment'],
    tunic: ['vest', 'shirt', 'suit'],
    pants: ['shorts', 'trousers', 'pants'],
    boots: ['sandals', 'shirt']
  }
};

const weaponDefinitions = {
  qualities: ['weak', 'failing', 'used', 'sturdy', 'strong', 'perfect'],
  materials: ['metal', 'plastic', 'microplastic', 'nanoparticle'],
  types: {
    guns: ['blaster', 'rifle', 'beam gun'],
    swords: ['sabre', 'scimitar', 'broadsword'],
    daggers: ['knife', 'dagger', 'spike'],
    nontraditional: ['throwing spears', 'throwing stars', 'nunchaku']
  }
};

const generateItems = (definitions) => {
  return Object.keys(definitions.types).map(type => {
    return {
      label: type,
      data: definitions.qualities
        .map((quality, i) =>
          definitions.materials.map((material, j) =>
            definitions.types[type].map((kind, k) => ({
              type,
              name: `${quality} ${material} ${kind}`,
              cost: ((i + 1) * 100) + ((j + 1) * 10) + ((k + 1) * 10)
            }))
          )
        )
        .flat(2)
    }
  });
}

export const generateArmor = () => {
  return generateItems(armorDefinitions);
}

export const generateWeapons = () => {
  return generateItems(weaponDefinitions);
}

export const generateSpecialItems = () => {
  return [
    {
      label: 'Crown of the crypt',
      value: 1
    }
  ]
}
