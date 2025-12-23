// Summa oru example

let image=document.querySelector("img")

image.addEventListener("mouseover",function(){
    image.src="img2.jpeg"
})
image.addEventListener("mouseout",function(){
    image.src="img3.jpeg"
})