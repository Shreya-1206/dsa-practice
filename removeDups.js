function removeDupsSortedArr(arr){
    let noDups = [];

    for (let i = 0; i<arr.length; i++){
        if(i<arr.length - 1) {
         if(arr[i] !== arr[i+1]){
            noDups.push(arr[i])
         }
        }else{
            noDups.push(arr[i])
        }
    }
    return noDups;
}

const array = [0, 0 , 1, 2, 2, 2, 3, 4, 4,4 , 5,5, 6,6,6,6,7,7];
const NoDupsArry = removeDupsSortedArr(array);
console.log(NoDupsArry);

function removeDupsOfUnsortedArr(arr){
    const sortArr = arr.sort((a,b)=> a-b);
    const noDups =[];

    for (let i = 0; i<sortArr.length; i++){
        if(i < sortArr.length - 1){
          if(sortArr[i] !== sortArr[i + 1]){
            noDups.push(sortArr[i])
          }
        }else{
            noDups.push(sortArr[i]);
        }
    }
    return noDups;
}

const unsortedArr = [100, 67, 45, 55, 55, 65, 23, 45, 67, 67, 100, 1, 1, 2];
console.log(removeDupsOfUnsortedArr(unsortedArr));