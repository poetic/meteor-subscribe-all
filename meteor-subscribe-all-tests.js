// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-subscribe-all.js.
import subscribeAll from "meteor/poetic:meteor-subscribe-all";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-subscribe-all - should be a function', function (test) {
  test.equal(typeof subscribeAll, "function");
});

Tinytest.add('should return a trusy reactive-var when subscriptions is empty array', function (test) {
  const isReady = subscribeAll([]);
  test.equal(isReady.get(), true);
});
