let head=document.getElementsByTagName("h1")
console.log(head);

let para=document.getElementsByClassName("para-1")
console.log(para);

let unipara=document.getElementById("unique-para")
console.log(unipara);

let na=document.getElementsByName("n1")
console.log(na)

// let select=document.querySelector("h1")
// let select=document.querySelector(".para-1")
let select=document.querySelector("#unique-para")

console.log(select.innerHTML);

let  multi=document.querySelectorAll("h1")
console.log(multi)

let newElement=document.createElement("h2")
newElement.innerText="Oh My God"

console.log(newElement);
document.body.append(newElement);




