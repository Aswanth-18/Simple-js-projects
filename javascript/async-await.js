let newPromise=new Promise((resolve,reject)=>{
    let dataReceived=false;

    if(dataReceived){
        resolve("Successfully received")
    }
    else{
        // reject("Not received")
        throw new Error("Some thing went wrong")
    }

})
//async illama await use panna mudiyathu because the function is synchorous
//await asynchorous function la tha use panna mudiyum

async function executePromise(){
    try{
        let message= await newPromise
        console.log(message)
    }
    catch(error){
        console.log(error.message)//inga message use panna antha error value oda things print aagum
    }
}
executePromise()
console.log("Mass Thala nee") 
