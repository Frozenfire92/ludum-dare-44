import Route from '@ember/routing/route';

export default class StoryRoute extends Route {
  model({ id }) {
    console.log('TODO setup story model from id:', id);
    if (id === 'intro') {
      return {
        title: 'A troubled beginning',
        content: [
          'decades ago an expedition to a nearby planet embarked earth. This planet was believed to be life sustaining. It turned out to be true, and the planet was similar to earth. A wide range of climates with an average of just right for all kinds of life to thrive. It was believed to be uninhabited and that proved true for months. One day on an expedition a castle was discovered and it was quite extensive. What was known of castles, temples and wonders on earth spanned an entire city, partially above and underground starting at the base of a large mountain covered in dense forest. This city is encrusted with all kinds of metals and gemstones decoratively',
          'Your father helped found nextown and resettled the expedition in the sprawling city. It was a lot of work, but it payed off. The city has exceeded a population of 100 and has room to grow 1000 fold.',
          'The founding members of the city tried everything they could do to avoid the mistakes humanity had made but three years ago a threat presented itself. A large bug like creature has emerged, their origin still unknown. On their own they can be defeated, but in numbers they pose a serious threat. They have started to nest and in large numbers. Thankfully they take months to mature, or we would surely be overwhelmed.',
          'For the past three years the city has reverted to medieval era human technology in order to defeat them. The guns quickly ran out of ammo, and proved innefective compared to a metal tipped spear. This has completely changed the identity of the first human settlement Because of this the focus on the many mysteries and technologies of the past civilization has faded. Its obvious that the previous civilization was intelligent and mastered many technologies.',
          'Yesterday your father died while on an skirmish to test a new explosive. It turns out the explosive was much more powerful than we anticipated. It will prove effective in the war, but must be handled with caution.',
          'Still in shock the settlement elected you as the leader.'
        ]
      };
    }
  }
}
