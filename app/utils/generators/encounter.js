// let story = {
//   type: 'story',
//   title: '',
//   content: []
// };
// let battle = {
//   type: 'battle',
//   name: '',
//   health: 100,
// };
// let shop = {
//   type: 'shop',
//   items: []
// }

import Chance from 'chance';

const chance = new Chance();

const conversations = [
  'How have you been doing lately?',
  'I haven\'t been sleeping very well lately.',
  'I haven\'t spoken to you in a while.',
  'I have been meaning to get my hair cut.',
  'I heard there was an intelligent civilization on the planet before the... things.',
  'I\'ve always wanted to leave the station, not something a cook gets to do very often.',
  'I don\'t have much time to speak today.',
  'You look like you need to rest.',
  'I wonder where humanity will be in another 100 years.'
];

const crewStatuses = [
  'quiet',
  'agitated',
  'silent',
  'talkative',
  'on edge',
  'irritable'
];

const planetPlaces = [
  'The dense forest',
  'The Highlands',
  'Rocky Beach'
];

const resources = [
  'fresh water lake',
  'field of fruit bushes'
];

const replacer = (n) => n
  .replace(/\$\$\$PLACE\$\$\$/gi, planetPlaces[0])
  .replace(/\$\$\$CREWSTATUS\$\$\$/g, crewStatuses[0])
  .replace(/\$\$\$RESOURCE\$\$\$/g, resources[0]);

export function generateEncounter(type) {
  console.log('chance',chance);
  let r = [];

  switch(type){
    case 'explore-planet': {
      console.log('generateEncounter(explore-planet)');
      let resourceFound = chance.bool({ likelihood: 40 });
      let battle = chance.bool({ likelihood: 75 });

      r.push({
        type: 'story',
        title: 'The Journey',
        content: [
          'The journey to the planet takes about 13 mintues, but it can feel like hours. The aniticipation of the creatures that await makes time drag on. Wondering if you or the crew next to you will return home.',
          '$$$PLACE$$$ was picked as a landing destination. You\'ve heard rumors of this place, but so few have been off station so who knows what is true.',
          'The crew is $$$CREWSTATUS$$$ today. It doesn\'t reassure you.',
          resourceFound
            ? 'Luck would have it where you landed there is a nearby $$$RESOURCE$$$. You have the crew load up the ship.'
            : 'You risked everything and are returning empty handed.',
          ...(battle
            ? ['All was too silent, and suddenly you could hear them. The creatures are flying towards us.']
            : [])
        ].map(replacer)
      });

      if (battle) {
        r.push({
          type: 'battle',
          name: 'A viscious creature',
          health: chance.rpg('15d20', { sum: true })
        });
        console.log('battle', r);
      }
      break;
    }
    case 'explore-system': {
      console.log('generateEncounter(explore-system)');
      let resourceFound = true; // TODO randomize

      r.push({
        type: 'story',
        title: 'The Journey',
        content: [
          'Your crew departs. The $$$$$$ assured you these planets were safe and bountiful of resources.',
          '$$$PLACE$$$ was picked as a landing destination. You\'ve heard rumors of this place, but so few have been off station so who knows what is true.',
          'The crew is $$$CREWSTATUS$$$ today. It doesn\'t reassure you.',
          resourceFound
            ? 'Luck would have it where you landed there is a nearby $$$RESOURCE$$$. You have the crew load up the ship.'
            : 'Your search turned up empty'
        ].map(replacer)
      });
      break;
    }
    case 'explore-galactic-network': {
      console.log('generateEncounter(explore-galactic-network)');
      let resourceFound = true; // TODO randomize
      let battle = true; // TODO randomize

      r.push({
        type: 'story',
        title: 'The Galactic Network',
        content: [
          'The galactic network is a network of portals that makes travel and communication near instantaneous.',
          'You decide to venture forth to a random destination',
        ]
      });

      if (battle) {
        r.push({
          type: 'battle',
          name: 'A space pirate',
          health: chance.rpg('20d20', { sum: true })
        });
      }
      break;
    }
  }

  console.log('generateEncounter', r);
  return r;
}

export function generateConveration() {
  return [{
    type: 'story',
    title: chance.name(),
    content: [conversations[0], conversations[1]] // TODO random
  }];
}
