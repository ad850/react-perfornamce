// map,reduce,filter,call,apply,bind,foreach,debouncing,promice//

//...................................................promice.........................................//
// function pro() {


//     return new Promise((resolve, reject) => {

//         let a = 1 + 1;


//         if (a == 2) {
//             resolve("passes")
//         }
//         else {

//             reject("failed")
//         }
//     })

// }

// pro().then((message) => {

//     console.log(message);

// }).catch((message) => {

//     console.log(message);
// })

//............................................debouncing .....................................................//

// const input = document.getElementById("inp")





// async function getdata() {

//     const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const result = await resp.json()
//     console.log(result);
// }


// function debounce(fun, time) {

//     let out

//     return function () {


//         let context = this;


//         clearTimeout(out)

//         out = setTimeout(() => {

//             fun.apply(context)

//         }, time);
//     }

// }

// const batterfun = debounce(getdata, 300)
// input.addEventListener('keypress', batterfun);

//..............................................................debounc2....................................................

// function debounce(func, delay) {
//     let finish;
//     return function () {

//         if (finish) {

//             clearTimeout(finish);
//         }

//         finish = setTimeout(() => {
//             func()

//         }, delay);

//     }

// }
// const batterfun = debounce(getdata, 300)
// input.addEventListener('keypress', batterfun);


//.............................................................................api fetch...........//
// const getdata = async () => {

//    try {


//       const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       const result = await resp.json()
//       console.log(result);
//    } catch (error) {

//       console.log(error);
//    }
//let

// getdata()

//................................Curring+clousers................................................//



// const one = function (a) {

//     debugger;

//     return function (b) {
//         debugger;
//         return function (c) {
//             debugger;
//             return function (d) {
//                 debugger;
//                 return a + b + c + d;

//             }

//         }


//     }

// }


// let ans = one(1)(2)(3)(4)

// console.log(ans);



///..................................................................pollyfill Map function................//

// arr2 = [11, 21, 31, 41, 51]

// Array.prototype.mymap = function (callback) {

//     let out = []

//     for (let index = 0; index < this.length; index++) {

//         out.push(callback(this[index],index,this))
//     }

//     return out

// }


// let out = arr2.mymap((val) => {


//     return val ;
// })

// console.log(out);


// //..........................................................pollyfill bind method...........................//
// let obj = {

//     name: "aditya",
//     sname: "sharma",
// }
// function go(state, greet,where) {


//     console.log(`my name is ${this.name}  ans  lastname is  ${this.sname} and ${state} and ${greet} and ${where} `);
// }

// Function.prototype.mybind = function (...args) {


//     invo = this;
//     para = args.slice(1);

//     return function (...args2) {

//         return invo.apply(args[0],[...para,...args2])
//     }
// }
// let ans = go.mybind(obj, "kota");

// ans("welcome", "sajjanpur");


// //..........................................................pollyfill bind  2nd  method...........................//
// Function.prototype.mybind = function (scope, ...args) {

//     scope._this = this;

//     return function (...args2) {

//         return scope._this(...args, ...args2)


//     }

// }

// let ans = sum.mybind(obj)


// ans("kota", "rajasthan")

//......................................................for each loop pollyfill.........................................................

// arr = [11, 21, 31, 41, 51]

// Array.prototype.myforeach = function (callback) {



//     for (let index = 0; index < this.length; index++) {

//         callback(this[index], index, this)

//     }


// }

// arr.myforeach((val, index, arr) => {

//     console.log(val, index, arr)


// })

//....................................................................Filter function pollyfill.....................................................//**


// let arr = [1, 2, 3, 4, 5]


// Array.prototype.myfilter = function (callback) {

//     let out = [];

//     for (let index = 0; index < this.length; index++) {

//         if (callback(this[index], index, arr)) {


//             out.push(this[index])

//         }

//     }
//     return out;
// }

// let ans = arr.myfilter((val, index, arr) => {


//     return val > 2;

// })

// console.log(ans);

//.......................................................................Find  function pollyfill...................


// const arr = [5, 12, 8, 130, 44];

// Array.prototype.myfind = function (callback) {


//     for (let index = 0; index < this.length; index++) {

//         if (callback(this[index], index, arr)) {

//             return this[index]

//         }
//     }
//     return out
// }

// let ans = arr.myfind((val, index, arr) => {

//     return val > 44

// })

// console.log(ans);

//.........................................................................Reduce  function pollyfill..................



