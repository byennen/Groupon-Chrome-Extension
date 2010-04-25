window.onload = function() {
  var deal, titleDiv;
  deal = GrouponDeals.get().topDeal;
  titleDiv = document.getElementById("title");
  titleDiv.innerHTML = deal.title;
};
