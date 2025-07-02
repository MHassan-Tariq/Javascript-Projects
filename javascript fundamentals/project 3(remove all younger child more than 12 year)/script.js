//remove all the candiate whioch are younger than 12.
var arr = [
    {name:"hassan", age:22 ,gender:"Male"},
    {name:"ali", age:12 ,gender:"Male"},
    {name:"maham", age:52 ,gender:"Female"},
    {name:"ahmad", age:242 ,gender:"Male"},
    {name:"Haram", age:2 ,gender:"Female"},
    {name:"Burhan", age:25 ,gender:"Male"},
];

var arr2 = arr.filter(function(val){
    return val.age > 12;
});

console.log(arr2);

/* result in console
[
    { name: "hassan", age: 22, gender: "Male" },
    { name: "maham", age: 52, gender: "Female" },
    { name: "ahmad", age: 242, gender: "Male" },
    { name: "Burhan", age: 25, gender: "Male" }
]
*/
