
/* 



let a=5;

let b=8;

// a^n
console.log(a ** 3);


//WE CAN USE A SINGLE VARIABLE TO STORE MULTIPLE DATA TYPES 

//c behaving as int
let c=8;
console.log(c);

//c behaving as string
c="Kunal";
console.log(c);

//Concatenation of string

let first=5;
let second='5';

//OUTPUT IS 55 not 10 as since second is string ,first also gets converted into string and concatention occur
console.log(first+second);


//ARRAY

let arr=["Kunal",6,"RAM"];

console.log(arr);

//OBJECT(SIMILAR TO MAP)

let obj={name:"Kunal" ,age:22};

console.log(obj);


let namee="Kunal";

console.log (namee);

//WILL PRINT HII namee
console.log("HII namee");

//TO PRINT HII Kunal we have to use like this (use ` ` and ${})

// TEMPLATE LITERAL - ${} , USE TO PRINT VALUE OF VARIABLE 
console.log(`HII ${namee}`)


//CONDITIONAL OPERATOR - 

// == IT ONLY CHECK VALUE THAT IT 5=='5' IS TRUE, BUT === CHECKS BOTH VALUE AND DATATYPE

console.log(5=='5');
console.log(5==='5');

//SAME GOES FOR != , that is to check both value and datatype use !== instead of !=


// TERNARY OPERATOR

// condition ? if : else

let age=19;

let choice=age>18 ? "VOTE":"NOT VOTE";
console.log(choice);

 age=17;
  choice=age>18 ? "VOTE":"NOT VOTE";

console.log(choice);

//IF U WANT TO SET DEFAULT VALUE FOR ANY VARIABLE U CAN USE ??

let user;

user="RAMAM";

console.log(user);

//IN ABOVE CASE WE HAVE DEFINED VALUE OF USER , BUT IF IT WAS NOT DEFINED THEN IT WILL PRINT UNDEFINED SO FOR THAT WE CAN GIVE ITS DEFAULT VALUE

let userr;

console.log(userr);

console.log(userr ?? "RAM");

//FOR PRINTING DIRECTLY ON THE WEB PAGE
document.write("HII");
document.write("KUNAL");

// TO ADD LINE BREAK BETWEEN THE LINES WE USE BR LIKE THIS 

document.write('<br>')


document.write("HII");
document.write('<br>')
document.write("KUNAL");


//WE CAN ALSO NAME THE FOR LOOP 

// AS WE KNOW THAT BREAK AND CONTINUE OPERATES IN THEIR LOCAL SCOPE HENCE LABEL IS USED TO NAME THE LOOP SO THAT WE CAN ADD SPECIAL INSTRUCTION LIKE BREAKING THE OUTER LOOP BY WRITE BREAK INSIDE INNER LOOP


let cnt=0;

outer : for(let i=0;i<5;i++){


              
           
             for(let j=0;j<4;j++){

              if(cnt==10){

                // IT WAS POSSIBLE TO BREAK OUTER LOOP BECAUSE WE HAVE NAMED IT  EXPLICITLY
                break outer;
              } 

              document.write(j);
                cnt++;
             }

             document.write('<br>');
}

//JAVASCRIPT ALLOW DATATYPE CONVERSION

//  WE CAN CONVERT T0 STRING,BOOLEAN OR NUMBER  USING STRING(),NUMBER(),BOOLEAN()

//JAVASCRIPT ALSO SUPPORT INBUILT CONVERSION 

document.write('<br>');


//SINCE 5 IS FIRST AND IT IS INTEGER AND '4' IS STRING JAVASCRIPT COMPILER CONVERT THE STRING INTO NUMBER
document.write(5-'4');

document.write('<br>');

//CONCANETED
document.write(5+'4');

//WE CAN ALSO CHECK THE DATATYPE OF A VARIABLE USING TYPEOF

let ab=7;

document.write('<br>');

document.write(typeof ab);

document.write('<br>');

ab=String(ab);

document.write(typeof ab);

//IF STRING IS EMPTY THEN ITS BOOLEAN VALUE IS 0, OTHERWISE ITS 1

//IF NUMBER IS 0 THEN ITS BOOLEAN VALUE IS 0, OTHERWISE ITS 1(FOR ANY OTHER VALUE)

// SO BOOLEAN CAN BE USED TO CHECK WHETHER INPUT TAKEN FROM USER IS EMPTY OR NOT

let str="";

document.write('<br>');

//RETURN FALSE AS STRING IS EMPTY
document.write(Boolean(str));

//LENGTH OF STRING 

let y="KUNAL"
console.log(y.length)

//TRIM FUNCTION WILL REMOVE THE WHITESPACE WHICH IS PRESENT AT THE STARTING AND ENDING OF ENDING

y="   KUNAL  ";
console.log(y.trim());

y="HII I AM LEARNING JAVASCRIPT";

console.log(y);

//USED TO REPLACE A WORD IN SENTENCE
y=y.replace("JAVASCRIPT","ADVANCE JAVASCRIPT")
console.log(y);

//CHECK WHETHER A STRING IS PRESENT OR NOT

let check=y.includes('LEARNING');
console.log(check);


//ALTHOUGH LEARN IS NOT PRESENT DIRECTLY BUT LEARNING IS PRESENT SO IT RETURNS TRUE THAT MEANS IT ALSO  CHECK FOR SUBSTRING

let new_check=y.includes('LEARN');
console.log(new_check);



let new_check2=y.includes('css');
console.log(new_check2);


//IN JS ARRAY PROVIDES US FEATURES TO ADD ELEMENT IN THE FRONT OR BACK

let ar=[5,7,"KUNAL",8];

console.log(ar);

//PUSH ELEMENT IN THE FRONT 

ar.unshift("HII");
console.log(ar);

//PUSH ELEMENT IN THE BACK
ar.push("END");
console.log(ar);

//REMOVE ELEMENT FROM END
ar.pop();
console.log(ar);

//REMOVE ELEMENT FROM FRONT
ar.shift();
console.log(ar);

//TO MAKE ARRAY EMPTY
ar=[];

console.log(ar);


//SPLIT SENTENCE 

let text="HII I AM LEARNING JAVASCRIPT";
let splitarray=text.split(' ');
console.log(splitarray);


//PRINT ELEMENTS OF ARRAY

let book = ["Math", "Physics", "Bio", "computer science"];
let booklength = book. length;
for(i = 0; i<booklength; i++){

  console. log(` Element ${i} is ${book[i]} \n `) 

}



//FUNCTION

function mul(n){

    for(i=1;i<=10;i++){

      document.write(`${n} * ${i}=${n*i}`);
      document.write('<br>');
    }
}

mul(5);




//WE CAN ALSO WRITE FUNCTION WIHOUT GIVING ARGUMENT BUT IT WILL TAKE ARGUMENT AS IN JS ARGUMENT ARE AUTOMATIALLY STORED IN ARGUMENT ARRAY WHICH CAN BE USED 

//USE OF ARGUMENTS ARRAY

function add(){
   
  let sum=0;
  for(i=0;i<arguments.length;i++){

     sum +=arguments[i];
  }

  document.write(sum);


}

add(6,8,10);

//ANONYMOUS FUNCTION - FUNCTION WITHOUT A NAME

// USED WHEN WE DONT WANT TO STORE FUNCTION OR DIRECTLY USED AS A ARGUMENT

//ANONYMOUS FUNCTION 

//FUNCTION STORED IN A VARIABLE

let my_func=function(){

  console.log("HELLO");
}

//setTimeout(function,time)

setTimeout(function(){

  console.log("HELLO");
},3000);




// Immediately Invoked Function in JavaScript

//FUNCTION WHICH IS EXECUTED AT THE TIME OF ITS CREATION WITHOUT FUNCTION CALL


(function (){

  console.log("HELLO IMMEDIATE FUNCTION")
})();




//OBJECT IN JAVASCRIPT

//DECLARATION 

let myObj={

    FirstName:'Kishlay',
    LastNmae:'Kunal',

    // sayHello:function (){

    //   console.log(`${this.FirstName} says Hello`);
    // }

    //OR WE CAN USE SHORTCUT LIKE THIS

      sayHello  (){

      console.log(`${this.FirstName} says Hello`);
    }


};

myObj.sayHello();

//ADD DATA IN OBJECT

myObj.age=23;

console.log(myObj);

myObj.Sex='Male';

console.log(myObj);

//DELETE ELEMENT FROM OBJECT

delete myObj.Sex;

console.log(myObj);

// WE CAN PRINT CONTENT OF OBJECT USING FOR IN LOOP

for(let key in myObj){

  console.log(key +" "+ myObj[key]);
}

myObj.sayHello;
*/

