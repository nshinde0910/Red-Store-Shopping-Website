var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") 
    {
        menuItems.style.maxHeight = "400px"
    }
    else
    {
        menuItems.style.maxHeight = "0px"
    }
}

var smallImg = document.getElementsByClassName("small-img");

var productImg = document.getElementById("product-img");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}

var input = document.getElementsByClassName("input");
var price = document.getElementsByClassName("price");