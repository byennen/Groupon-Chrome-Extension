var GrouponApi = {
  getDeals: function() {
    var xhr, resp;
    xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
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

var Groupon = {
  deals = GrouponApi.getDeals()
};


(function() {
}())
