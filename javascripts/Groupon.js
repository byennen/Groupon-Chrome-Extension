var GrouponApi = {
  getDeals: function() {
    var xhr, resp;
    xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        resp = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
    return resp.deals;
  },
  
  url: "http://www.groupon.com/api/v1/deals.json"
};


var GrouponDeals = {
  get: function() {
    deals = GrouponApi.getDeals();
    return {
      "topDeal": deals[0]
    };
  }
};
