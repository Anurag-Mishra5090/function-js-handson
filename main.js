// function foo(){
//     console.log('Hello');
// }
// foo()

// function sum(a,b){
//     console.log(a+b);
// }
// sum(3, 4)
// const arrowFunction = (() => {
//     console.log('new');
// })
// arrowFunction()


// var x = 21;
// var girl = function () {
   
//     var x = 20;
//     console.log(x);
// };
// girl ();


// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };



// var x = 21;
// b();
// a();


//   function a() {
//     console.log(x); 
//    x = 20;
  
// };
//  function b() {
//     console.log(x);
//     x = 40;
   
// };


function factorial (n){
    var a=1
    for(i=n; i>=1; i--){
        a=a*i;
    }
    console.log(a);
    
    }
    
    factorial(5)