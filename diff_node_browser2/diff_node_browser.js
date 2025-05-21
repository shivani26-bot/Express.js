const x = setTimeout(function exec() {
  console.log("completed timer");
}, 1000);
console.log(x);
// output x: Timeout {
//     _idleTimeout: 1000,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 25,
//     _onTimeout: [Function: exec],
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(refed)]: true,
//     [Symbol(kHasPrimitive)]: false,
//     [Symbol(asyncId)]: 2,
//     [Symbol(triggerId)]: 1,
//     [Symbol(kAsyncContextFrame)]: undefined
//   }

clearTimeout(x); //program will immediately turn off

// browser is a different runtime and every browser is a different
// runtime and node is a different runtime so different run times can have different implementations you you might
// feel they are exposing same functions but the internal implementations can be different for example even Chrome browser Mozilla and your nodejs
// All of these run times provide you something called as set timeout that  helps you to access a
// timer now if you call set timeout inside node
// environment

//  set time out is a function and this function must be returning
// something, if function doesn't return something then it still returns undefined
// there will be some return type of set time
// return type of set timeout is actually a timeout object inside nodejs and see once the
// timer completes it prints completed timer if you copy the same piece of code put it in your browser and run
// it now can you see inside your Chrome browser the return type of set timeout
// is not an object it's a number it's a number

// in nodejs the clear timeout is actually taking a timeout object
// whereas inside browser the clear timeout is actually
// taking a number to actually stop the timer

// so different run times can have
// different implementation of the same feature
