const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 1");
    }, 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 2");
    }, 2000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved 3");
    }, 500);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises fulfilled:", results);
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });


    function mypromise(){
        return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                resolve("hello world")
            },4000)
        })
    }