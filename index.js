var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var obj = { itemName : [item],
              itemPrice : Math.floor(Math.random() * 100)}
 cart.push(obj)
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  //you have nothing in your cart
  if(cart.length===0) {
    return "Your shopping cart is empty."
  }
  
  //you have something in your cart
  else {
    var ret = "In your cart, you have"
    
    for(let i=0;i<cart.length;i++) {
      //if you're on the last item, add an "and" in
      if(i===cart.length-1 && cart.length!=1) {
        ret = ret + " and"
      }
      
      //main statement addition
      ret = ret + ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      
      //adding in punctuation
      if(i===cart.length-1) {
        ret = ret + "."
      }
      
      else {
        ret = ret + ","
      }
    }
    
    return ret
  }
}

function total() {
  //loop through everything in the cart, and add their price to ret
  var ret = 0
  
  for(let i = 0;i<cart.length;i++) {
    ret = ret + cart[i].itemPrice
  }
  
  return ret
}

function removeFromCart(item) {
  //stores length to check if anything was cut out later
  var initL = cart.length
  
  //loops through the array to cut out anything that has the given name
  for(let i=0;i<cart.length;i++) {
    if(true) {
      cart.splice(2,1)
  }
  
  //if it's not in the cart, using initL
  if(initL===cart.length) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
