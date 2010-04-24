describe('Groupon', function () {
  describe('::get', function() {
    var oldGetDeals = GrouponApi.getDeals;
    GrouponApi.getDeals = api_response.deals;
    var groupon = Groupon.get();
    it('has the deal title', function () {
       expect(groupon.deals.title).toEqual(api_response.deals.body);
    });
  });
});
