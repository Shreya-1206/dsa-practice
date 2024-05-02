const arrCosmetics = ["Highlighter", "Blush", "Beauty Blender", "Pac Blush brush 214", "Pac powder brush 245", "kajal"];

const copyArr= [...arrCosmetics];
delete copyArr[4];  // got empty space 
console.log(copyArr)

function deleteItemWithoutEmptySpace(arr, value){
    let found =false
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === value){
        console.log(arr[i]);//value blush
        console.log(i);// index

        arr.splice(i, 1); //takes startindex and deleteItemCount
        found = true;
        break;
    }
  }
  return arr;
}

const deleteItem = deleteItemWithoutEmptySpace(arrCosmetics, "Blush")
console.log(deleteItem);

