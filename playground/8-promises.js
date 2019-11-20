const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2,3,5])
    }, 2000)
})

doWorkPromise
    .then(console.log)