// 1
let mypromis = new Promise((res, rej) => {
  setTimeout(() => {
    res('Promise Resolved!')
  }, 1000)
})

mypromis.then((data) => {
  console.log(data)
})

// 2

let mypromis2 = new Promise((res, rej) => {
  rej('Rejected Promise!')
})

mypromis2.catch((error) => {
  console.log(error)
})

// 3

let mypromis3 = new Promise((res, rej) => {
  rej('Rejected Promise!')
})

mypromis3
  .catch((e) => {
    console.log(e)
  })
  .finally(() => {
    console.log('Promise Settled!')
  })
// 5
function wait(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('promis resolved 5')
    }, time)
  })
}

wait(5000).then(console.log)

// 6

let mypromis6 = new Promise((res, rej) => {
  res(21)
})
  .then((value) => {
    return value + 10
  })
  .then((value) => {
    console.log(value + 100)
  })
  .catch((value) => {
    if (value > 100) {
      console.log('somithing went wrong')
    }
  })

// 7

let mypromis7 = new Promise((res, rej) => {
  res(['A'])
}).then((value) => {
  let arr = value.concat('B')
  console.log({ ...arr })
})
// 8

let first = new Promise((res, rej) => {
  res(1)
})
  .then((value) => {
    console.log(value)
    return 2
  })
  .then((value) => {
    console.log(value)
    return 3
  })
  .then((value) => {
    console.log(value)
    return 4
  })

//   11

let mypromis11 = new Promise((res, rej) => {
  res('john')
})
  .then(() => {
    return new Promise((res, rej) => {
      res('Araya')
    })
  })
  .then((value) => {
    setTimeout(() => {
      console.log(value)
    }, 2000)
  })
