function gaith(array){
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < array.length; i++){
           if (array[i] > array[i + 1]){
            let tmp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp;
            swapped = true;
           }
        }
    }while(swapped){
      return array;
    }
}
let sorted = gaith([5,1,4,2,,8]);
console.log(sorted);