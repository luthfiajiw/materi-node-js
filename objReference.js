let myObj = {
  name: "Luthfi Ai",
  age: 20
}

let myObj2 = myObj;
myObj2.age = 19;

// Jika nilai nya diubah maka referensi objek yang pertama
// juga akan berubah,
// Itulah yang disebut objek reference

console.log(myObj);

let myObj3 = {
  name: "luthfi",
  age: 25
};

let myObj4 = myObj3;
myObj4.age = 20

console.log(myObj3);
