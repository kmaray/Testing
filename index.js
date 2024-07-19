// let fullName = promt("enter your fullName");
// let userName = "@" + fullName + fullName.length ;
// console.log("userName =", userName);
// const profile = {
//                     username:"@anubhabray",
//                     isFollow: false,
//                     followers: 123,
//                     following: 12,
// };

// console.log(typeof profile["username"]);
// console.log(profile);
// profile["followers"] = profile["followers"] +1 ;
// let a=4;
// let b= "n";
// // a *= 5 ; b /= 2; 
// // console.log("    a =", a); 
// // console.log("b =",b);
// console.log("a == b",a == b);
// let score = prompt("enter your score (10 - 100)");5469

// let gread;
// if(score >= 80 && score <= 100){
//           gread = "A";
// } else if (score >= 70 && score <= 89){
//           gread = "B";
// } else if (score >= 60 && score <= 69){
//           gread = "C";
// } else if (score >= 50 && score <= 59){
//           gread = "D";
// } else if (score >= 0 && score <= 50){
//           gread = "F";
// }
//           console.log ("gread = " , gread);
// let str = "Anubhab Ray";
// size = 0;
// for(let i of str){
//           console.log("i=",i);
//           size++;
// }console.log("size =", size);
// let profile = {
//           Name : "Anubhab Ray",
//           Age : 22,          
// }
// for (let i in profile){
//           console.log("i = ",i , "," ,"val =" ,profile[i]);
// }  
// let num = 100;
// let usernum = prompt("write your number");
// while(num != usernum){
//           usernum = prompt("write again your number");
// }console.log("you guess right");
// let arr=["ritesh","komlesh","rajeah"];
// let length = `the length of the arry is ${arr.length}`;
// console.log ("arr =",arr);
// console.log (length);
// console.log(arr[0]);
// let Names = ["Rita","July","Shayoni"];
// // for (let i = 0; i< Name.length ; i++){
// //           console.log("Name =", Name[i]);
// // }
// for (let name of Names){
//           console.log("Name =", name);
// }
// let cities = ["sona","G.B","goa"];
// for(let city of cities){
//           console.log("city =",city.toUpperCase());
// }
// let prices = [100,200,500];
// let offer; 
// for (let price of prices){
//           offer = price/10;
//           finalprices = price - offer;
//           console.log(`the final price is ${finalprices}`);
// } 

// let prices = [100,200,500];
// let offer;
// for (let i =0;i<prices.length;i++){
//           offer = prices[i]/10;
//           let finalprice= prices[i]-offer;
//           console.log(`the final price is ${finalprice}`);
// }
// let arr = [1,2,3];
// // let delet = arr.pop();
// // console.log(arr);
// // console.log("deoleted item = ", delet);
// console.log(arr.toString());
// let arr1 = [1,2,3];
// arr1.shift();
// // let arr2 = [4,5,6];
// // let arr4 = [6,7,8];

// // let arr3 = arr1.concat(arr2,arr4);
// // console.log("final array =",arr3);
// console.log(arr1);
// const arrowsum = (l, n) => {
//           s = n + l;
//           // console.log(l);
//           return s;
// }
// // let val = arrowsum(8,6);
// console.log(arrowsum(8, 6));
// // console.log(l); // wiil not work
// const countvowel = (str) => {
//           let count = 0;
//           for (let char of str) {
//                     if (
//                               char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//                        ) {
//                               count++;
//                          }
//                     }
//           console.log("number of vowel :-", count);
// }
// let val = prompt("enter your name");
// console.log(countvowel(val));
// let arr = [1,2,3,4,5,6,7];
// let squre=  (val) =>{
//                     console.log((val)**2);
//           }

// arr.forEach(
//            squre
// );
// let newarr = arr.filter(
//           (val)=>{
//                   return  val%2 === 0;
                    
//           }
// )
// console.log(newarr);
// let firstel = document.querySelector("#botton1");
// console.dir(firstel);
// let child = document.body.firstChild;
// console.dir(child);
let tag = document.querySelector("#headingtwo");
console.dir(tag.innerText);
tag.innerText = tag.innerText + "and best experience" ;
