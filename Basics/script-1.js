alert("This is from external file");

document.write("Greetings from Js file #1:)");

console.error("Error #3: bla bla bla");
console.warn("Warning #3: bla bla bla");

console.error("%c Error #4: bla bla bla", "color:blue; background:yellow");

function addTwoParam(x=0, y=0) {
    var sum = 0;
    //x=(x==undefined)?0:x;
    //y=(y==undefined)?0:y;
    sum = x + y;
    return sum;
}