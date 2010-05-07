window.onload = function() {
  var deal, titleDiv,  priceDiv, imageDiv, buynowDiv;

  deal = GrouponDeals.get().topDeal;
  titleDiv = document.getElementById("title").innerHTML = deal.title;
  priceDiv = document.getElementById("price").innerHTML = deal.price;
	imageDiv = document.getElementById("image").innerHTML = "<img src=" + deal.medium_image_url + ">";
	buynowDiv = document.getElementById("buy-now").innerHTML = "<a href='"+ deal.deal_url + "' target='_blank'><img src='images/buy.png' width='90' height='39' alt='Buy'></a>";
};