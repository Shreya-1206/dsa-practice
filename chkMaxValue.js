const nums =[2, 67, 89, 56, 3, 5, 20,93, 32];

let maxVal = nums[0];

for (let i = 0 ; i < nums.length; i++){
    if(maxVal < nums[i]){
        maxVal = nums[i];
    }
}

console.log(maxVal);