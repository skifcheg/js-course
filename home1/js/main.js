var obj1 = {
    a: 3,
    b: "поросяти",
    с: "та вовк"
}
var str1 = String();

for (let i in obj1) {
    str1 += obj1[i] + " ";
}

console.log(str1);

//--------------------------

var arr2 = ["a", 1, "b", 23, "c", 44, "d", 0];
var obj2 = {};

for (let i = 0; i < arr2.length; i = i + 2) {
    obj2[arr2[i]] = arr2[i + 1];
}

console.log(obj2);

//--------------------------

var obj3 = { a: 44, b: 21, c: 0, d: 13 }
var arr3 = [];
var j = 0;

for (let i in obj3) {
    arr3[j] = obj3[i];
    j++;
}
arr3 = arr3.sort((a, b) => a - b);

console.log(arr3);