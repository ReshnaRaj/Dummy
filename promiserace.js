const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 1");
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected 2");
    }, 1000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log("First settled promise:", result);
    })
    .catch((error) => {
        console.error("First settled promise rejected:", error);
    });
