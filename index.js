let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 17, 22, 25, 31, 36, 44, 50, 55, 444, 3333];  // random array of numbers
function only(when, carry) {    //  declares function to determine which #s to push to result array
    [carry, function () { }][+!when]();
}
function now(from, where, store, who) {     // declaring variables for callback function 
    let incoming = from;    // creates array variable
    only(where(incoming), function increment() {
        who(incoming);
        incoming = store(incoming);   // defines array variable
        only(where(incoming), increment);   // sets array parameters
    });
}
function seek(input, who) {   //  declares comparison function
    let arrayObject = [];   // sets variable type to be an array
    now(0, function (comp) {
        return comp < input.length;  // compares length of array to count of function iterations
    }, function (calls) {
        return calls + 1;   // calls seek function again
    }, function (alt) {
        only(who(input[alt], alt, input), function () {
            arrayObject.push(input[alt]);   // creates a new array of only odd numbers
        });
    });
    return arrayObject;
}
const oddNums = seek(array, function (x) {
    return x % 2 !== 0; // math operation to determine if the remainder of each number in array is NOT divisible by 2
});
console.log(oddNums);   // prints array of odd numbers only
