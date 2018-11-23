let myObj = {
  name: "Luthfi",
  age: 20,
  print: function() {
    console.log(this.name+" is "+this.age+" y.o");
    console.log(this === myObj);
  }
}

function myFunction() {
  console.log("i'm my function");
  console.log(this === global);
}

myObj.print();
console.log("============");
myFunction();
console.log("============");
console.log(myObj.name);
