function seperateEveOdd(arr){
    let evenArr =[];
    let oddArr = [];

    arr.forEach((elem) => {
        if(elem % 2 === 0){
            evenArr.push(elem);
        }else{
            oddArr.push(elem);
        }
    })
    return {
        even : evenArr.length,
        odd : oddArr.length
    }
}

console.log(seperateEveOdd([2, 6, 8,90,67, 55, 101,133,100,45,44]));