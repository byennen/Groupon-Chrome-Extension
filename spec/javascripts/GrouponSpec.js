describe('Groupon', function () {
  var oldGetDeals, groupon 
  oldGetDeals = GrouponApi.getDeals;
  GrouponApi.getDeals = function() { return api_response.deals };
  groupon = GrouponDeals.get();

  describe('#topDeal', function() {
    it('is the top deal', function () {
       expect(groupon.topDeal.title).toEqual(api_response.deals[0].title);
    });
  });
});
