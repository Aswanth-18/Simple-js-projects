
const images = [
  "food/banner.3.png",
  "food/banner.png",
  "food/banner.2.png"
];

let index = 0;
const slider = document.getElementById("sliderImage");

setInterval(() => {
  slider.classList.add("opacity-0");
  setTimeout(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
    slider.classList.remove("opacity-0");
  }, 200);
}, 7000);



let cart = [];



const cakes = [
  {id:101, name:"Mixed Fruit Cake", price:549, img:"food/1.fruit.png"},
  {id:102, name:"Chocolate Cake", price:599, img:"food/2.chocolate.png"},
  {id:103, name:"Black Forest", price:499, img:"food/3.Balckforest.png"},
  {id:104, name:"Mango Cake", price:529, img:"food/4.mango.png"},
  {id:105, name:"Raspberry Cake", price:569, img:"food/5.raseberry.png"},
  {id:106, name:"Red Velvet Cake", price:649, img:"food/6.Red velvett.png"},
  {id:107, name:"Butterscotch Cake", price:489, img:"food/7.butterscotch.png"},
  {id:108, name:"Vanilla Cake", price:399, img:"food/8.vanilla.png"},
  {id:109, name:"Rainbow Cake", price:699, img:"food/9.rainbow.png"},
  {id:110, name:"Oreo Cake", price:579, img:"food/10.oreo.png"}
];


const pastries = [
  {id:201, name:"Croissant", price:69, img:"food/11crossiant.png"},
  {id:202, name:"Choco Croissant", price:79, img:"food/12choco crossiant.png"},
  {id:203, name:"Glazed Doughnut", price:59, img:"food/13.glazed doughnut.png"},
  {id:204, name:"Choco Doughnut", price:69, img:"food/14.choco doughnut.png"},
  {id:205, name:"Choco Muffin", price:89, img:"food/15.choco muffib.png"},
  {id:206, name:"Bread Loaf", price:49, img:"food/16.bread.png"},
  {id:207, name:"Choco Cookies", price:99, img:"food/17.choco cook.png"},
  {id:208, name:"Brownies", price:119, img:"food/19.brownies.png"},
  {id:209, name:"Lava Cake", price:129, img:"food/20.lava.png"},
  {id:210, name:"Macarons", price:159, img:"food/21.macrons.png"}
];


function renderCakes(){
  document.getElementById("cakes-grid").innerHTML =
    cakes.map(p => `
      <div class="bg-white shadow rounded">
        <img src="${p.img}" class="h-40 w-full object-cover">
        <div class="p-4">
          <h3 class="font-semibold">${p.name}</h3>
          <p class="text-sm">₹${p.price}</p>
          <button onclick="addToCart(${p.id}, 'cake')"
            class="mt-3 w-full bg-[#D2B48C] py-2 rounded hover:bg-[#8B4513] duration-200 hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    `).join("");
}


function renderPastries(){
  document.getElementById("pastries-grid").innerHTML =
    pastries.map(p => `
      <div class="bg-white shadow rounded">
        <img src="${p.img}" class="h-40 w-full object-cover">
        <div class="p-4">
          <h3 class="font-semibold">${p.name}</h3>
          <p class="text-sm">₹${p.price}</p>
          <button onclick="addToCart(${p.id}, 'pastry')"
            class="mt-3 w-full bg-[#D2B48C] py-2 rounded hover:bg-[#8B4513] duration-200 hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    `).join("");
}

renderCakes();
renderPastries();



function addToCart(id, type){
  let list = type === "cake" ? cakes : pastries;
  let product = list.find(p => p.id === id);

  let item = cart.find(i => i.id === id);

  if(item){
    item.qty++;
  } else {
    cart.push({...product, qty:1});
  }

  updateCart(); 
}

function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  updateCart();
}



function updateCart(){
  const items = document.getElementById("cart-items");

  if(cart.length === 0){
    items.innerHTML = `<p class="text-sm">Your Cart is Empty...</p>`;
  }
  else{
    items.innerHTML = cart.map(i => `
      <div class="flex items-center gap-3">
        <img src="${i.img}" class="w-10 h-10 rounded-full">
        <div class="flex-1">
          <p>${i.name}</p>
          <p class="text-sm">₹${i.price} × ${i.qty}</p>
        </div>
        <button onclick="removeFromCart(${i.id})" class="text-red-500">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `).join("");
  }

  document.getElementById("cart-total").innerHTML =
    `₹${cart.reduce((t,i)=>t+i.price*i.qty,0).toFixed(2)}`;

  document.getElementById("cart-count").innerHTML =
    cart.reduce((t,i)=>t+i.qty,0);
}

updateCart();


function toggleCart(show){
  const p = document.getElementById("cart-panel");
  const o = document.getElementById("overlay");

  show || p.classList.contains("hidden")
    ? (p.classList.remove("hidden"), o.classList.remove("hidden"))
    : (p.classList.add("hidden"), o.classList.add("hidden"));
}


function toggleLogin(show){
  const login = document.getElementById("login-panel");
  const overlay = document.getElementById("overlay");

  if(show === false){
    login.classList.add("hidden");
    overlay.classList.add("hidden");
  } else {
    login.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
}


document.getElementById("cart-btn").onclick = toggleCart;
document.getElementById("login-btn").onclick = toggleLogin;


document.getElementById("overlay").onclick = () => {
  document.getElementById("cart-panel").classList.add("hidden");
  document.getElementById("login-panel").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
};
