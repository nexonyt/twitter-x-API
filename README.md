# Twitter/X API

![Alternatice](https://github.com/nexonyt/twitter-x-API/blob/main/header.png)

## Description

To use API, take from X Developer's site

Find in a file this line of code:


Do not forget to put your keys in code:
- `API KEY` - it's your API KEY from X

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

## Donation
[EN] If my code was useful, I will gladly accept a small donation in the form of a cup of coffee from you: https://buycoffee.to/nexonyt
