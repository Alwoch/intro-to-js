//import * as fs from "fs";
//const data = readFileSync("./data.json");
//console.log(data);

fetch('./data.json')
.then((response)=> response.json())
.then((json)=>console.log(json));

/* import data from './data.json' assert{type:'json'};

const jsonData = JSON.parse(data);

console.log(jsonData); */

const users = [{name:"ivan",email:"ikhosler@gmail.com", id: 1 }];
const comments =[{id:1, comment:"todays been tiresome"}];

//debugger
const submit = document.getElementById("btn1");
submit.onclick = function(){
    let fname = document.getElementById("fname").value;
    let mail = document.getElementById("fname").value;
    let comment = document.getElementById("comment").value;
    
    users.push({name:fname, email:mail, id:users[users.length-1].id + 1},);
    comments.push({id:users[users.length-1].id + 1, comment});

    localStorage.setItem('user',JSON.stringify(users));
    localStorage.setItem('coments',JSON.stringify(comment));

    console.log(
        JSON.parse(localStorage.getItem('user')),
        JSON.parse(localStorage.getItem('coments')));
}