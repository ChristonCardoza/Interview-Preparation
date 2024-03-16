function getData(itr, param) {
  console.log(`Fetching data for ${itr}... with param ${param}`);
}

//---------------------------------------------------------------------------------------------------------------------------------------
//                                 Debounce : --->  Batch a burst of events and trigger a single event
//---------------------------------------------------------------------------------------------------------------------------------------

function debouncer(cb, delay) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const myDebouncer = debouncer(getData, 100);

for (let i = 0; i < 111111; i++) {
  myDebouncer(i, "some debounce"); // Fetching data for 111110... with param some debounce
}

//---------------------------------------------------------------------------------------------------------------------------------------
//                                 Throttle : --->  Trigger the event after specific interval of time
//---------------------------------------------------------------------------------------------------------------------------------------

function throttle(cb, delay) {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();

    if (now - last < delay) return;

    last = now;

    cb(...args);
  };
}

const myThrottler = throttle(getData, 10);

for (let i = 0; i < 22222; i++) {
  myThrottler(i, "some throttle param"); // Fetching data for 0... with param some throttle param Fetching data for 17615... with param some throttle param
}
