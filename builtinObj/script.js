// Literal Creation
var myStr = "Welcome to JavaScript";
var myArr = [1, 2, "abc", , , 90, 101, [55,"mno", false, ], "xyz", ]

// Constructor
var newStr = new String("JavaScript string object");
var Arr = new Array();
var colorArr = new Array("red", "green", "blue"); /* dense array*/

// String function used to convert object into its equivalent string primitive datatype
var str = String("");


console.log(typeof myStr); /*string*/
console.log(typeof newStr); /*object*/
console.log(typeof str); /*string*/

/* string properties */
console.log(myStr.length);
/* string methods */
console.log(myStr.charAt(0));
console.log(myStr.charAt(myStr.length-1));
console.log(myStr.indexOf("j"));
console.log(myStr.indexOf("J"));
console.log(myStr.indexOf("Sc"));
console.log(myStr.substring(4,12));
console.log(myStr.split(" "));
console.log(myStr.split(""));

/* 
/pattern/flag (i - ignore case,m - multiple lines,g - global)
*/

console.log(myStr.replace(/sc/i,"_"));

/* Array properties */
console.log(myArr[0]);
console.log(myArr[4]);
console.log(myArr);
console.log(myArr.length);
console.log(myArr[7]);
console.log(myArr[7][0]);
console.log(myArr[7][1]);
console.log(myArr[7][2]);
console.log(myArr[7][3]);
console.log(myArr[7][4]);
console.log(myArr[7].length);

myArr[7][8] = 222;
console.log(myArr[7].length);
console.log(myArr[7]);
console.log(myArr.length);

/* Array methods */

var newArr = [1,2,3,5,10,11,7,26];
console.log(newArr.join("*_*"));
console.log(typeof newArr.join("*_*"));
console.log(newArr.pop());
console.log(newArr);
console.log(newArr.push(24));
console.log(newArr);
console.log(newArr.shift());
console.log(newArr);
console.log(newArr.unshift(25));
console.log(newArr);
console.log(newArr.reverse());
console.log(newArr.sort()); /* sorts according to the ascii code of elements*/
console.log(newArr.sort(compare));

function compare(a,b) {
    return a-b;
}

/* Associative array*/
var aArr = new Array(); 
var x = "first Key"
aArr["0"] = 10;
aArr["1"] = 10;
aArr[x] = 45;
aArr["user Name"] = "Nessma";
aArr["user age"] = 24;
aArr["user skill"] = ["dance", "read", "play"];

console.log(aArr.length);
console.log(aArr.join(""));

for (const key in aArr) {
    if (Object.hasOwnProperty.call(aArr, key)) {
        const element = aArr[key];
        console.log(key+": "+element);
    }
}

/* Date object */
const today = new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.setDate(21));
console.log(today);
console.log(today.toDateString());
console.log(today.toLocaleDateString());

/* Error Object */

var myError = new Error("Less than expected");

try{
var result = parseInt(prompt("Enter value between 10 and 20"));

if (result < 10) {
    throw myError;
}
else if (result > 20) {
    throw new RangeError("Our of range")
}
else {
    alert("Value within accepted range");
}
} catch (e){
if (e instanceof RangeError) {
    console.log("This is a range error");
}
else if (e==myError){
    console.log("low value");
}
console.log("catch block executed");
} finally {
    console.log("done");
}
console.log("after finally")

/* object object*/

/* constructor */
var obj = new Object();
obj.nameProp = "JavaScript";
obj.typeProp = "scripting language";

/*literal creation*/
var myObj = {};
myObj.objName = "Nessma Kandil";
myObj.objAge = 24;
myObj.skills = ["web", "programming"];
myObj.display = function () {
    return "This is " + this.objName+ ". She is " + this.objAge + ". She loves " + this.skills.join();
}

console.log(myObj.display());

var customObj = {
Name:"Nessma Kandil",
Age: 24,
skills:  ["web", "programming"],
info: function () {
    return "This is " + this.Name+ ". She is " + this.Age + ". She loves " + this.skills.join();
}};

console.log(customObj.info());

// Factory method
function employee(nm,dep,sal) {
    return {
        empName: nm,
        empSalary:sal,
        empDept: dep,

        empInfo: function () {
            return this.empName + " works in department " + this.empDept;
        }
    }
}

var emp = employee("Ali", "SD", 5000);
console.log(emp.empName);
console.log(emp.empDept);
console.log(emp.empInfo());

// Constructor method
function Employee(nm,dep,sal) {
        this.empName = nm;
        this.empSalary = sal;
        this.empDept = dep;

        this.empInfo = function () {
            return this.empName + " works in department " + this.empDept;
        }
}

var em = new Employee("nessma", "SD", 5000);
console.log(em.empName);
console.log(em.empDept);
console.log(em.empInfo());

/* object methods */
console.log(em.hasOwnProperty("empName"));
console.log(em.hasOwnProperty("empNname"));
console.log(em.toString());
console.log(Object.keys(em));
console.log(Object.values(em));

delete em.empSalary;
console.log(em.empSalary);
em.empSalary = 10000;
console.log(em.empSalary);
