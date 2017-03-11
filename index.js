var http = require('http');
var protobot = require('proto-bot');

var demobot = new protobot({
  debug: false,
  log: true
});

/*-------------------------------------------------------------------------------------------------------------
//
//                                         -- HELLO WORLD --
//
//                                           Instructions:
//
//  1: Name your bot and give it a new roll call message
//
//-----------------------------------------------------------------------------------------------------------*/

demobot.botName = 'demo-bot'; // ENTER YOUR BOT NAME HERE

demobot.rollCallResponse = function () {
  return demobot.botName + ' reporting for duty'; // WRITE YOUR OWN RESPONSE TO ROLL CALL HERE
}

/*-------------------------------------------------------------------------------------------------------------
//
//                                   -- YOUR BOT'S FIRST MESSAGE --
//
//                                            Instructions:
//
//  1: Tell your bot what to listen for, followed by what to reply with.
//
//  || demobot
//  ||   .listenFor( "well hello demo-bot" )
//  ||   .andReplyWith( "well hello to you too human" );
//
//  2: Your first bot is officially ALIVE!
//
//-----------------------------------------------------------------------------------------------------------*/


demobot
  .listenFor( "well hello demo-bot" )
  .andReplyWith( "What's good human?" );

/*-------------------------------------------------------------------------------------------------------------
//
//                               Bot Logic Part 2: hears(), says(), and end()
//                                      -- INTRO TO CONVERSATIONS --
//
//                                             Instructions:
//
//  1: You can use hears(), says(), and end() to write the same conversation
//
//  || demobot
//  ||   .hears(["well hello demo-bot"])
//  ||     .says("what's good human?").end()
//  ||   .end()
//
//    TIP: Remember to close your opening hears() statement with the keyword end()
//    TIP: Remember to close each chain of says() statements with the keyword end()
//    TIP: Put your trigger word in an array aka ["trigger"] to ignore capitalization
//
//  2: With hears(), says(), and end() you can also chain responses together!
//
//  || demobot
//  ||   .hears(["im talking to you"])
//  ||     .says("are you talkin to me?")
//  ||     .says("are you talkin to me?!")
//  ||     .says("cause I don't see anybody else here")
//  ||     .says("are you talkin to me?").end()
//  ||   .end()
//
//-----------------------------------------------------------------------------------------------------------*/

demobot
  .hears(["im talking to you"])
    .says("Are you talkin to me?")
    .says("Are you talkin to me?!")
    .says("'Cause I don't see anybody else here")
    .says("Are you talkin to me?").end() // ends says() chain
  .end() // ends conversation

/*-------------------------------------------------------------------------------------------------------------
//
//                                       Bot Logic Part 3: asks()
//                                     -- BRANCHING CONVERSATIONS --
//
//                                             Instructions:
//
//  1: Use asks() to make your robot ask a question and wait for a response.
//     Your robot will listen for any responses you write in hears().
//
//  || demobot
//  ||   .hears(["ice cream","dessert"])
//  ||     .says("did someone say ice cream? let's talk.")
//  ||     .asks("chocolate or vanilla?")
//  ||       .hears(["chocolate"])
//  ||         .says("my favorite!")
//  ||         .says("your the best!!!").end()
//  ||       .hears(["vanilla"])
//  ||         .says("wrong!").end()
//  ||     .end()
//  ||   .end();
//
//    TIP: Remember to close each asks() statement with the keyword end()
//    TIP: Put multiple trigger words in your hears(), surrounded by brackets,
//            to listen for all of them aka hears(["trigger one", "trigger two"])
//
//-----------------------------------------------------------------------------------------------------------*/

demobot
  .hears(["ice cream", "dessert"])
    .says("Did someone say ice cream? Let's talk.")
    .asks("*chocolate* or *vanilla*?")
      .hears(["chocolate"])
        .says("My favorite!")
        .says("You're the best!!!").end() // ends says() chain
      .hears(["vanilla"])
        .says("Wrong!").end() // ends says() chain
    .end() // ends asks()
  .end(); // ends conversation

/*-------------------------------------------------------------------------------------------------------------
//
//                                     Bot Logic Part 4: defaultsTo()
//                                       -- REPEATING QUESTIONS --
//
//                                             Instructions:
//
//  1: Close asks() statements with a defaultsTo() to repeat the question until you
//     get the answers you want!
//
//  || demobot
//  ||   .hears(["interrogate"])
//  ||     .asks("TELL ME WHAT I WANT TO KNOW: Beyonce or Bieber?")
//  ||       .hears(["beyonce"])
//  ||         .says("All the single robots! All the single robots!").end()
//  ||       .hears(["beiber"])
//  ||         .says("There's a belieber inside every one of us.")
//  ||         .says("...")
//  ||         .says("Every.")
//  ||         .says("One.")
//  ||         .says("Of.")
//  ||         .says("Us.").end()
//  ||     .defaultsTo("I seriously will not stop asking...")
//  ||   .end();
//
//    TIP: Use the defaultsTo() keyword instead of end() to make your robot repeat the last question
//
//-----------------------------------------------------------------------------------------------------------*/

