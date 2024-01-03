// normal function to check largest element in array
function largest(arr)
{
    let largest=arr[0]
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest=arr[i]
        }
        
    }
    console.log(largest)
}

const array=[50,20,80,30,20]
// largest(array)

// finding largest element in array in reduce method
const arrays=[2,3,4,5,1]
const reduce=arrays.reduce((initial,second)=>{
    if(second>initial){
        return initial
    }
    
    else{
return second
    }
})
console.log(reduce);

