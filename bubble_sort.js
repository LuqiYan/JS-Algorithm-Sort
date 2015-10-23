'use strict';
/* bubble sort */
function bubble_sort(arr){
    var i, temp;
    var j = 0;
    var swapped = true;
    while(swapped){
        swapped = false;
        j++;
        for(i = 0; i < arr.length - j; i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}
console.log(bubble_sort([5,1,4,2,8]));
console.log(bubble_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));