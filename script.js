

  const productsContainer = document.querySelector("#productsContainer");
  const cartButton = document.getElementById("cart-icon-button");
  const span = document.querySelector("#span");
  const cartView = document.querySelector("#cartView");



 let products = [
  {name: "Apple", id: 1, price: 1.99},
  {name: "Banana", id: 2, price: 0.99},
  {name:"Watermelon", id: 3, price: 1.50},
  
    {name:"Tomato", id: 4, price: 1.00},
    {name:"Potato", id: 5, price:1.00},
    {name: "Corn", id: 6, price:1.00},

  {name:"Milk", id: 7, price: 1.00},
  {name:"Water", id: 8, price:1.00},
  {name: "Bread", id: 9, price:1.00}  
 ];
 console.log(products);

 //empty cart to add
 let cart = [];
 console.log(cart);




   function updateCart(){
    span.textContent = cart.length;
  } updateCart();



     function displayCartItems(){
    cartView.innerHTML = "";
    cart.forEach(item=>{

      const newDiv = document.createElement("div");
      const newHTag = document.createElement("h4");
      const newPTag = document.createElement("p");
      const removeBtn = document.createElement("button");
      const plusBtn = document.createElement("button");
      const minusBtn = document.createElement("button");

      newDiv.classList.add("newProduct");
      newHTag.textContent = `${item.name} (x${item.quantity})`;
      newPTag.textContent = `$${item.price}`;
      removeBtn.textContent = "X"
      plusBtn.textContent = "+"
      minusBtn.textContent = "-"

      removeBtn.addEventListener("click", function(){
        cart= cart.filter(cartItem => cartItem.id !== item.id);
        updateCart();
        displayCartItems();
        localStorage.setItem('cart', JSON.stringify(cart));
      });

      plusBtn.addEventListener("click", function(){
        item.quantity++;
        displayCartItems();
        localStorage.setItem('cart', JSON.stringify(cart));
      });

      minusBtn.addEventListener("click", function(){
        item.quantity--;
        if(item.quantity <= 0){
         cart = cart.filter(cartItem => cartItem.id !==item.id);
         updateCart();
        } 
        displayCartItems();
        localStorage.setItem('cart',JSON.stringify(cart));
      });


     newDiv.appendChild(newHTag);
     newDiv.appendChild(newPTag);
     newDiv.appendChild(minusBtn)
     newDiv.appendChild(plusBtn);
     newDiv.appendChild(removeBtn);
     

     cartView.appendChild(newDiv);
     });
     
     calculateTotal();
}

const clearBtn = document.createElement("button");
   clearBtn.textContent = "Clear Cart"
   document.body.appendChild(clearBtn);
   clearBtn.className = "clearBtn";

   clearBtn.addEventListener("click", function(){
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    displayCartItems();
   });




 products.forEach(product=>{
  const newDiv = document.createElement("div");
  const newHTag = document.createElement("h4");
  const newPTag = document.createElement("p");
  const addBtn = document.createElement("button");

  newDiv.classList.add("newProduct");
  newHTag.textContent = product.name;
  newPTag.textContent = `$${product.price}`;
  addBtn.textContent = "Add to cart";

  newDiv.appendChild(newHTag);
  newDiv.appendChild(newPTag);
  newDiv.appendChild(addBtn);

  productsContainer.appendChild(newDiv);


  addBtn.addEventListener("click", function(){
    
    const existingProduct = cart.find(item => item.id === product.id);
    if(existingProduct){
      existingProduct.quantity++;
      console.log(`Increased quantity of ${product.name}. New quantity: ${existingProduct.quantity}`);
    } else{
      
      cart.push({...product, quantity: 1});
      console.log(`Added new product to cart: ${product.name}`);
    }

    updateCart()
    displayCartItems();
    console.log(cart);//just for testing, can be removed later

    localStorage.setItem('cart',JSON.stringify(cart));
  });

 });



 cartButton.addEventListener("click", function(){
  if(cartView.style.display =="none"){
    cartView.style.display = "block"// show
  }else{
    cartView.style.display = "none";
  }
 });

function calculateTotal(){
  let total = 0;

  for(let i=0; i < cart.length; i++){
    total += cart[i].price * cart[i].quantity;
  }


  const newDiv = document.createElement("div");
  newDiv.textContent = `Total: ${total.toFixed(2)}`;

  cartView.appendChild(newDiv);
}



function loadCart(){
  const storedCart = localStorage.getItem('cart');
  if(storedCart){
    try {
    cart = JSON.parse(storedCart);
  } catch (error){
    console.log("Enter parsing items fromm localStorage");
  
    cart = [];
  }
}
updateCart();
displayCartItems();
}

loadCart();
