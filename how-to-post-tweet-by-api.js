const fetch = require("node-fetch");
const uuid = require('uuid');
const crypto = require('crypto');

async function API() {
    //AUTORIZATION API
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

    let encodedParameters = `oauth_consumer_key=${Auth_2.oauth_consumer_key}&oauth_nonce=${Auth_2.oauth_nonce}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=${Auth_2.oauth_timestamp}&oauth_token=${Auth_2.oauth_token}&oauth_version=1.0`;

    const method = 'POST';
    const base_url = 'https://api.twitter.com/2/tweets';
    const encodedUrl = encodeURIComponent(base_url);
    encodedParameters = encodeURIComponent(encodedParameters);
    const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`
    const signing_key = `${Auth_2.oauth_secret_key}&${Auth_2.oauth_token_secret}`
    const oauth_signature = crypto.createHmac("sha1", signing_key).update(signature_base_string).digest().toString('base64');

    //CALCULATED THE SIGNATURE FOR AUTH QUERY
    const encoded_oauth_signature = encodeURIComponent(oauth_signature);
    //console.log("Generated Signature: "+oauth_signature);
    const auth = `OAuth oauth_consumer_key="${Auth_2.oauth_consumer_key}",oauth_token="${Auth_2.oauth_token}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${Auth_2.oauth_timestamp}",oauth_nonce="${Auth_2.oauth_nonce}",oauth_version="1.0",oauth_signature="${encoded_oauth_signature}"`

    //CONTENT OF THE TWEET
    var content = "Your first tweet using API"

    const tweet = { "text": "Content of your tweet: " + content + "  ⏰" };
    const myJSON = JSON.stringify(tweet)

    //FETCH QUERY TO TWITTER-X
    fetch('https://api.twitter.com/2/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${auth}`
        },
        body: myJSON
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
}
API()