// WE CAN ALSO CREATE OBJECT USING NEW KEYWORD LIKE THIS

// let obj=new Object();

// obj.firstName="Kunal";
// obj.lastName="Kishlay"

// console.log(obj);

//WE CAN ALSO USE GETTER AND SETTER FUNCTION IN JAVASCRIPT using get and set keyword

/*

set function_name(argument){

}

get function_name(){

}


 

//CONSTRUCTOR FUNCTION IN JAVASCRIPT
//JUST LIKE CLASS IN C++

function obj(first,last,ag,clas) {

   this.firstName=first;
   this.lastName=last;
   this.age=ag;
   this.class=clas;

};

let myobj=new obj("Kishlay","Kunal",22,3);
console.log(myobj);
console.log(myobj.class);



// PROTOTYPES IN JAVASCRIPT

// ISKA USE TAB KRTE HAI JAB HME CONSTRUCTOR FUNCTION MEIN KUCH ADD KRNA HAI ,MATLAB EK BAAR AGAR TUM CINSTRUCTION FUNCTION BNA DO TOH TM DIRECT USE KUCH ADD NHI RK SKTE ,OBJECT MEIN KR SKTE THE ISLIYE CONSTRUCTOR FUNCTION MEIN ADD KRO TAKI JO BHI OBJECT BNE HO USE WOH PROPERTIES DIRECTLY ADD HO JAAYE

function obj(first,last,ag,clas) {

  this.firstName=first;
  this.lastName=last;
  this.age=ag;
  this.class=clas;

};

// AS WE CAN SEE THIS DIDNT ADD NATIONALITY IN obj constructor function
obj.nationallity="INDIAN";


let stud1=new obj("Kishlay","Kunal",23,3);

//BUT THIS   ADD NATIONALITY IN  stud1 object
stud1.nationallity="INDIAN";


console.log(stud1);

let stud2=new obj("Harsh","Raj",23,3);

// SO IF WE WANT THAT NATIONALITY IS ALSO ADDED IN CONSTRUCTION FUNCTION THEN USE PROTOTYPE KEYWORD

obj.prototype.nationallity="INDIAN";

console.log(stud2.nationallity);

// IN CONCLUSION WE CAN SAY THAT PROTOTYPE IS A SUPER CLASS WHICH IS INHERITED BY ALL CLASS OF JAVASCRIPT





//HOISTING IN JAVASCRIPT

// JAVASCRIPT DEFAULT BEHAVIOUR IS THAT IT MOVE ALL DECLARATION  TO THE TOP ACCOORDING TO ITS CURRENT SCOPE THAT IS CURRENT SCOPE MEANS AGAR WOH GLOBAL VARIABLE HAI TOH USKA TOP PE LE JAAYEGA BUT AGAR WOH DEFINED HUA HAI AS A LOCAL THAT IS INSIDE A FUNCTION THEN IT WILL MOVE THAT DECLARATION ON TOP INSIDE THAT FUNCTION

//BUT IT ONLY MOVE DECLARATION NOT ASSIGNING

//ONLY THIS, WILL GIVE ERROR STATING X IS NOT DEFINED
console.log(x);




//BUT THIS WILL NOT GIVE ERROR but with only var, with let and const hoisting is possible but it define the value at the starting ,that is with var if we use var x; javascript automatically initialize x with undefined ,but let and const dont
console.log(x);
var x;



//EVEN IF WE DECLARE VARIABLE JAVASCRIPT WILL ONLY HOIST DECLARATION NOT INITIALIZATION, it will give value of x as undefined 
console.log(x);
var x=8;



//FUNCTION HOISTING

hello();

function hello(){

  console.log("HELLO");

}


// WE CAN USE STRICT MODE TO RESTICT USER  SO THAT IT  does not allow variables to be used if they are not declared.

//SELECT ELEMENT BY ID IN JAVASCRIPT

let el=document.getElementById("test");
console.log(el);

//FETCH CONTENT OF THAT ID 
console.log(el.innerHTML);

//CHANGE VALUE 
el.innerHTML="<p>INNERHTML CHANGED</p>"




//SELECT ELEMENT BY CLASS

//AS ID WAS UNIQUE so getElementById WAS SELECTING SINGLE ELEMENT , HOWEVER SINCE CLASS CAN BE MULTIPLE HENCE getElementByClassName slect multiple element and store it in array ,and to access all element we can use array

let el=document.getElementsByClassName("same");

for(let i=0;i<el.length;i++){

   el[i].innerHTML="<P> List content changed </p>"
}

//WE CAN ALSO SELECT TAG 

let ele=document.getElementsByTagName("li");

//INPLACE OF DOCUMENT WE CAN ALSO WRITE PARENT ID  THEN CALL  getElementsByTagName




<li id="list"></li>
<li id="list"></li>
<li id="list"></li>

<div id="select">

   <li id="list"></li>
   <li id="list"></li>
   <li id="list"></li>
   <li id="list"></li>
</div>




//NOW SUPPOSE WE WANT TO ONLY SELECT THAT li which is present inside div for that we can first select div and then select li

let parent=document.getElementById("select");
let lis=parent.getElementsByTagName("list");



//MOST IMPORTANT AND POWERFUL SELECTOR - QUERY SELECTOR(IT SELECTS JUST LIKE WE SELECT IN CSS)


<div class="select">

<li id="list"></li>
<li id="list"></li>
<li id="list"></li>
<li id="list"></li>
</div>

//however this will only select 1 element which comes first 
let ele=document.querySelector("select.list");



//to select all element whose id is list we have to use querySelectorAll

let ele=document.querySelectorAll("li#list");
console.log(ele);

//AND TO ACCESS ALL THESE ELEMENT WE CAN USE FOR LOOP


// TO SELECT PARENT ELEMENT FROM CHILD ELEMENT ,SELECT PARENT ELEMENT FIRST AND THEN FROM THAT use .parentElement to selct parent element


//WE CAN CREATE AND APPEND ELEMENT using createElement

//SELECT div or section or anyhting after which you want to add something

let ele=document.getElementById("select");

//CREATE ELEMENT

let new_el=document.createElement("h1");

//WE CAN ALSO ADD CLASS AND ID TO IT

new_el.className="new";
new_el.id="new_el_id";

//ADD CONTENT

new_el.textContent="NEW TEXT ADDED";

//APPEND 

body.appendChild(new_el);



<ul id="list">
  <li>List 1</li>
  <li>List2</li>
  <li>List 3</li>
  <li>List 4</li>
</ul>



// Now suppose we want to add 5th li toh above then we can do like this

//Create a li

let new_el=document.createElement("li");

//get id where we want to add

let par=document.getElementById("list");

//set content of new_el

new_el.textContent="List 5";

//append it to parent

par.appendChild(new_el);

*/

