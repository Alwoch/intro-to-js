let button1 = document.getElementById("bt1");

//click event
/* button1.addEventListener("click", function (event) {
    console.log(event.type);
}); */

//mouse hover event handling
/* button1.addEventListener("mouseover", function (event) {
    console.log(event.type);
}); */

//using inner text
document.getElementById("screen").innerText = "hi";

let docBody = document.getElementById("body");

//click event bubbling to the body element
/* docBody.addEventListener("click", function (MouseEvent) {
    alert("Seems you're bothering click me!");
    console.log(MouseEvent);
}); */

//button down event
/* button1.addEventListener("mousedown", function (event) {
    //writing html with javascript
    document.getElementById("page").innerHTML = "<h1>This is a sample heading</h1><div style='color:red;'>Red</div>";
}) */

//button up event
/* button1.addEventListener("mouseup", (event) =>
    //writing html with javascript
    document.getElementById("page").innerHTML = ""
)
 */
//event handling involves event listening the handling using a function 
/* We have terms like, event type, event property, event atrributes, */

let text1 = document.getElementById("text1");
//key down
text1.addEventListener("keydown", () =>
    //writing html with javascript
    console.log("this is a keydown")
)

text1.addEventListener("keyup", () =>
    //writing html with javascript
    console.log("this is a keyup")
)

text1.addEventListener("keypress", () =>
    //writing html with javascript
    console.log("this is a keypress")
)

if (navigator.onLine){
//    document.getElementById("screen").innerText = "online";
    console.log("online");
}else{
 //   document.getElementById("screen").innerText = "offline";
    console.log("offline");
}

//text1.onkeydown = console.log("hi");