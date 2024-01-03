function selection(arr){
    for(let i=0;i<arr.length;i++){
        let mindex=i
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                mindex=arr[j]
            }
        }
    }
}