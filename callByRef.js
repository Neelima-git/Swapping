function swapByRef(obj) { 
    obj.a =obj.b+obj.a;
    obj.b =obj.a-obj.b;
    obj.a =obj.a-obj.b;
} 
function callByReference(){
    var obj = {};
    obj.a = prompt("Enter a: ");
    obj.a= Number(obj.a);
    obj.b = prompt("Enter b: ");
    obj.b= Number(obj.b);
    console.log("Before Call by Reference "); 
    console.log(obj);
    swapByRef(obj) ;
    console.log("After Call by Reference "); 
    console.log(obj);
    }