// EVENT LISTNER IN JAVASCRIPT

// WE CAN ADD EVENT LISTNER EITHER INLINE OR USING LISTNER


// INLINE 

/*

<button id="btn" onclick="func()"> Click me</button>






function func(){

  alert("Button was clicked");
}

let id=document.getElementById("btn");

// id.addEventListener('click',func);

//INSTEAD OF DECLARING FUNCTION SEPARATELY WE CAN ALSO USE ANONYMOUS FUNCTION

id.addEventListener('click',function(){

  console.log("BUTTON WAS CLICkED USING ANONYMOUS FUNCGTION")
});

id.addEventListener('mouseover',function(){

  console.log("Mouse over is activated USING ANONYMOUS FUNCGTION")
});

id.addEventListener('mouseout',function(){

  console.log("Mouse out was activated  USING ANONYMOUS FUNCGTION")
});

// we can also add multiple event listner in the same button




//THERE IS ANOTHER FUNCTION CALLED .removeEventlistner which is used to remove event listner declared using separate function not anonymous function



//KEY DOWN EVENT IN JAVASCRIPT  - USED TO CHECK WHICH KEY IS PRESSED ON THE KEYBOARD

//CAN BE USED IN GAME DEVELOPMENT TO CHECK WHICH KEY IS PRESSED

//KEYDOWN - WHEN KEY IS PRESSED
//KEYUP - WHEN KEY IS RELEASED AFTER PRESSING IT

window.addEventListener('keydown',checkKey);

function checkKey(event){

  console.log(event.key);


}


//SCROLL EVENT IN JS

window.addEventListener('wheel',function(event){
       
  //TO CHECK SCROLL UP
  if(event.deltaY<0){

    console.log("Scrolling up");
  }

  // TO CHECK SCROLL DOWN
  else if(event.deltaY>0){

    console.log("Scrolling down");
  }
});




//SOMETIMES WE WANT TO SET OUR WEB PAGE A/C TO SCROLL ,LIKE IF USER HAS SCROOL TO SOME CONTENT IN PAGE CHANGE SOMETHING

//FOR THAT WE USE pageYOffset

window.addEventListener('scroll',function(){

      //CHANGE BACKGROUND COLOR OR SHOW POP UP
      if(window.pageYOffset> 150 ){

        document.body.style.background="cyan";
      }
      else{

        document.body.style.background="white";
      }

});

// they are generally used when eventlistner are added in parent and child and we want some order or ranking in which they get executed

//EVENT BUBBLING AND EVENT CAPTURING

// BY DEFAULT JAVASCRIPT USES BUBBLING PROPAGATION 

//  EVENT BUBBLING - AT FIRST  CHILD EVENTLISTNER GETS ACTIVATED ,THEN ITS PARENT AND SO ON

//  EVENT CAPTURING - IN THIS PARENT EVENTLISTNER GETS ACTIVATED FIRST AN D THEN ITS CHILD 

// BY DEFAULT TO BEHAVE AS EVENT BUBBLING SYNTAX USED - 

id.addEventListener('onclick',func);


// FOR EVENT CAPTURING JUST ADD TRUE 

id.addEventListener('onclick',func,true);

//SUPPOSE WE WANT BUBBLING OR CAPTURING TO STOP IN BETWEEN FOR THAT WE USE stopPropagation(declared in function)

function func(event){

  alert("..........................");
  event.stopPropagation();
}

//event.preventDefault() is used when we want to restrict elements from behaving thier default way

//LIKE WE DONT WANT or anchor to open link in one click

<a href="www.google.com" id="anchor"> CLICK ME</a>

let id =document.getElementById("anchor");

id.addEventListener('click',function(e){

    e.preventDefault();
});


// Time out and Time Interval in JavaScript

//suppose we want to execute something after some duration then we can use setTimeout

//SYNTAX - setTimeout(function_name,time_inteval)

//BUT SUPPOSE WE WANT TO STOP THIS IN THE MIDDLE THAT IS WE DONT WANT THIS TIMEOUT TO OCCUR , JUST LIKE SUPPPOSE WE GOT A ALARM FOR 5 AM BUT WE WAKE UP AT 4:30 SO NOW THERE IS NO NEED FOR ALARM SO WE STOP IT 

// FOR THAT FIRST WE HAVE TO STORE TIMEOUT ID

let timeoutId=setTimeout(function_name,time_inteval);

function function_name(){

  alert('PLEASE LOGIN');
}

//stop


if(user already login){



    clearTimeout(timeoutId);

}

// SET INTERVAL USED WHEN WE WANT TO REPEAT THINGS
*/







