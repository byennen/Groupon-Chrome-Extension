//You may load required files here, or create test-runner-wide environment settings.
var context = describe;

var api_response = {
  "status": {
    "code": 0,
    "message": "OK"
  },
  
  "deals":
  [
    {
      "id": "spring-restaurant-deal",
      "deal_url": "http://www.groupon.com/deals/green-door-tavern/",
      "title": "$10 for $25 Worth of Food and Drink at Green Door Tavern",
      "small_image_url": "http://www.groupon.com/images/site_images/0010/8551",
      "medium_image_url": "http://www.groupon.com/images/site_images/0010/8552",
      "large_image_url": "http://www.groupon.com/images/site_images/0010/8553",
      "division_id": "chicago",
      "division_name": "Chicago",
      "division_lat": 41.88941,
      "division_lng": -87.624039,
      "division_timezone": "America/Chicago",
      "division_offset_gmt": -18000,
      "vendor_id":  "green-door-tavern",
      "vendor_name": "Green Door Tavern",
      "vendor_website_url": "http://greendoorchicago.com/",
      "status": "open",
      "start_date": "2009-09-10T05:00:00.000-00:00",
      "end_date": "2009-09-11T04:59:59.999-00:00",
      "tipped": false,
      "tipping_point": 100,
      "tipped_date": "2009-09-11T04:59:59.999-00:00",
      "sold_out": false,
      "quantity_sold": 83,
      "price": "30.00USD",
      "value": "60.00USD",
      "discount_amount": "30.00USD",
      "discount_percent": 50,
      "conditions": {
        "limited_quantity": true,
        "initial_quantity":1000,
        "quantity_remaining": 43,
        "minimum_purchase": 2,
        "maximum_purchase": 4,
        "expiration_date": "2010-04-21T23:59:59.000-05:00",
        "details": [
          "New customers only",
          "Limit 1 per person",
          "May purchase multiple as gifts",
          "Reservations recommended"
        ]
      }
    }
  ]
};


