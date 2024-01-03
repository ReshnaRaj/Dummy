var findTheDistanceValue = function(arr1, arr2, d) {
    let distanceValue = 0;

    for (let i = 0; i < arr1.length; i++) {
        let isValid = true;

        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                isValid = false;
                break;  
            }
        }
        console.log("exit from the inner loop")

        if (isValid) {
            distanceValue++;
        }
    }

    return distanceValue;
};

console.log(findTheDistanceValue([4,5,8], [10,9,1,8],2));  
