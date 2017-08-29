console.log('hey');

var foodCollection = [{
    "name": "Durian",
    "nickname": "Very Smelly Fruit",
    "photoDetail": "./images/durian_large.jpg",
    "photoCollection": "./images/durian_preview.jpg",
    "desc": "A spikey fruit with a strong odour that is described as tasting sweet and savoury. The persistence of its odousr, which may linger for several days, has led to the fruit's banishment from certain hotels and public transportation in Southeast Asia"
  },

  {
    "name": "Satay",
    "nickname": "Skewerd Meat",
    "photoDetail": "./images/satay_large.jpg",
    "photoCollection": "./images/satay_preview.jpg",
    "desc": "Skewered and grilled seasoned meats combined with various sauces, mainly peanut sauce. It's a national dish that can be found in street vendors, upper-class restaurants, or celebration feasts."
  },

  {
    "name": "Kerupuk",
    "nickname": "Deep Fried Crackers",
    "photoDetail": "./images/kerupuk_large.jpg",
    "photoCollection": "./images/kerupuk_preview.jpg",
    "desc": "Made from the dried paste, starch, and other ingredients (nuts, fish, etc). It's common to accompany this snack with fried rice."
  },

  {
    "name": "Cendol",
    "nickname": "Tapioca Sugary Dessert",
    "photoDetail": "./images/cendol_large.jpg",
    "photoCollection": "./images/cendol_preview.jpg",
    "desc": "An iced sweet dessert that contains droplets of worm-like green rice flour jelly (similar to bubble tea jelly), coconut milk, and palm sugar syrup."
  }
];

//Function for COLLECTION VIEW Items
function makeFoodDiv(item) {
  var foodObj = document.createElement("div");
  $(foodObj).addClass("col-sm-3 col-xs-6");

  var foodA = document.createElement("a");
  $(foodA).attr("href", "#");
  $(foodA).append('<img class="img-responsive portfolio-item" src="' + item.photoCollection + '">');

  var foodName = document.createElement("p");
  $(foodName).addClass("colName");
  $(foodName).append(item.name);

//Adding a Listener to each food object
  $(foodA).click(function() {
      updateTitle(item);
      updateNickname(item);
      updateImg(item);
      updateDesc(item);
      updateSubtitle(item);

      console.log(item);
    }

  );
  $(foodObj).append(foodA).append(foodName);
  return foodObj;
};

//Listener Function Updating Food Title
function updateTitle(newTitle) {
  $("#foodTitle").text(newTitle.name);
};

//Listener Function Updating Food Nickname
function updateNickname(newNick) {
  $("#foodNickname").text(newNick.nickname);
};

//Listener Function Updating Image
function updateImg(newImg) {
  $("#detailPic").attr("src",newImg.photoDetail);
};

//Listener Function Updating Subtitle
function updateSubtitle(newSub) {
  $("#descSubtitle").text("Food Description");
}

//Listener Function Updating Food Description
function updateDesc(newDesc) {
  $("#foodDesc").text(newDesc.desc);
};

//Listener Function Updating


//For loop to run function for COLLECTION VIEW
for (var i = 0; i < foodCollection.length; i++) {
  var myDiv = makeFoodDiv(foodCollection[i]);
  $('#collectionRow').append(myDiv);
};

//Add Button

$("#btn btn-success btn-lg").click(function ( ) {
  $("#container").push();
});
