// fetch("https://fakestoreapi.com/users/gfhgfn")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Data not found");
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function fetchData() {
  try {
    let responce = await fetch("https://fakestoreapi.com/users");
    if (!responce.ok) {
      throw new Error("Data not found")
    }
    let data=await responce.json()
    console.log(data)
  } catch(error){
    console.log(error.message);
    
  }
}
fetchData()
