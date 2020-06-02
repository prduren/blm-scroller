var Twit = require("twit");

const {
  REACT_APP_CONSUMER_KEY: consumer_key,
  REACT_APP_CONSUMER_SECRET: consumer_secret,
  REACT_APP_ACCESS_TOKEN: access_token,
  REACT_APP_ACCESS_TOKEN_SECRET: access_token_secret,
} = process.env;

console.log(
  "consumer_key: ",
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
);

var T = new Twit({
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
