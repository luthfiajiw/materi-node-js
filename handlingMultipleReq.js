// function Order(id, timeOut) {
//   console.log("ID Order "+id);
//   ProcessOrder(id, timeOut);
// }
//
// function ProcessOrder(id, timeOut) {
//   setTimeout(function() {
//     console.log("ID Order "+id+" Processed");
//   }, timeOut)
// }
//
// Order(101, 3000);
// Order(102, 1000);
// Order(103, 2000);

function Order(id, timeOut) {
  console.log("ID order adalah "+id);
  ProcessedOrder(id, timeOut);
}

function ProcessedOrder(id, timeOut) {
  setTimeout(function () {
    console.log("ID oreder "+id+" processed");
  }, timeOut);
}

Order(100, 5000);
Order(101, 2000);
Order(102, 3000);
