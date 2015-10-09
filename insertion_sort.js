'use strict';
/* insertion sort */
function insertion_sort(arr){
    var i, j, temp;
    for(i = 0; i < arr.length; i ++){
        temp = arr[i];
        for(j = i - 1; j > -1 && arr[j] > temp; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}
console.log(insertion_sort([5,1,4,2,8]));
console.log(insertion_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));