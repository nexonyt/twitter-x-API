# Twitter/X API

![Alternatice](https://github.com/nexonyt/twitter-x-API/blob/main/header.png)

## Description

To use API, take from X Developer's site: 

## Requirements to use the code
Make sure that node packages are installed in the folder where the main file is located. The packages you will need to run the file are:
- `npm install node-fetch`
- `npm install uuid`
- `npm install crypto`

## How do I get the keys needed for integration?
In order to connect your integration with the X API, you must first have an account on X and then log in to the development panel. [Link here.](https://developer.twitter.com/en/portal/dashboard)
Then find the section called **Consumer Keys** and **Authentication Tokens**. There you will find all 4 keys needed in the code. Do not give it to anyone, it is confidential data. You'll need:
- `API Key` 
- `API Secret Key` 
- `API Access Token` 
- `API Access Token Secret`


## How can I use it?
Just download file called `how-to-post-tweet-by-api.js`. Complete your keys downloaded from the X development panel in the designated field in the code. Do not change anything else in the authorization section

### Code snippet to change
```
const Auth_2 = {  
        oauth_consumer_key: "API KEY",
        oauth_token: "API ACCESS TOKEN",
        oauth_secret_key: "API SECRET KEY",
        oauth_token_secret: "API ACCESS TOKEN SECRET",
        oauth_timestamp: Math.floor(Date.now() / 1000),
        oauth_nonce: uuid.v1()
}
```

Then find the Content  Of The Tweet section. In this section, in the content variable, you can complete the content of your sent tweet
```
var content = "Your first tweet using API"
```
Then the content of your tweet will be sent via the API using the fetch method.


Now open the terminal and type this command:
`node .\how-to-post-tweet-by-api.js`

That's all!

## Support
If you need any help implementing integration, write me an e-mail: kontakt@nexonstudio.pl

## Donation
If my code was useful, I will gladly accept a small donation in the form of a cup of coffee from you: https://buycoffee.to/nexonyt
