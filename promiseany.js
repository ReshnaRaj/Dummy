const promise1 = Promise.reject("Rejected 1");
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 2");
    }, 1000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 3");
    }, 500);
});

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("First fulfilled promise:", result);
    })
    .catch((error) => {
        console.error("All promises rejected:", error);
    });
