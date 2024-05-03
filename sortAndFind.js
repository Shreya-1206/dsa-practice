function sortAndFindNum(arr, num){

    const sorted = arr.sort((a,b) => a -b);
    console.log(sorted);
    sorted.forEach((elem) => {
        if(elem === num){
            console.log(elem);
        }else{
            console.log('NotFound')
        }
    })
}

sortAndFindNum([89,56,23,45,100,1,2,4,5,90], 22);

function sortAndFindIndex(arr, num){
    const sortArr = arr.sort((a,b) => a - b);
    console.log(sortArr);
    // const index = sortArr.indexOf(num);
    // console.log(index);
    // if(index != -1){
    //     console.log(`Value found of ${num} on Index - ${index}`)
    // }else {
    //     console.log(`Number was not found - ${num}`)
    // }
    for(let i =0; i < sortArr.length; i++){
        if(sortArr[i] === num){
            return `Value found of ${num} on Index - ${i}`
        }
    }
    return 'Not Found'    
}
const findIndex = sortAndFindIndex([89,56,23,45,100,1,2,4,5,90], 45);
console.log(findIndex);
