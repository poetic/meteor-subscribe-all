import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';

function every (array) {
  return array.reduce((value, acc) => value && acc, true);
}

function subscribeAllWithCallback(ids, allReady) {
  const readyFlags = ids.map(() => false);

  ids.forEach((id, index) => {
    Meteor.subscribe(id, () => {
      readyFlags[index] = true;

      if (every(readyFlags)) {
        allReady();
      }
    });
  })
}

function subscribeAll (subscriptions) {
  if (subscriptions.length === 0) {
    return new ReactiveVar(true);
  }

  const ready = new ReactiveVar(false);

  Tracker.autorun(() => {
    if (Meteor.user()) {
      if (ready.get()) {
        return;
      }

      Tracker.nonreactive(() => {
        subscribeAllWithCallback(subscriptions, () => {
          ready.set(true);
        });
      })
    } else {
      ready.set(false);
    }
  });

  return ready;
}

export default subscribeAll;
