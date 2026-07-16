// debounce function is used to limit the number of times a function can be called over time.
//  It ensures that the function is only executed after a specified delay period has passed since the last invocation.
//  function debounce(fn, delay) {
//      let timer;

//     return function (...args) {
//          clearTimeout(timer);

//          timer = setTimeout(() => {
//              fn(...args);
//          }, delay);
//      };
//  }

//  const search = (query) => console.log(`Searching for...`, query);

//  const debounced = debounce(search, 2000);

//  debounced("h");
//  debounced("hi");
//  debounced("hi h");
//  debounced("hi he");
//  debounced("hi hel");
//  debounced("hi hell");
//  debounced("hi hello");

// throotle function is used to limit the number of times a function can be called over time.
//  It ensures that the function is only executed once every specified delay period, regardless of how many times it is invoked.

function throttle(fn, delay) {
    let lastmsg = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastmsg >= delay) {
            
            lastmsg = now;
            fn(...args);
        }
    };
}

const chatlive = (message) => console.log("Sending message...", message);

const throttled = throttle(chatlive, 3000);

setTimeout(() => {
    throttled("Hello");
}, 0);

setTimeout(() => {
    throttled("How are you?");
}, 2000);

setTimeout(() => {
    throttled("what is your name");
}, 3000);    

throttled("Hello");
throttled("How are you");
throttled("what is your name");
