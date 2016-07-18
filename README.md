# meteor-subscribe-all

A function that returns a reactive var which will change to true when all the subscriptions from arguments are ready.

```
import subscribeAll from 'meteor/poetic:meteor-subscribe-all';

const isReady = subscribeAll(['users']);

console.log(isReady.get());
```
