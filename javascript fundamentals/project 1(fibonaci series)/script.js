var prev = 0;
var cur = 1;
console.log(prev);
console.log(cur);
for(var i=1; i<8; i++){
    var next = prev+cur;
console.log(next);
prev = cur;
cur = next;
} 
