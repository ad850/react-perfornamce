
// merge two sorted array//....................................................................................
// let one = [1, 3, 5, 7, 8, 10];
// let two = [11, 18, 19, 42, 54];

// function reso(one, two) {

//     let result = [];

//     debugger;
//     while (one.length && two.length) {

//         const next = (one[0] < two[0] ? one.shift() : two.shift());
//         debugger;
//         result.push(next);
//     }

//     if (one.length) {
//         debugger;
//         result = result.concat(one)

//     }
//     else if (two.length) {
//         debugger;
//         result = result.concat(two)

//     }
//     debugger;
//     return result;

// }

// let ans = reso(one, two)

// console.log(ans);

//..........................................................................largest and smallest number.............

// let array = [55, 67, 99, 0, -1];


// let min = (array, arg = array[0]) => {


//     for (let index = 0; index < array.length; index++) {


//         if (arg < array[index]) {

//             arg = array[index];
//         }

//     }
//     return arg;
// }


// console.log(min(array));

//..............................................................find pair of target.........................

// let arr = [2, 7, 11, 15];

// let target = 9;

// function find(arr, target) {


//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {


//             if (target = arr[i] + arr[j]) {

//                 return (`the pair is ${[i]} and ${[j]}`)

//             }

//         }


//     }

// }


// let ans = (find(arr, 9))

// console.log(ans);

//..............................................................Linked list.........................

// class Linkedlist {


//     constructor(value) {

//         this.head = {

//             value: value,
//             next: null,
//         }

//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value) {

//         const newNode = {

//             value: value,
//             next: null

//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     prepend(value) {

//         const newNode = {

//             value: value,
//             next: null
//         }

//         newNode.next = this.head;
//         this.head= newNode;
//         this.length++;
//         return this
//     }
// printlist() {

//     const arr = [];

//     let currentnode = this.head;

//     while (currentnode !== null) {

//         arr.push(currentnode.value)

//         currentnode = currentnode.next;


//     }
//     return arr
// }
// }

// const mylinkedlist = new Linkedlist(10);

// mylinkedlist.append(20)
// mylinkedlist.prepend(30)

// console.log(mylinkedlist);


//..............................................sorting the  array bubble sort ....................................



// function bubbleSort(arr) {

//     var i, j;
//     var len = arr.length;

//     var isSwapped = false;

//     for (i = 0; i < len; i++) {

//         isSwapped = false;

//         for (j = 0; j < len-i-1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 isSwapped = true;
//             }
//         }

//         if (!isSwapped) {
//             break;
//         }
//     }
//     console.log(arr)
// }


// var arr = [243, 45, 23, 356, 3, 5346, 35, 5];

// bubbleSort(arr)




//..............................................selection sort ....................................



// let arr = [99, 8, 0, 7, 1, 90];


// var temp = 0;

// var min;
// function fun(array) {

//     for (let i = 0; i < array.length; i++) {

//         min = i;

//         for (let j = i + 1; j < array.length; j++) {

//             if (array[j] < array[min]) {

//                 min = j;
//             }
//         }
//         temp = array[i];
//         array[i] = array[min];
//         array[min] = temp;

//     }
//     console.log(array);

// }

// fun(arr)

//..............................................insertion sort ...............................




// "use strict"


// function logthis(params) {
//     this.desc = "loger";
//     console.log(this);
// }

// new logthis();


// let ans=[1,2,3,4];

// ans.splice(0,2);

// console.log(ans);

// class X {

//     get y(){
    
//     return 42;
    
//         }
//     }
    
//     var x= new X();
    
//     console.log(x.y)




//     var v1=1;

// let f1=function(){


//     console.log(v1);
// }

// var f2= function(){


//     var v=2;

//     f1();
// }

// f2()


// console.log("love");

// setTimeout(() => {
    
//     console.log("dnjdjn")
    
// }, 0)


// console.log("eeeuei")


// const foo = {

//     bar() {

//         console.log("dkjnd");
//     },

//     name: "nnd",
//     age: "djd",
// }


// console.log(foo.name
//     )


    
// const foo=[1,2,3];

// foo[100]="5";

// console.log(foo.length);