// let arr = [1, 1, 1, 1, 1];
// Array.prototype.myreduce = function (callback, accumulator) {

//     accum = accumulator;

//     for (let index = 0; index < this.length; index++) {

//         accum = callback(accum, this[index], index, this)

//     }

//     return accum
// }

// let out = arr.myreduce((accu, val) => {

//     return accu + val

// }, 1)

// console.log(out);



// let ans = arr.reduce((accum, val) => {

//     return accum + val;

// }, 1)

// console.log(ans)

//........................................................................call function........
// let obj = {

//     name: 'aditya'
// }

// function sum(location) {


//     console.log(`my name is ${this.name} ${location}`);
// }

// Function.prototype.mycall = function (someobj, ...args) {


//     someobj.sum = this;

//     someobj.sum(...args);


// }

// sum.mycall(obj, "kota")

//......................................................................my apply............
// let obj = {

//     name: 'aditya'
// }

// function sum(location, city) {


//     console.log(`my name is ${this.name} ${location} ${city}`);
// }



// Function.prototype.myapply = function (scope, args) {


//     scope._this = this;

//     scope._this(...args);



// }


// sum.myapply(obj, ["kota", "raj"])

//.......................................................Flat function......................


// var arr = [1, 2, [5, [6], [7]]]

// Array.prototype.flatten = function () {

//     const output = [];
//     function processing(arr) {

//         for (let index = 0; index < arr.length; index++) {
//             const element = arr[index]

//             if (Array.isArray(element)) {

//                 processing(element)

//             } else {

//                 output.push(element)
//             }
//         }
//     }
//     processing(this)

//     return output;

// }

// console.log(arr.flatten())

// OR


// Array.prototype.flatten = function () {


//     return this.toString().split(",").map((ele) => Number(ele))

// }

// console.log(arr.flatten())

//.............................................................................indexof pollyfill...........


// let arr = [1, 2, 3, 4, 3, 5];

// Array.prototype.myindexof = function (args, para) {

//     if (!para) {

//         para = 0;
//     }

//     for (let index = para; index < this.length; index++) {

//         if (args === this[index]) {


//             return index;
//         }

//     }
//     return -1;
// }

// console.log(arr.myindexof(3))



//...........................creating the array................................................................



// class myarray {


//     constructor() {


//         this.length = 0;
//         this.data = {};

//     }

//     push(item) {

//         this.data[this.length] = item;
//         this.length++;
//         return item;
//     }


//     pop() {

//         let data = this.data[this.length - 1];
//         delete this.data[this.length - 1]
//         this.length--;
//         return data;

//     }

//     delete(index) {

//         const item = this.data[index];
//         this.shiftitem(index)
//         return item
//     }

//     shiftitem(index) {

//         for (let i = index; i < this.length - 1; i++) {

//             this.data[i] = this.data[i + 1];

//         }

//         delete this.data[this.length - 1];
//         this.length--

//     }

//     get(index) {

//         return this.data[index]
//     }
// }

// let first = new myarray()

// first.push("aditya");
// first.push("sharma");
// first.push("!");

// console.log(first.delete(2))


// console.log(first);

//................................................................reverse the number...............
// let num = 325;


// let temp = (num.toString().split('').reverse().join(""));

// console.log(parseInt(temp))

//......................................................................creating hash table..............


// class myhash {

//     constructor(size) {

//         this.data = new Array(size)



//     }

//     _hash(key) {

//         let hash = 0;

//         for (let index = 0; index < key.length; index++) {

//             hash = (hash + key.charCodeAt(index) * index) % this.data.length;
//         }
//         return hash;
//     }

//     set(key, value) {

//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }

//         this.data[address].push([key, value]);

//         return this.data;
//     }

//     get(key) {

//      let    address = this._hash(key)
//         const currentbucket = this.data[address];


//         if (currentbucket) {

//             for (let index = 0; index < currentbucket.length; index++) {
//                 {

//                     if (currentbucket[index][0] == key) {

//                         return currentbucket[index][1]

//                     }
//                 }

//             }
//         }
//         return undefined;
//     }
//     keys() {

//         const newarr = [];


//         for (let index = 0; index < this.data.length; index++) {

//             if (this.data[index]) {


//                 newarr.push(this.data[index][0][0])
//             }
//         }

//         return newarr;

//     }

// }
// const one = new myhash(50)

// one.set("grapes", 1000)
// one.set("apples", 500)

// console.log(one.get("grape"));


//.......................................................................



