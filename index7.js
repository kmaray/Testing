// let div = document.querySelector("div");
// console.dir(div);
// let divid = document.querySelector("#box");
// console.dir(divid);
// let divname = div.getAttribute("name");
// console.dir(divname);
// console.dir(div.setAttribute("name","new_div_name"));
// console.dir(div.style);
// console.dir(div.style.width="200px");
// console.dir(div.style.fontSize="30px");
// console.dir(div.innerText="index page ");
// // console.dir(div.style.visibility="hidden");
// // let newBtn = document.createElement("button");// here we creat a new element now we gonna add this element to the div
// // newBtn.innerText = "click here!" ;
// // let newdiv = document.querySelector("div");

// // console.dir(newdiv.append(newBtn));
// // console.dir(newdiv.prepend(newBtn));
// // console.dir(newdiv.before(newBtn));
// // console.dir(newdiv.after(newBtn));
// let newheading = document.createElement("heading");
// newheading.innerHTML = "<i>this is 7th index page</i>";
// let newdiv = document.querySelector("div");
// console.dir(newdiv.before(newheading));
// console.dir(newheading.style.fontSize="40px");
// // newheading.remove();

// let para = document.querySelector("p");
// console.dir(para.classList.add("newcontent"));

// let a = document.querySelector("#button3");
// a.ondblclick 
// ----------------------------------------------------------------------
// (class & objet)
// example 1
// const student = {
//           studentName: "Anubhab Ray",
//           marks: 87.3,
//           printmarks : function(){
//                     console.log("marks :-",this.marks);// here"this.marks" means "student.marks", 'this' represents 'student' class
//           },
// };
// //--------------------------------------------------------------
// //example 2(proto type)
// const employee ={
//           calctax:function(){console.log("tax is 10%");},
// };
// const ram1 ={salary : 155000,
//           calctax(){console.log("tax is 20%");},
// };
// const ram2 ={salary : 155000};
// const ram3 ={salary : 155000};
// const ram4 ={salary : 155000};
// ram1.__proto__=employee;
// ram2.__proto__=employee;
// ram3.__proto__=employee;
// ram4.__proto__=employee;

// //example 3(class in js)
// class mycar {
//           constructor(brand,milage){console.log("this is constructor")
//                     this.brandName = brand ;//we can use the 
//                     this.milagepar = milage ;
//           };
//           start(){console.log("stat")}
//           stopt(){console.log("stop")};
//           setbrand(brand){
//                     brandName : brand ;
//           };
// }
// let myobject = new mycar();
// let fortuner = new mycar();
// let toyota = new mycar("toyota",120,  "kmph");
// fortuner.setbrand("fortuner");

//example 4(inharitance in JS super[keyword])
class man{
          constructor(){ console.log("enter parent constructor");
                    this.specis="homo";}
          eat(){console.log("all man eat")}
}
class Engineer extends man {
          constructor(brunch){
                    console.log("enter child constuctor");
                    super();// we call 'man' class using super key word
                    this.brunch = brunch ;
                    console.log("exit child contructor");
          }
           work(){console.log("comemgineer");}
}
let engobj = new Engineer("machenical");
