console.log("Start")
Promise.resolve().then(()=>{
    console.log("promise resolved")
})
process.nextTick(()=>{
    console.log("next Tick1")
})
console.log("program end")