demobot
  .hears(["interrogate"])
    .asks("TELL ME WHAT I WANT TO KNOW: *beyonce* or *bieber*?")
      .hears(["beyonce"])
        .says("All the single robots! All the single robots!").end() // ends says() chain
      .hears(["beiber"])
        .says("There's a belieber inside every one of us.")
        .says("...")
        .says("Every.")
        .says("One.")
        .says("Of.")
        .says("Us.").end() // ends says() chain
    .defaultsTo("I seriously will not stop asking...") // defaultsTo() repeats last question and ends the asks()
  .end(); // ends conversation

/*-------------------------------------------------------------------------------------------------------------
//
//                                 Bot Logic Part 5: Scary Complicated Stuff
//                                     -- JUST KIDDING THATS THE END! --
//
//                         You have all the tools to build your own conversation bot!
//                          See the examples below for more branching conversations,
//                                 responding with animated gifs, and more!
//
//-----------------------------------------------------------------------------------------------------------*/

/*
// Write branching conversations...
*/
demobot
  .hears(["animal"])
    .says("I am a total animal FREAK!")
    .asks("Have you ever been to the zoo? *yes* or *no*")
      .hears(["yes"])
        .asks("OMG did you like it? yes or no")
          .hears(["yes"])
            .says("Its like a funny panda prison!").end()
          .hears(["no"])
            .says("Every party has a pooper.").end()
        .defaultsTo("Sorry, I'm only listening for a yes or no")
      .hears(["no"])
        .says("You have to check it out.")
        .asks("When you go, what will you see first? *lions* or *monkeys*?")
          .hears(["lions"])
            .says("Roar!").end()
          .hears(["monkeys"])
            .says("Monkeys are so funky!").end()
        .defaultsTo("I am only listening for lions or monkeys. All other words are 100% jibber-jabber")
    .defaultsTo("Sorry, I'm only listening for a yes or no")
  .end()

/*
// Respond with an animated gif...
*/
demobot
  .hears(["dance party"])
    .says("Lets dance!")
    .says("http://33.media.tumblr.com/d59a187d8135623b8f67b0746391711f/tumblr_inline_nsqhezEtjv1t8dzn4_500.gif").end()
  .end()

/*
// Use regular expressions instead of strings for hears()...
// Here, Hillary and Bernie are case insensitive.
// Go to regexr.com for more information!
// TIP: This does not work with the first hears() of a conversation
*/
demobot
  .hears(["politics"])
    .asks("Who would win in a tickle fight: *Hillary* or *Bernie*?")
      .hears(/hillary/i)
        .says("Don't tell Bill!")
        .says("hehehe").end()
      .hears(/bernie/i)
        .says("Totally agree. He gives tickles liberally...")
        .says("... ;)").end()
    .defaultsTo("I demand an answer!")
  .end()

/*
// /./i is a regular expression that matches ANY input
// Use a hears(/./i) to capture all responses and end the conversation with a response
// You can use this as a catch-all like a defaultsTo(), but it won't ask the question again
// Remember to use an ends() to close your asks statement!
*/
demobot
  .hears(["fight club"])
    .asks("The first rule of Fight Club is we don't talk about Fight Club.")
      .hears(/./i)
        .says("...").end()
    .end()
  .end()

/*
// Improve your branching conversations...
// Think of a pipe | in a regular expression like "or"...
// ...so /sausage|pepperoni/i means: the word 'sausage' OR the word 'pepperoni'
*/
demobot
  .hears(["pizza"])
    .asks("What is your favorite pizza topping?")
      .hears(/sausage|pepperoni/i)
        .says("Mmm...I dream of a day when robots can eat pizza!").end()
      .hears(/mushroom|tomato|pepper|spinach|artichoke|olive|onion|veggie/i)
        .asks("Veggies! Deep dish or thin crust?!")
          .hears(/deep/i)
            .says("Deep dish?! Does not compute.").end()
          .hears(/thin/i)
            .says("Oh yeah, I could sink into a floppy slice of thin crust.")
            .says("http://media3.giphy.com/media/sTUWqCKtxd01W/giphy.gif").end()
        .defaultsTo("Wait...what were we talking about?")
      .hears(/./i)
        .says("Ugh, I can't even imagine!").end()
    .end()
  .end()



demobot
  .hears('weather')
    .says(function(message) {
      var city_name = 'Austin';

      return http.get({
        host: 'api.openweathermap.org',
        path: `/data/2.5/weather?q=${city_name}&appid=${process.env.WEATHER_API}`
      }, function(response) {
        var body = '';
        response.on('data', function(d) { body += d; });
        response.on('end', function() {
          var parsed = JSON.parse(body);
          console.log(parsed.weather[0].description)
          return parsed.weather[0].description;
        });
      });

    }).end()
  .end();
