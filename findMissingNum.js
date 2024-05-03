let nums =[];

for (let i =0; i <= 100; i++){
  if(i != 30){
    nums.push(i);
  }
}

function findMissingNum(arr){
    for(let i = 0; i<arr.length; i++){
       const total = arr.reduce((acc, curr) => acc + curr); 
       return (5050 - total)
    }  
}

console.log(findMissingNum(nums))