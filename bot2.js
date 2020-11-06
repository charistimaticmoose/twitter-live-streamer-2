//@altf4hashbot - twit / node.js
//authour - Manu Sunil @manushyaaa

var Twit = require('twit');
var sleep = require('system-sleep');
var config = require('./config.js');
var bot = new Twit(config);

var phrase = '#100DaysOfCode';
var tweet_count = 0 ;
var delay_time = 50000 ; //time in seconds 

console.log("bot started")

var stream = bot.stream('statuses/filter', { track: phrase })
stream.on('tweet', gotTweet);
 
function gotTweet(tweet) {
 
 
 	bot.post('statuses/retweet', { id: tweet.id_str }, retweeted);
   	bot.post('favorites/create', { id: tweet.id_str }, retweeted);
    function retweeted(err, data, response) {
      if (err) {
        console.log("Error: " + err.message);
	  } 
      else {
        console.log('Retweeted: ' + tweet.id + " " + tweet_count);
    	tweet_count = tweet_count+1;
      }
	}
	console.log("sleeping for "+ delay_time/1000 + "seconds ")
	sleep(delay_time);	 
}
