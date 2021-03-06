'use strict';
/* selection sort */
function selection_sort(arr){
    var i, j, min, temp;
    for(i = 0; i < arr.length - 1; i++){
        min = i;
        for(j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
console.log(selection_sort([5,1,4,2,8]));
console.log(selection_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));