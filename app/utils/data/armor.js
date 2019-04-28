const qualities = ['weak', 'tattered', 'worn', 'sturdy', 'durable', 'strong', 'perfect'];
const materials = ['ragged', 'cloth', 'leather', 'plate', 'mail'];
const types = {
  headgear: [
    'cap', 'circlet', 'helment'
  ],
  tunic: [
    'vest', 'shirt', 'suit'
  ],
  pants: [
    'shorts', 'trousers', 'pants'
  ],
  boots: [
    'sandals', 'shirt',
  ]
}

export const generateArmor = () => {
  return Object.keys(types).map(type => {
    return {
      label: type,
      data: qualities
        .map((quality, i) =>
          materials.map((material, j) =>
            types[type].map((kind, k) => ({
              name: `${quality} ${material} ${kind}`,
              cost: ((i + 1) * 100) + ((j + 1) * 10) + ((k + 1) * 10)
            }))
          )
        )
        .flat(2)
    }
  });
}
