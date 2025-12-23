function manipulateElement(){
    // let newListElement=document.createElement("li")
    // newListElement.innerText="Item-4"
    // newListElement.innerHTML="<a>Link</a> Item-5"
    // console.log(newListElement)


    let newListElement=document.createElement("li")
    let input=document.querySelector("input")

    newListElement.innerText=input.value

    let orli=document.querySelector("ol")
    //orli.append(newListElement) //both text and element node
    //orli.appendChild(newListElement)//only element node

    // insert before

    // orli.insertBefore(newListElement,orli.children[2])
    
    // replace
    // orli.replaceChild(newListElement,orli.children[2])

    // remove
    // orli.removeChild(orli.children[1])

    // removing all elementss .remove()

    // prepend-->inserting in 0th index

    // Dynamic cascading
    newListElement.style.color="yellow"
    newListElement.style.boxShadow="5px 5px 10px red"
    orli.prepend(newListElement)

}