//? Array is a Data type in JavaScript which is used to store multiple values in a single variable.
//? Arrays stored data in a linear form. It is a collection of elements that are stored in a contiguous memory location.
//? The elements in an array are indexed and can be accessed using these indexes.
//? Arrays are mutable, which means the elements of an array can be changed or modified.
//? Insertion Big O Notation: O(1)
//? Reading Big O Notation: O(n)
//? Deletion Big O Notation: O(n)

//? Creating an Array
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5);
let arr3 = new Array(5);
let arr4 = Array(5);
let arr5 = Array.of(1, 2, 3, 4, 5);
let arr6 = Array.from("hello");

//? Accessing Elements
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr2[2]); // 3
console.log(arr3); // [ <5 empty items> ]
console.log(arr4); // [ <5 empty items> ]
console.log(arr5); // [ 1, 2, 3, 4, 5 ]
console.log(arr6); // [ 'h', 'e', 'l', 'l', 'o' ] 

//? Adding Elements
arr.push(6);
arr.unshift(0);
arr.splice(2, 0, 2.5);
arr.splice(2, 1);

//? Modifying Elements
arr[2] = 2.5;

//? Removing Elements
arr.pop();
arr.shift();
arr.splice(2, 1);

//? Iterating Over Arrays
arr.forEach((item, index, array) => {
    console.log(item, index, array);
});

//? Finding Elements
let index = arr.indexOf(3);
let lastIndex = arr.lastIndexOf(3);
let found = arr.find((item) => item === 3);
let foundIndex = arr.findIndex((item) => item === 3);

//? Sorting Arrays
arr.sort();
arr.reverse();
arr.sort((a, b) => a - b);
arr.sort((a, b) => b - a);
arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
arr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

//? Slicing Arrays
let sliced = arr.slice(1, 3);
let spliced = arr.splice(1, 3);

//? Joining Arrays
let joined = arr.join();
let joined2 = arr.join(" ");
let joined3 = arr.join(" | ");

//? Copying Arrays
let copied = arr.slice();
let copied2 = arr.concat();
let copied3 = [...arr];
let copied4 = Array.from(arr);
let copied5 = Array.of(...arr);

//? Filling Arrays
let filled = arr.fill(0);
let filled2 = arr.fill(0, 1, 3);
let filled3 = arr.fill(0, 1);

//? Mapping Arrays
let mapped = arr.map((item) => item * 2);
let mapped2 = arr.map((item, index) => item * index);

//? Filtering Arrays
let filtered = arr.filter((item) => item > 3);
let filtered2 = arr.filter((item, index) => item > index);

//? Reducing Arrays
let reduced = arr.reduce((acc, item) => acc + item, 0);
let reduced2 = arr.reduce((acc, item, index) => acc + item * index, 0);
let reduced3 = arr.reduceRight((acc, item) => acc + item, 0);
let reduced4 = arr.reduceRight((acc, item, index) => acc + item * index, 0);

//? Checking Arrays
let isArray = Array.isArray(arr);
let includes = arr.includes(3);
let some = arr.some((item) => item > 3);
let every = arr.every((item) => item > 3);

//? Converting Arrays to Strings
let string = arr.toString();
let string2 = arr.toLocaleString();
let string3 = JSON.stringify(arr);
let string4 = String(arr);

//? Converting Strings to Arrays
let array = string.split(",");
let array2 = string.split(" ");
let array3 = JSON.parse(string);


//? Reversing Arrays
let reversed = arr.reverse();
let reversed2 = arr.slice().reverse();
let reversed4 = [...arr].reverse();
let reversed5 = Array.from(arr).reverse();

//? Flattening Arrays
let flattened = arr.flat();
let flattened2 = arr.flat(2);
let flattened3 = arr.flat(Infinity);
let flattened4 = arr.reduce((acc, item) => acc.concat(item), []);

//? Chunking Arrays
let chunked = arr.reduce((acc, item, index) => {
    if (index % 2 === 0) acc.push([]);
    acc[acc.length - 1].push(item);
    return acc;
}, []);


