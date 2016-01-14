/*-------------------------------------------------------------------------------------------------------------
//
//                                            BOT CONFIGS
//
//-----------------------------------------------------------------------------------------------------------*/

var protobot = require('proto-bot');
var demobot = new protobot({
  botName: 'demo-bot',
  debug: true
});

demobot.rollCallResponse = function () {
  return demobot.botName + ' reporting for duty';
}

/*-------------------------------------------------------------------------------------------------------------
//
//                                      Bot Logic Part 1: reply()
//                                   -- YOUR BOT'S FIRST MESSAGE --
//
//                                            Instructions:
//
//  1: Write your bot action and give it a name.
//
//     TIP: The action name must be a single word without spaces or punctuation
//     TIP: Use descriptive, active names like 'sayBotName'
//
//  || function sayBotName(bot, incomingMessage) {
//  ||   bot.reply(incomingMessage, 'my name is inigo montoya');
//  || }
//
//  2: Tell your bot what to listen for.
//
//          (tagged or untagged)               (what to listen for)                 (your action name)
//                   |                                 |                                   |
//                   v                                 v                                   v
//  || demobot.addTaggedTrigger(['trigger words', 'in quotes', 'separated by commas'], behaviorName);
//
//  ex: demobot.addTaggedTrigger(['what is your name'], sayBotName);
//
//  3: You're first bot is officially ALIVE!
//
//-----------------------------------------------------------------------------------------------------------*/

function sayBotName(bot, incomingMessage) {
  bot.reply(incomingMessage, 'my name is inigo montoya');
}
demobot.addTaggedTrigger(['what is your name'], sayBotName);

/*-------------------------------------------------------------------------------------------------------------
//
//                               Bot Logic Part 2: startConversation() and say()
//                       -- WRITE YOUR BOT'S MULTI-LINE RESPONSES WITH CONVERSATIONS --
//
//                                             Instructions:
//
//  1: Write your conversation action and give it a name.
//
//     TIP: Multi-line statements are great for simulating real conversations
//     TIP: Try using multi-line statements to strengthen your bot's personality
//     TIP: Use descriptive, active names like 'sayBotIntroduction'
//     TIP: If you use quotation marks in your bot's conversations, escape them with a \
//
//  || var sayBotIntroduction = function(bot, incomingMessage) {
//  ||   bot.startConversation(incomingMessage, function(err,convo) {
//  ||     convo.say('Howdy Partner!');
//  ||     convo.say('You\'re my favorite deputy!');
//  ||   });
//  || }
//
//  2: Tell your bot what to listen for.
//
//          (tagged or untagged)               (what to listen for)                 (your action name)
//                   |                                 |                                   |
//                   v                                 v                                   v
//  || demobot.addTaggedTrigger(['trigger words', 'in quotes', 'separated by commas'], behaviorName);
//
//  ex: demobot.addTaggedTrigger(['hi woody'], taggedMessage, sayBotIntroduction);
//
//-----------------------------------------------------------------------------------------------------------*/

var sayBotIntroduction = function(bot, incomingMessage) {
  bot.startConversation(incomingMessage, function(err,convo) {
    convo.say('Howdy Partner!');
    convo.say('You\'re my favorite deputy!');

  });
}
demobot.addTaggedTrigger(['hi woody', 'hello woody'], sayBotIntroduction);

/*-------------------------------------------------------------------------------------------------------------
//
//                           Bot Logic Part 3: startConversation() and ask() pt. 1
//              -- DEVELOP RICH INTERACTIONS BY WRITING QUESTIONS AND WAITING FOR RESPONSES --
//
//                                           Instructions:
//
//  1: Write your first question and give it a name.
//
//     TIP: Your first question must have the startConversation() call
//     TIP: Chain your questions together to create deep interactions
//     TIP: In the first question, remember to use `bot` and `incomingMessage` as your action parameters
//     TIP: Write each question as a separate function to keep your bot easy to read and maintain
//     TIP: Put your .say() response inside the question to keep your bot easy to read and maintain
//
//  || askAboutFavoriteBeatle = function(bot, incomingMessage) {
//  ||   bot.startConversation(incomingMessage, function(err,convo) {
//  ||    convo.ask("Who is your favorite Beatle?", function(response, convo) {
//  ||      convo.say(response.text + "?! He\'s ok I guess.");
//  ||      askAboutFavoriteBeatlesSongs(response, convo);
//  ||      convo.next();
//  ||    });
//  ||   });
//  || }
//
//  2: Write any following questions, chaining them together.
//
//     TIP: After the first question you do not need to use startConversation()
//     TIP: After the first question, remember to use `response` and `convo` as your action parameters
//     TIP: Write each question as a separate function to keep your bot easy to read and maintain
//     TIP: Questions do not need a say() and an ask(). Maybe you're bot only has another question!
//
//  || askAboutFavoriteBeatlesSongs = function(response, convo) {
//  ||    convo.ask("And what is your favorite Beatles song?", function(response, convo) {
//  ||      endBeatlesConversation(response, convo);
//  ||      convo.next();
//  ||   });
//  || }
//
//  3: End your conversation with an action that does not use .ask()
//
//  || endBeatlesConversation = function(response, convo) {
//  ||    convo.say("I guess I prefer the Rolling Stones.");
//  || }
//
//  4: Tell your bot what to listen for.
//
//
//          (tagged or untagged)               (what to listen for)                 (your action name)
//                   |                                 |                                   |
//                   v                                 v                                   v
//  || demobot.addTaggedTrigger(['trigger words', 'in quotes', 'separated by commas'], behaviorName);
//
//  ex: demobot.addTaggedTrigger(['lets talk about the beatles'], untaggedMessage, askAboutFavoriteBeatle);
//
//-----------------------------------------------------------------------------------------------------------*/

