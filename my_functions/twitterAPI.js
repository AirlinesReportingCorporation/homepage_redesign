const fetch = require("node-fetch");
const Twit = require("twit");
var T = new Twit({
  consumer_key: "onFsZbUz23wNU21wDEqGcHbf0",
  consumer_secret: "D6f8gaMfemGPfM6u73lLOZUooCYZwLzM8XLdnSXjlOse5p9dTs",
  access_token: "224845357-zhS1TiAlQo6JbQmbGOC9QeZzpQsB1asc48XVmdAt",
  access_token_secret: "Y9caJI6a8GOzmYmcjuKFFE2B4H9J7qFTZ3AdSwO1U2yZe",
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
});

exports.handler = async (event, context, callback) => {
  return T.get(
    "statuses/user_timeline",
    { screen_name: "ARCtalk", count: 20, tweet_mode: "extended" },
    function(err, data, response) {
      if (err) {
        console.log(err.stack);
      }

      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept"
        },
        body: JSON.stringify(data)
      });
    }
  );
};