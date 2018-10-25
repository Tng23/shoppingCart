//Shopping cart functions

var shoppingCart = {}; //initializes cart
shoppingCart.cart = [];
shoppingCart.Item = function(name, price, count){
this.name = name
this.price = price
this.count = count
};

shoppingCart.addItemToCart = function(name, price, count){ //adds item to cart
for (var i in this.cart){
  if (this.cart[i].name === name){
      this.cart[i].count += count;
      this.saveCart();
      return;
  }
}
var item = new this.Item(name, price, count); //creates items in cart
this.cart.push(item);
this.saveCart();
};

shoppingCart.setCountForItem = function(name, count) { //counts items
for (var i in this.cart){
  if (this.cart[i].name === name) {
    this.cart[i].count = count;
    break;
  }
}
this.saveCart();
};

shoppingCart.removeItemFromCart = function(name){ //removes one item
for (var i in this.cart){
  if (this.cart[i].name === name){
    this.cart[i].count --;
    if(this.cart[i].count === 0){
      this.cart.splice(i, 1);
    }
    break;
  }
}
this.saveCart();
};


shoppingCart.removeItemFromCartAll = function(name){ //removes all item name
for (var i in this.cart){
  if (this.cart[i].name === name){
    this.cart.splice(i, 1);
    break;
  }
}
this.saveCart();
};

shoppingCart.clearCart = function(){ //clears the cart
this.cart = [];
this.saveCart();
};


shoppingCart.countCart = function(){ // returns total count
var totalCount = 0;
for (var i in this.cart){
  totalCount += this.cart[i].count;
}

return totalCount;
};

shoppingCart.totalCart = function(){ //returns total cost
var totalCost = 0;
for(var i in this.cart){
  totalCost += this.cart[i].price * this.cart[i].count;
}
return totalCost.toFixed(2);
};

shoppingCart.listCart = function() {//array of items
var cartCopy = [];
for (var i in this.cart){
    var item = this.cart[i];
    var itemCopy = {};
    for (var p in item){
      itemCopy[p] = item[p];
    }
    itemCopy.total = (item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy);
  }
  return cartCopy;
};

shoppingCart.saveCart = function() { //saves data to local storage
localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart.cart));
}

shoppingCart.loadCart = function(){ //loads from local storage
this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
}
