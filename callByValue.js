function callByValue() {
    var a = prompt("Enter number a: ", );
    console.log(`Value of a before swapping: ${a}`);
    var b = prompt("Enter number b: ", );
    console.log(`Value of b before swapping: ${b}`)
    swap(a,b);
    console.log(`Value of a after swapping: ${a}`);
    console.log(`Value of b after swapping: ${b}`);
    function swap(num1,num2){
      var temp;
      temp=num1;
      num1=num2;
      num2=temp;
    }
}
