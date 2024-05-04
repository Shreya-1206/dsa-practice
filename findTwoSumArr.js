function twoSum(arr, target){
    const indexes = {};

    for(let i = 0; i < arr.length; i++){
        const compliment = target - arr[i];

        if(compliment in indexes){
            return [indexes[compliment], i]
        }
        indexes[arr[i]] = i
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9));

//remeber its chk for the compliment saves it as {
    // 2: 0
    // 7: 1
    // 11 : 2
    // 15: 3
//}

/// after save the 0 th complenment when it jumps on first index it calculates it compliment 
// further it checks its presence of 2 in compliment if yes return the 
//compliment 2 index value plus current element index value 