askAboutFavoriteBeatle = function(bot, incomingMessage) {
  bot.startConversation(incomingMessage, function(err,convo) {
    convo.ask("Who is your favorite Beatle?", function(response, convo) {
      convo.say(response.text + "?! He\'s ok I guess.");
      askAboutFavoriteBeatlesSongs(response, convo);
      convo.next();
    });
  });
}

askAboutFavoriteBeatlesSongs = function(response, convo) {
  convo.ask("And what is your favorite Beatles song?", function(response, convo) {
    endBeatlesConversation(response, convo);
    convo.next();
  });
}

endBeatlesConversation = function(response, convo) {
  convo.say("Meh.");
  convo.say("I guess I'm a Rolling Stones guy.");
  convo.next();
}

demobot.addTaggedTrigger(['lets talk about the beatles'], askAboutFavoriteBeatle);

/*-------------------------------------------------------------------------------------------------------------
//
//                          Bot Logic Part 4: startConversation() and ask() pt. 2
//                          -- IMPROVE YOUR CONVERSATIONS WITH BRANCHING PATHS --
//
//                                            Instructions:
//
//  1: Write your question, leave your action OPEN.
//
//  || function askAboutLincolnAndGandhi(response, convo) {
//  ||   bot.startConversation(incomingMessage, function(err,convo) {
//  ||    convo.ask("Who would win in a fight: Lincoln or Gandhi?", [
//  ||
//  || // question continues in step 2...
//
//  2: Write the responses you will accept, and what you will do when the response is received.
//
//     TIP: `pattern` can be one of three choices: a single word, a pattern to match, or an utterance
//     TIP: An utterance is a predefined set of responses. Botkit provides `yes` and `no`.
//     TIP: A single word pattern looks like: `pattern: 'answer'`
//     TIP: A matching pattern looks like: `pattern: /first|second/ig` which means "first or second, ignore case and look everywhere"
//     TIP: A matching pattern is called a regular expression, use a site like http://regexr.com/ to learn more and build smarter patterns.
//     TIP: An utterance pattern looks like: `pattern: demobot.bot.utterances.yes` which means "anything that sounds like yes, ex: yeah, y, yes"
//
//  || // continued from step 1...
//  ||
//  ||       {
//  ||         pattern: /lincoln/ig,
//  ||         callback: function(response,convo) {
//  ||           convo.say('How could you say that? You animal.');
//  ||           convo.next();
//  ||         }
//  ||       },
//  ||
//  || // question continues in step 3...
//
//  3: End your question with a catchall response, and close the action.
//
//     TIP: Your bot can repeat the question to prompt the user for an expected response
//
//  || // continued from step 2...
//  ||
//  ||       {
//  ||         default: true, // Use this callback if the patterns are not matched
//  ||         callback: function(response,convo) {
//  ||           convo.say("But seriously.");
//  ||           convo.repeat();
//  ||           convo.next();
//  ||         }
//  ||       }
//  ||     ]);
//  ||   });
//  || }
//  ||
//
//  4: Tell your bot what to listen for.
//
//          (tagged or untagged)               (what to listen for)                 (your action name)
//                   |                                 |                                   |
//                   v                                 v                                   v
//  || demobot.addTaggedTrigger(['trigger words', 'in quotes', 'separated by commas'], behaviorName);
//
//  ex: demobot.addTaggedTrigger(['ask me an interesting question'], taggedMessage, askAboutLincolnAndGandhi);
//
//-----------------------------------------------------------------------------------------------------------*/

function askAboutLincolnAndGandhi(bot, incomingMessage) {
  bot.startConversation(incomingMessage, function(err, convo) {
  convo.ask('Who would win in a fight: Lincoln or Gandhi?', [
      {
        pattern: /lincoln/ig,
        callback: function(response,convo) {
          convo.say('How could you say that? You animal.');
          convo.next();
        }
      },
      {
        pattern: /gandhi/ig,
        callback: function(response,convo) {
          convo.say('We can agree to disagree.');
          convo.ask('But Lincoln had a cooler hat, right?', [
            {
              pattern: demobot.bot.utterances.yes,
              callback: function(response,convo) {
                convo.say('And his beard was LEGENDARY.');
                convo.next();
              }
            },
            {
              pattern: demobot.bot.utterances.no,
              callback: function(response,convo) {
                convo.say('Gandhi didn\'t even have a hat. Clearly you\'re not a history buff.');
                convo.next();
              }
            }
          ]);
          convo.next();
        }
      },
      {
        default: true, // IF THE PATTERNS ARE NOT MATCHED
        callback: function(response,convo) {
          convo.say('But seriously.');
          convo.repeat();
          convo.next();
        }
      }
    ]);
  });
}
demobot.addTaggedTrigger(['ask me an interesting question'], askAboutLincolnAndGandhi);
