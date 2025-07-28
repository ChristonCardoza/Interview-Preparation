function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Promise Methods

async function promiseResolve() {
  await sleep(1000)
  // 1. Promise.resolve(value)
  console.log('----------------------1. Promise.resolve----------------------')
  Promise.resolve(10).then((value) => {
    console.log(value);
  })
}

async function promiseReject() {
  await sleep(2000)
  // 2. Promise.reject(error)
  console.log('---------------------2. Promise.reject----------------------')
  Promise.reject(new Error('Something went wrong')).catch((error) => {
    console.log(error.message);
  })
}


async function promiseAll() {
  await sleep(3000)
  // 3. Promise.all([p1, p2, p3, ...])
  console.log('-------------------3. Promise.all-------------------------')
  // Waits for all promises to fulfill. If any fails, it rejects with the first rejection reason.

  Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]).then(console.log)

  Promise.all([
    Promise.resolve(1),
    Promise.reject('Something went wrong'),
    Promise.resolve(3)
  ]).then((result) => console.log("Success:", result))
    .catch((err) => console.error("Error:", err));
}


async function promiseAllSettled() {
  await sleep(4000)
  // 4. Promise.allSettled([p1, p2, p3, ...])
  console.log('-------------------4. Promise.allSettled-------------------------')
  // Waits for all promises to settle. Returns an array of results, each with a status and value/reason.
  Promise.allSettled([
    Promise.resolve('ok'),
    Promise.reject('Something went wrong')
  ]).then(console.log)
}

async function promiseRace() {
  await sleep(8000)
  // 5. Promise.race([p1, p2, p3, ...])
  console.log('-------------------5. Promise.race-------------------------')
  // Returns first settle promise
  Promise.race([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 2000))
  ]).then(console.log)

  Promise.race([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('failed in 1s'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 2000))
  ]).then(console.log)
    .catch(console.error)
}


async function promiseAny() {
  await sleep(10000)
// 6. Promise.any([p1, p2, p3, ...])
  console.log('-------------------6. Promise.any-------------------------')
// Returns first fulfilled promise (ignore rejected promises)
// Fails only if all promises are rejected
  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject('failed in 1s'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('succeeded in 4s'), 4000))
  ]).then(console.log)

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject('failed in 5s'), 5000)),
    new Promise((resolve, reject) => setTimeout(() => reject('failed in 5s'), 5000))
  ]).catch((err) => console.error(err.errors))
}


promiseResolve()

promiseReject()

promiseAll()

promiseAllSettled()

promiseRace()

promiseAny()
