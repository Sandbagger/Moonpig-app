const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const https = require('https');

const server = awsServerlessExpress.createServer(app);


exports.handler = (event, context, callback) => {

  https.get('https://search.moonpig.com/api/products?size=5&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
  const bodyResponse = {
      "SearchId": "H4sIAAAAAAAEAC2UiZHDMAwDWyL4SFT/jd3CuRnHcRw+IABK5yozuL8b52lK0+obitiXeTURL6KOQrpPdXUy+PTTKiOzFVVxIq50lCXXeasXGSR39He/wd2Vp2JO0IW+XYTJnwl6LRVT5Cn1UrMxmyoydb57jYYuG8B4B9hZT9kxN/pFUedGrvY665WYaygL+NTdaFAJiCBJg0r1JGW5U/a6OOCjGwhx15FDwmaRfqOkmTASBh/1EX1aDCXyKwnIrvAQgB1zRQzpw3wPlqFCJhJuG6ph2CMX0/Ev/w+EM7/OaDurtFzP8ZAEjXRf8QThmYeL3IQxAztxCwkivgZMt0YVj5FQNuCEKjAOe1lMAWMEriNPm5ytT8r45EsriNDm/5MJNpBs+LUfyZf4SFTHJLhC5v9xhRmgAgUpftYk0MeRk/DfqDamker6WLrjXFQDCUYi4H1jPnle5kIF+xCo6WFhnHZAgRDEec8Xw9q3m2iB7tBe7ZdMQSLSoKn9zHTfzwN74Rg8A0M7tjJ/EGaTm/kEual/po2Xp+PX+qYBowISwDZlMRHKyrBtRQOmuoz27GdvHozH3ZGpX3aaRhzDqkHpKSfAe+FSGEPf5iUbR6S8EuuvBlWbzKETks3/IL2eDgK/IJ2D7W0PVGOI/MCvybLW7xuE0chydUwOKsgxSorFu4ZKQ4ubTkcdBmSVUJajoNZWifN5tbzUvJm2HBiDAJJgioW6XnD4wRWMQGtLyNRsDfvLvrEF0MBRgiHlE+DjZMwPmC8d7UJ5nUcY4x2ID28T9oYlHsDf9gNHCD5hVU0eqwf/eGY8r12xNhtHAVSXwYTfcHTw87gSM+JM9gEPsNj5fgef15Pdpyl+w5Q+ExZwOfarXSNvCB/UCQ4on0jcj636I/zaaqaOh4sNODwR6HgcAn5zYB4aPYOR38gIGR//e1vjwxM+J21acuHKSsGtun2socXLPw8P+VnQBQAA",
      "NumberOfProducts": 435,
      "Start": 0,
      "Products": [
          {
              "Price": {
                  "Value": 4.49,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "First Day At The New Job Funny Personalised Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 57,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 7835,
              "MoonpigProductNo": "dt058",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "first-day-at-the-new-job-funny-personalised-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/dt058/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "7835"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/57/product/dt058",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "7835"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.625,
                  "ReviewCount": 8
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 6.59,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "First Day At The New Job Funny Personalised Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 39,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 7835,
              "MoonpigProductNo": "dt058",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "first-day-at-the-new-job-funny-personalised-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/dt058/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "7835"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/dt058",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "7835"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.625,
                  "ReviewCount": 8
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 3.29,
                  "Currency": "£"
              },
              "SoldOut": 0,
              "Title": "First Day At The New Job Funny Personalised Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 1,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 7835,
              "MoonpigProductNo": "dt058",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "first-day-at-the-new-job-funny-personalised-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/dt058/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "7835"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/dt058",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "7835"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.625,
                  "ReviewCount": 8
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 3.29,
                  "Currency": "£"
              },
              "SoldOut": 0,
              "Title": "Boss Turned His Back After Telling Her Off Funny Personalised Funny Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 1,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 14718,
              "MoonpigProductNo": "bb143",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "boss-turned-his-back-after-telling-her-off-funny-personalised-funny-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/bb143/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "14718"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/bb143",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "14718"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 5,
                  "ReviewCount": 13
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 6.59,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "Boss Turned His Back After Telling Her Off Funny Personalised Funny Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 39,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 14718,
              "MoonpigProductNo": "bb143",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "boss-turned-his-back-after-telling-her-off-funny-personalised-funny-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/bb143/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "14718"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/bb143",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "14718"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 5,
                  "ReviewCount": 13
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 4.49,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "Boss Turned His Back After Telling Her Off Funny Personalised Funny Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 57,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 14718,
              "MoonpigProductNo": "bb143",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "boss-turned-his-back-after-telling-her-off-funny-personalised-funny-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/bb143/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "14718"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/57/product/bb143",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "14718"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 5,
                  "ReviewCount": 13
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 4.49,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "Colourful Letters Good Luck In Your New Job Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 57,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 16018,
              "MoonpigProductNo": "bg034",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "colourful-letters-good-luck-in-your-new-job-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/bg034/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "16018"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/57/product/bg034",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "16018"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.9412,
                  "ReviewCount": 17
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 3.29,
                  "Currency": "£"
              },
              "SoldOut": 0,
              "Title": "Colourful Letters Good Luck In Your New Job Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 1,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 16018,
              "MoonpigProductNo": "bg034",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "colourful-letters-good-luck-in-your-new-job-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/bg034/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "16018"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/bg034",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "16018"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.9412,
                  "ReviewCount": 17
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 3.29,
                  "Currency": "£"
              },
              "SoldOut": 0,
              "Title": "Champagne Bottle Personalised Congratulations Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 1,
              "DirectSmile": true,
              "DefaultSizeId": 1,
              "ProductId": 17715,
              "MoonpigProductNo": "ll037",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "champagne-bottle-personalised-congratulations-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/ll037/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "17715"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/1/product/ll037",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "17715"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.7674,
                  "ReviewCount": 43
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 4.49,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "Surviving A Day At The Office Funny Personalised Greetings Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 39,
              "DirectSmile": false,
              "DefaultSizeId": 13,
              "ProductId": 16166,
              "MoonpigProductNo": "hp122",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "surviving-a-day-at-the-office-funny-personalised-greetings-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/hp122/13",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "16166"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/hp122",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "16166"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 5,
                  "ReviewCount": 5
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 6.59,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "Colourful Letters Good Luck In Your New Job Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 39,
              "DirectSmile": false,
              "DefaultSizeId": 1,
              "ProductId": 16018,
              "MoonpigProductNo": "bg034",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "colourful-letters-good-luck-in-your-new-job-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/bg034/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "16018"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/bg034",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "16018"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.9412,
                  "ReviewCount": 17
              },
              "AdditionalProductImages": []
          },
          {
              "Price": {
                  "Value": 6.59,
                  "Currency": "$"
              },
              "SoldOut": 0,
              "Title": "Champagne Bottle Personalised Congratulations Card",
              "ProductCategory": {
                  "ProductCategoryId": 1,
                  "Name": "greeting cards"
              },
              "PhotoUploadCount": 0,
              "CardShopId": 39,
              "DirectSmile": true,
              "DefaultSizeId": 1,
              "ProductId": 17715,
              "MoonpigProductNo": "ll037",
              "TradingFaces": 0,
              "IsLandscape": 0,
              "ShortDescription": null,
              "Description": null,
              "IsCustomisable": 1,
              "IsMultipack": 0,
              "SeoPath": "champagne-bottle-personalised-congratulations-card",
              "ProductCategoryGroupSeoPath": "personalised-cards/",
              "ProductLink": {
                  "Href": "https://api-rest.moonpig.com/v2/products/ll037/1",
                  "Method": "GET",
                  "Rel": "self",
                  "Title": "17715"
              },
              "ProductImage": {
                  "Link": {
                      "Href": "https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/39/product/ll037",
                      "Method": "GET",
                      "Rel": "self",
                      "Title": "17715"
                  },
                  "MimeType": "image/jpeg"
              },
              "Reviews": {
                  "MinReviewData": 0,
                  "MaxReviewData": 0,
                  "AverageStarReviewRating": 4.7674,
                  "ReviewCount": 43
              },
              "AdditionalProductImages": []
          }
      ],
      "Facets": null
  }
  
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
       var response = {
          statusCode: 200,
          headers: {
            "X-Requested-With": '*',
          "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
          "Access-Control-Allow-Origin": '*',
          "Access-Control-Allow-Methods": 'POST,GET,OPTIONS'
          },
          body: JSON.stringify(bodyResponse)
      };
      try {
        console.log(response);
        return callback(null, response);
      } catch (e) {
        console.error('error: ' + e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
  
// exports.handler = (event, context) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
awsServerlessExpress.proxy(server, event, context);
//};

  };



