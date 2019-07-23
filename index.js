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
  //stores length to check if anything was cut out
  var initL = cart.length
  
  for(let i=0;i<cart.length;i++) {
    if(cart[i].itemName===item) {
      cart.prototype.splice(i, 1)
    }
  }
  
  //if it's not in the cart
  if(initL>cart.length) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
