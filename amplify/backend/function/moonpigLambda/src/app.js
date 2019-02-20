/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')



// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/items', function(req, res) {
  // Add your code here
  res.json(lambdaResp);
});

app.get('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/items', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example post method *
****************************/

app.put('/items', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/items', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

//For local testing
var lambdaResp = {
  SearchId:
    "H4sIAAAAAAAEAC2UiZHDMAwDWyL4SFT/jd3CuRnHcRw+IABK5yozuL8b52lK0+obitiXeTURL6KOQrpPdXUy+PTTKiOzFVVxIq50lCXXeasXGSR39He/wd2Vp2JO0IW+XYTJnwl6LRVT5Cn1UrMxmyoydb57jYYuG8B4B9hZT9kxN/pFUedGrvY665WYaygL+NTdaFAJiCBJg0r1JGW5U/a6OOCjGwhx15FDwmaRfqOkmTASBh/1EX1aDCXyKwnIrvAQgB1zRQzpw3wPlqFCJhJuG6ph2CMX0/Ev/w+EM7/OaDurtFzP8ZAEjXRf8QThmYeL3IQxAztxCwkivgZMt0YVj5FQNuCEKjAOe1lMAWMEriNPm5ytT8r45EsriNDm/5MJNpBs+LUfyZf4SFTHJLhC5v9xhRmgAgUpftYk0MeRk/DfqDamker6WLrjXFQDCUYi4H1jPnle5kIF+xCo6WFhnHZAgRDEec8Xw9q3m2iB7tBe7ZdMQSLSoKn9zHTfzwN74Rg8A0M7tjJ/EGaTm/kEual/po2Xp+PX+qYBowISwDZlMRHKyrBtRQOmuoz27GdvHozH3ZGpX3aaRhzDqkHpKSfAe+FSGEPf5iUbR6S8EuuvBlWbzKETks3/IL2eDgK/IJ2D7W0PVGOI/MCvybLW7xuE0chydUwOKsgxSorFu4ZKQ4ubTkcdBmSVUJajoNZWifN5tbzUvJm2HBiDAJJgioW6XnD4wRWMQGtLyNRsDfvLvrEF0MBRgiHlE+DjZMwPmC8d7UJ5nUcY4x2ID28T9oYlHsDf9gNHCD5hVU0eqwf/eGY8r12xNhtHAVSXwYTfcHTw87gSM+JM9gEPsNj5fgef15Pdpyl+w5Q+ExZwOfarXSNvCB/UCQ4on0jcj636I/zaaqaOh4sNODwR6HgcAn5zYB4aPYOR38gIGR//e1vjwxM+J21acuHKSsGtun2socXLPw8P+VnQBQAA",
  NumberOfProducts: 435,
  Start: 0,
  Products: [
    {
      Price: {
        Value: 25,
        Currency: "$"
      },
      SoldOut: 0,
      Title: "Mr Men Mr Cool Personalised Mug",
      ProductCategory: {
        ProductCategoryId: 11,
        Name: "mugs"
      },
      PhotoUploadCount: 0,
      CardShopId: 39,
      DirectSmile: false,
      DefaultSizeId: 27,
      ProductId: 69600,
      MoonpigProductNo: "mmn002-mu",
      TradingFaces: 0,
      IsLandscape: 1,
      ShortDescription: null,
      Description: null,
      IsCustomisable: 1,
      IsMultipack: 0,
      SeoPath: "mr-men-mr-cool-personalised-mug",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/mmn002-mu/27",
        Method: "GET",
        Rel: "self",
        Title: "69600"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/mmn002-mu",
          Method: "GET",
          Rel: "self",
          Title: "69600"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 5,
        ReviewCount: 1
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 12.99,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "Superman Up and Away Personalised T-shirt",
      ProductCategory: {
        ProductCategoryId: 12,
        Name: "t-shirts"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 41,
      ProductId: 69672,
      MoonpigProductNo: "srm002-ts",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription: null,
      Description: null,
      IsCustomisable: 1,
      IsMultipack: 0,
      SeoPath: "superman-up-and-away-personalised-tshirt",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/srm002-ts/41",
        Method: "GET",
        Rel: "self",
        Title: "69672"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/srm002-ts",
          Method: "GET",
          Rel: "self",
          Title: "69672"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 5,
        ReviewCount: 1
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 3.29,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "Working As A Team Personalised Good Luck In Your New Job Card",
      ProductCategory: {
        ProductCategoryId: 1,
        Name: "greeting cards"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 1,
      ProductId: 72340,
      MoonpigProductNo: "lw035",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription: null,
      Description: null,
      IsCustomisable: 1,
      IsMultipack: 0,
      SeoPath: "working-as-a-team-personalised-good-luck-in-your-new-job-card",
      ProductCategoryGroupSeoPath: "personalised-cards/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/lw035/1",
        Method: "GET",
        Rel: "self",
        Title: "72340"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/lw035",
          Method: "GET",
          Rel: "self",
          Title: "72340"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 4.8,
        ReviewCount: 10
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 6.59,
        Currency: "$"
      },
      SoldOut: 0,
      Title: "Personalised News Clipping Leaving Card",
      ProductCategory: {
        ProductCategoryId: 1,
        Name: "greeting cards"
      },
      PhotoUploadCount: 0,
      CardShopId: 39,
      DirectSmile: false,
      DefaultSizeId: 1,
      ProductId: 68274,
      MoonpigProductNo: "ddd015",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription: null,
      Description: null,
      IsCustomisable: 1,
      IsMultipack: 0,
      SeoPath: "personalised-news-clipping-leaving-card",
      ProductCategoryGroupSeoPath: "personalised-cards/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/ddd015/1",
        Method: "GET",
        Rel: "self",
        Title: "68274"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/ddd015",
          Method: "GET",
          Rel: "self",
          Title: "68274"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 5,
        ReviewCount: 14
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 6.59,
        Currency: "$"
      },
      SoldOut: 0,
      Title: "Vintage Personalised Leaving Do Card",
      ProductCategory: {
        ProductCategoryId: 1,
        Name: "greeting cards"
      },
      PhotoUploadCount: 0,
      CardShopId: 39,
      DirectSmile: false,
      DefaultSizeId: 1,
      ProductId: 68275,
      MoonpigProductNo: "ddd016",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription: null,
      Description: null,
      IsCustomisable: 1,
      IsMultipack: 0,
      SeoPath: "vintage-personalised-leaving-do-card",
      ProductCategoryGroupSeoPath: "personalised-cards/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/ddd016/1",
        Method: "GET",
        Rel: "self",
        Title: "68275"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/ddd016",
          Method: "GET",
          Rel: "self",
          Title: "68275"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 4.9118,
        ReviewCount: 34
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 22,
        Currency: "£"
      },
      SoldOut: 0,
      Title:
        "Exclusive A Pony Called Steve Afternoon Tea Bath & Body Collection",
      ProductCategory: {
        ProductCategoryId: 23,
        Name: "beauty"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 85,
      ProductId: 78872,
      MoonpigProductNo: "beau309",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription:
        "tea lovers will adore this set of earl grey shower delights.",
      Description: null,
      IsCustomisable: 0,
      IsMultipack: 0,
      SeoPath: "a-pony-called-steve-afternoon-tea-gift-box",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/beau309/85",
        Method: "GET",
        Rel: "self",
        Title: "78872"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/beau309",
          Method: "GET",
          Rel: "self",
          Title: "78872"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 0,
        ReviewCount: 0
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 30,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "The Coffee Lovers Gift Box",
      ProductCategory: {
        ProductCategoryId: 24,
        Name: "gift boxes"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 90,
      ProductId: 83618,
      MoonpigProductNo: "box451",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription:
        "this coffee box is bursting at the beans with caffeinated goodies.",
      Description: null,
      IsCustomisable: 0,
      IsMultipack: 0,
      SeoPath: "the-coffe-lovers-box",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/box451/90",
        Method: "GET",
        Rel: "self",
        Title: "83618"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/box451",
          Method: "GET",
          Rel: "self",
          Title: "83618"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 4.8571,
        ReviewCount: 7
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 15,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "Morris & Co Refined Gentleman Bath & Body Travel Duo",
      ProductCategory: {
        ProductCategoryId: 23,
        Name: "beauty"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 85,
      ProductId: 93792,
      MoonpigProductNo: "beau567",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription:
        "treat a globe-trotting gentleman to this sophisticated hair and body wash duo.",
      Description: null,
      IsCustomisable: 0,
      IsMultipack: 0,
      SeoPath: "morris--co-refined-gentleman-bath--body-travel-duo",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/beau567/85",
        Method: "GET",
        Rel: "self",
        Title: "93792"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/beau567",
          Method: "GET",
          Rel: "self",
          Title: "93792"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: null,
        MaxReviewData: null,
        AverageStarReviewRating: null,
        ReviewCount: 0
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 25,
        Currency: "$"
      },
      SoldOut: 0,
      Title: "Like A Boss Personalised Mug",
      ProductCategory: {
        ProductCategoryId: 11,
        Name: "mugs"
      },
      PhotoUploadCount: 0,
      CardShopId: 39,
      DirectSmile: false,
      DefaultSizeId: 27,
      ProductId: 74792,
      MoonpigProductNo: "lday003-mu",
      TradingFaces: 0,
      IsLandscape: 1,
      ShortDescription: null,
      Description: null,
      IsCustomisable: 1,
      IsMultipack: 0,
      SeoPath: "like-a-boss-personalised-mug",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/lday003-mu/27",
        Method: "GET",
        Rel: "self",
        Title: "74792"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/lday003-mu",
          Method: "GET",
          Rel: "self",
          Title: "74792"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: null,
        MaxReviewData: null,
        AverageStarReviewRating: null,
        ReviewCount: 0
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 16,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "Jelly Belly Assortment",
      ProductCategory: {
        ProductCategoryId: 19,
        Name: "food gifts"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 88,
      ProductId: 76084,
      MoonpigProductNo: "swee561",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription:
        "so many flavours, so much taste. this gift box of jelly beans is a must.",
      Description: null,
      IsCustomisable: 0,
      IsMultipack: 0,
      SeoPath: "jelly-belly-assortment",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/swee561/88",
        Method: "GET",
        Rel: "self",
        Title: "76084"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/swee561",
          Method: "GET",
          Rel: "self",
          Title: "76084"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 4.7234,
        ReviewCount: 47
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 16,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "Afternoon Tea Letterbox Gift",
      ProductCategory: {
        ProductCategoryId: 33,
        Name: "letterbox gifts"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 118,
      ProductId: 86255,
      MoonpigProductNo: "lbxg001",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription:
        "don't be late for that very important date, instead send a afternoon tea treat.",
      Description: null,
      IsCustomisable: 0,
      IsMultipack: 0,
      SeoPath: "afternoon-tea-letterbox-gift",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/lbxg001/118",
        Method: "GET",
        Rel: "self",
        Title: "86255"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/lbxg001",
          Method: "GET",
          Rel: "self",
          Title: "86255"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 4.6977,
        ReviewCount: 43
      },
      AdditionalProductImages: []
    },
    {
      Price: {
        Value: 10,
        Currency: "£"
      },
      SoldOut: 0,
      Title: "Montezuma's Truffle Bar Collection",
      ProductCategory: {
        ProductCategoryId: 19,
        Name: "food gifts"
      },
      PhotoUploadCount: 0,
      CardShopId: 1,
      DirectSmile: false,
      DefaultSizeId: 78,
      ProductId: 93509,
      MoonpigProductNo: "choc766",
      TradingFaces: 0,
      IsLandscape: 0,
      ShortDescription:
        "a selection of truffle filled bars, the perfect collection box for a loved one.",
      Description: null,
      IsCustomisable: 0,
      IsMultipack: 0,
      SeoPath: "montezumas-truffle-bar-collection",
      ProductCategoryGroupSeoPath: "gifts/",
      ProductLink: {
        Href: "https://api-rest.moonpig.com/v2/products/choc766/78",
        Method: "GET",
        Rel: "self",
        Title: "93509"
      },
      ProductImage: {
        Link: {
          Href:
            "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/choc766",
          Method: "GET",
          Rel: "self",
          Title: "93509"
        },
        MimeType: "image/jpeg"
      },
      Reviews: {
        MinReviewData: 0,
        MaxReviewData: 0,
        AverageStarReviewRating: 5,
        ReviewCount: 1
      },
      AdditionalProductImages: []
    }
  ],
  Facets: null
};




// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
