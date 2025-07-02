//keep all positive number and remove all negative number.

var arr = [1, 2, 3, -54, -56, -3, 3, -34, 23, -2, 4, 5, 3];

var i = 0;
while (i < arr.length) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
    } else {
        i++;
    }
}
console.log(arr); 

//answer is:
// [1, 2, 3, 3, 23, 4, 5, 3]
