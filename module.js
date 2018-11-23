// let name = "Luhfi Aji";
// let age = 23;
//
// function print() {
//   console.log("My name is "+name+" I'm "+age+" yo");
// }
//
// module.exports.name = name;
// module.exports.age = age;
// module.exports.print = print();

// module.exports = {
//   name: "Luthfi Aji",
//   age: 20,
//   print: function() {
//     console.log(this.name+" is "+this.age+" yo");
//   }
// };

module.exports = {
  name: "Luthfi",
  age: 20,
  print: function(){
    console.log("My name is "+this.name+" I'm "+this.age+" yo");
  }
};
