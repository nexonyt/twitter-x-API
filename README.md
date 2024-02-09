# Twitter/X API

![Alternatice](https://github.com/nexonyt/twitter-x-API/blob/main/header.png)

## Description

To use API, take from X Developer's site: 


## How do I get the keys needed for integration?
In order to connect your integration with the X API, you must first have an account on X and then log in to the development panel. [Link here.](https://developer.twitter.com/en/portal/dashboard)
Then find the section called **Consumer Keys** and **Authentication Tokens**. There you will find all 4 keys needed in the code. Do not give it to anyone, it is confidential data. You'll need:
- `API KEY` 
- `API SECRET KEY` 
- `API ACCESS TOKEN` 
- `API ACCESS TOKEN SECRET`


## How can I use it?


Do not forget to put your keys in code:


## Code snippet to change
```
const Auth_2 = {
        oauth_consumer_key: "API KEY",
        oauth_token: "API ACCESS TOKEN",
        oauth_secret_key: "API SECRET KEY",
        oauth_token_secret: "API ACCESS TOKEN SECRET",
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: Math.floor(Date.now() / 1000),
        oauth_nonce: uuid.v1(),
        oauth_version: "1.0",
        oauth_signature: "obKeVKBvjoOaV6kGPv76zM3odDg%3D"
}
```

## Support
If you need any help implementing integration, write me an e-mail: kontakt@nexonstudio.pl

## Donation
If my code was useful, I will gladly accept a small donation in the form of a cup of coffee from you: https://buycoffee.to/nexonyt
