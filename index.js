const testArray = [1, 2, 3, 4];
const testObject = {
  item1: "1",
  item2: "2",
  item3: "3",
  item3: "4"
};

function arrayTest(collection) {
  return Array.isArray(collection) ? collection : Object.values(collection);
}

// console.log(arrayTest(testObject));

const myEach = function (collection, callback) {
    let myArray = arrayTest(collection);
    myArray.forEach(element => callback(element));
    return collection;
}

// console.log(myEach(testObject, alert));

function myMap(collection, callback) {
    let myArray = arrayTest(collection);
    return myArray.map(element => callback(element));
}

// console.log(myMap(testObject, function(element) { return element * 5}));

function myReduce(collection, callback, accumulator) {
  let myArray = arrayTest(collection);
  if (accumulator === undefined) {
    accumulator = myArray[0];
    myArray = myArray.slice(1);
  };
  return myArray.reduce(callback, accumulator);
}

// console.log(myReduce(testArray, function(acc, val, collection) { return acc + val; }, 10));

function myFind(collection, predicate) {
    let myArray = arrayTest(collection);
    return myArray.find(element => predicate(element));
}

// console.log(myFind(testObject, function(num){ return num % 3 == 0; }));

function myFilter(collection, predicate) {
    let myArray = arrayTest(collection);
    return myArray.filter(element => predicate(element));
}

// console.log(testObject, function(num){ return num % 2 == 0; });

function mySize(collection) {
  let myArray = arrayTest(collection);
  return myArray.length;
}

// console.log(mySize(testObject));

function myFirst(array, n) {
  let myArray = arrayTest(array);
  if (n > myArray.length) {
        return undefined;
  } else if (n < myArray.length) {
    return myArray.slice(0, n);;
    } else {
        return myArray[0];
    }
}

// console.log(myFirst(testObject, 2));

function myLast(array, n) {
    let myArray = arrayTest(array);
    if (n) {
      return myArray.slice(myArray.length - n, myArray.length);
      } else {
          return myArray[myArray.length - 1];
    }
}

// console.log(myLast(testObject, 1));

// function myKeys(object) {
//     let myArray = arrayTest(object);
//     return Object.keys(myArray);
// }

function myKeys(object) {
    return Object.keys(object);
}

// console.log(myKeys(testObject));

function myValues(object) {
    return Object.values(object);
}

// console.log(myValues(testObject));

// function mySortBy(array, callback) {
//     // code here
//   }
  
// function myFlatten(array, [shallow], neewArr = []) {
//     // code here
// }