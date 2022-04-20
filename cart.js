$(function () {

  var goToCartIcon = function($addTocartBtn){
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      right: position.right
    }, 500 , "linear", function() {
      $image.remove();
    });
  }



  $('.my-cart-btn').myCart({
    currencySymbol: '₱',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',

    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
    cartItems: [
      {id: 1, name: '(Page One: Belle de Jour Power Planner)', summary: 'summary 1', price: 20, quantity: 1, image: 'picone.jpg'},
      {id: 2, name: '(Page Two: Belle de Jour Power Planner)', summary: 'summary 2', price: 20, quantity: 1, image: 'pictwo.jpg'},
      {id: 3, name: '(Page Three: Belle de Jour Power Planner)', summary: 'summary 3', price: 20, quantity: 1, image: 'picthree.jpg'},
      {id: 4, name: '(Special: Belle de Jour Power Planner)', summary: 'summary 4', price: 20, quantity: 1, image: 'picfour.jpg'},
      {id: 5, name: '(Cover: Belle de Jour Power Planner)', summary: 'summary 5', price: 20, quantity: 1, image: 'picfive.jpg'},
      {id: 6, name: '(Authentic Sanrio Square Case)', summary: 'summary 6', price: 15, quantity: 1, image: 'picsix.jpg'},
      {id: 7, name: '(Pokemon Pikachu Ceramic Bank)', summary: 'summary 7', price: 50, quantity: 1, image: 'pokemon.jpg'},
      {id: 8, name: '(Cute Printing Tote Bag Bulldog)', summary: 'summary 8', price: 75, quantity: 1, image: 'picseven.jpg'},
      {id: 9, name: '(Korean Red Tee)', summary: 'summary 9', price: 60, quantity: 1, image: 'pictwelve.jpg'},
      {id: 10, name: '(Preloved Sun Specs)', summary: 'summary 10', price: 60, quantity: 1, image: 'picfourteen.jpg'},
      {id: 11, name: '(Simple Pearl Necklace)', summary: 'summary 11', price: 40, quantity: 1, image: 'picsixteen.jpg'},
      {id: 12, name: '(Studio Fashion Elmo Korean Inspired Bucket Hat for Unisex)', summary: 'summary 12', price: 100, quantity: 1, image: 'picseventeen.jpg'},
      {id: 13, name: '(Round Wooden Plates)', summary: 'summary 13', price: 75, quantity: 1, image: 'picfifteen.jpg'},
      {id: 14, name: '(Glass Flower Vase)', summary: 'summary 14', price: 50, quantity: 1, image: 'picten.jpg'},
      {id: 15, name: '(Cute Keyring)', summary: 'summary 15', price: 50, quantity: 1, image: 'picseven.jpg'},
    ],

    clickOnAddToCart: function($addTocart){
      goToCartIcon($addTocart);
    },
    afterAddOnCart: function(products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
      console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    },
    
    

    checkoutCart: function(products, totalPrice, totalQuantity) {
      var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity; 
      checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
      $.each(products, function(){
        checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
      });
    },
    
    getDiscountPrice: function(products, totalPrice, totalQuantity) {
      console.log("calculating discount", products, totalPrice, totalQuantity);
      return totalPrice + 30 ;
    }
  });

  $("#addNewProduct").click(function(event) {
    var currentElementNo = $(".row").children().length + 1;
    $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
  });
});
