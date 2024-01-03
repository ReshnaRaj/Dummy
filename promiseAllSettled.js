const promise1 = Promise.resolve("Resolved 1");
const promise2 = Promise.reject("Rejected 2");
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 3");
    }, 1000);
});

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log("Results of all promises:", results);
    });
