import Route from '@ember/routing/route';

export default class StoryRoute extends Route {
  model({ id }) {
    if (id === 'intro') {
      return {
        id,
        title: 'A troubled beginning',
        content: [
          'Centuries ago an expedition left earth to a planet 100 light years away. This planet was believed to be capable of sustaining life. This expedition was humanities farthest joruney yet, and unfortunately could only be one way. It was a colonization mission. Equiped with the latest in space faring and space station technology a group of 100 people left all they had known behind to start a new chapter for humanity.',

          'The theories of the planet turned out to be true, covered in lush green plants and similar in many ways to earth. A wide range of climates with an average of just right for all kinds of plant life to thrive. Months after arriving the first crew embarked from the new station to explore the planet. This was the first encounter of what came to be known as the terror.',

          'Your father was the only to return to the space station after that journey. What has now become common legend, giant slimy metalic insectoids have infested the planet, coexisting with the plants, but dominating all other forms of life. Upon the crews arrival they were quickly discovered and targeted. The creatures could sense them kilometers ahead; flying through the air at speeds up to two dozen meters per second, and are on average the size of a human teenager. They drop down from the sky and use their long pincers to slash from a distance. If your father wasn\'t in the ship and able to seal it off no one would have returned that day.',

          'With limited resources on the station a solution was needed to maintain life for the colony. There have been successful missions down to the planet, but many more unsucessul. Its a dangerous option, but the few successful missions have returned giving bountiful rewards and tales of abandoned structures from intelligent life.',

          'One crew was sent to investigate a nearby star system. From their first scouting it seems this could be another viable option for sustaining the colony.',

          'That was twenty years ago. The station has managed, but never flourished.',

          'You have just come of age, and graduated from your studies. Eager to live up to your fathers name, you arrive a few minutes early your first day of work...',
        ]
      };
    }
    else {
      console.log('TODO setup story model from id:', id);
    }
  }
}
