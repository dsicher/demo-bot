/*-------------------------------------------------------------------
//
//                      Proto-bot Boilerplate
//                        -- DO NOT EDIT --
//
//-----------------------------------------------------------------*/

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var botListener = Botkit.slackbot({
    debug: true,
});

var bot = botListener.spawn({
    token: process.env.token
}).startRTM();

// botListener.setupWebserver(process.env.PORT,function(err,express_webserver) {
//   botListener.createWebhookEndpoints(express_webserver);
// });

var taggedMessage = 'direct_message,direct_mention,mention';
var untaggedMessage = 'direct_message,direct_mention,mention,ambient';

/*-------------------------------------------------------------------
//
//                     Local Storage Defaults
//             -- PUT ANY LOCAL STORAGE OPTIONS HERE --
//
//-----------------------------------------------------------------*/

var defaultUser = function(id) {
return {
    id: id,
    timerIsActive: false,
    timerStartTime: 0,
    timerStopTime: 0
  }
};

/*-------------------------------------------------------------------------------------------------------------
//
//                                               Bot Logic Part 1: reply()
//                                     -- WRITE YOUR BOT'S SIMPLE RESPONSES WITH REPLAY --
//
//                                                      Instructions:
//
//  1: Write your bot action and give it a name.
//
//     TIP: The action name must be a single word without spaces or punctuation
//     TIP: Use descriptive, active names like 'sayBotName'
//
//  || function sayBotName(bot, incomingMessage) {
//  ||   bot.reply(incomingMessage, 'my name is protobot');
//  || }
//
//  2: Tell your bot what to listen for.
//
//                                     (what to listen for)                (tagged or untagged) (your action name)
//                                             |                                    |                  |
//                                             v                                    v                  v
//  || botListener.hears(['trigger words', 'in quotes', 'separated by commas'], untaggedMessage, behaviorName);
//
//  ex: botListener.hears(['what is your name'], taggedMessage, sayBotName);
//
//-----------------------------------------------------------------------------------------------------------*/

function reportForDuty(bot, incomingMessage) {
  bot.reply(incomingMessage, '*tick* *tock* *tick* *tock*');
}
botListener.hears(['roll call','role call'], untaggedMessage, reportForDuty);

function sayCurrentTime(bot, incomingMessage) {
  bot.reply(incomingMessage, 'ding it is ' + (((new Date().getUTCHours()-9)%12)+1) + ' oclock');
}
botListener.hears(['what time is it'], untaggedMessage, sayCurrentTime);

var happyHours = ['Anchorage', 'Los Angeles', 'Phoenix', 'Winnipeg', 'Havana', 'Halifax', 'Buenos Aires', 'Sao Paulo', 'Rio de Janeiro', 'Reykjavik', 'Algiers', 'Cairo', 'Minsk', 'Dubai', 'Islamabad', 'Dhaka', 'Bangkok', 'Beijing', 'Tokyo', 'Brisbane', 'Melbourne', 'Anadyr', 'Auckland', 'Kiritimati']
function sayCurrentHappyHour(bot, incomingMessage) {
  bot.reply(incomingMessage, 'its always happy hour somewhere! right now its happy hour in: ' + happyHours[(new Date().getUTCHours()-8)%24]);
}
botListener.hears(['drink', 'thirsty', 'happy'], untaggedMessage, sayCurrentHappyHour);

function startTimer(bot, incomingMessage) {
    botListener.storage.users.get(incomingMessage.user,function(err, user) {
        if (!user) {
            user = defaultUser(incomingMessage.user);
        }
        if (user.timerIsActive===false) {
          user.timerIsActive = true;
          user.timerStartTime = new Date();
          botListener.storage.users.save(user,function(err, id) {
            bot.reply(incomingMessage,'Timer started.');
          });
        } else {
          bot.reply(incomingMessage, 'You already have a timer running.');
        }
    });
}
botListener.hears(['start timer'],taggedMessage, startTimer);

function sayCurrentTimerTime(bot, incomingMessage) {
    botListener.storage.users.get(incomingMessage.user,function(err, user) {
        if (!user) {
            user = defaultUser(incomingMessage.user);
        }
        if (user.timerIsActive===true) {
          bot.reply(incomingMessage,'Current timer has been running for ' + (new Date() - user.timerStartTime).toString() + 'ms');
        } else {
          bot.reply(incomingMessage, 'You do not have a timer running.');
        }
    });
}
botListener.hears(['current timer'], taggedMessage, sayCurrentTimerTime);

function stopCurrentTimer(bot, incomingMessage) {
    botListener.storage.users.get(incomingMessage.user,function(err, user) {
        if (!user) {
            user = defaultUser(incomingMessage.user);
        }
        if (user.timerIsActive===true) {
          user.timerIsActive = false;
          user.timerStopTime = new Date();
          botListener.storage.users.save(user,function(err, id) {
            bot.reply(incomingMessage,'Timer was stopped after ' + (user.timerStopTime - user.timerStartTime).toString() + 'ms');
          });
        } else {
          bot.reply(incomingMessage, 'You do not have a timer running.');
        }
    });
}
botListener.hears(['stop timer'], taggedMessage, stopCurrentTimer);

var sayPreviousTimerTime = function(bot, incomingMessage) {
    botListener.storage.users.get(incomingMessage.user,function(err, user) {
        if (!user) {
            user = defaultUser(incomingMessage.user);
        }
        if (user.timerIsActive===false && user.timerStartTime && user.timerStopTime) {
          bot.reply(incomingMessage,'Your last timer ran for ' + (user.timerStopTime - user.timerStartTime).toString() + 'ms');
        } else if(!user.timerStartTime) {
          bot.reply(incomingMessage, 'You have never run a timer.');
        } else {
          bot.reply(incomingMessage, 'You have a timer running currently.');
        }
    });
}
botListener.hears(['previous timer'], taggedMessage, sayPreviousTimerTime);

/*-------------------------------------------------------------------------------------------------------------
//
//                                        Bot Logic Part 2: startConversation() and say()
//                                -- WRITE YOUR BOT'S MULTI-LINE RESPONSES WITH CONVERSATIONS --
//
//                                                      Instructions:
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
//                                     (what to listen for)                (tagged or untagged) (your action name)
//                                             |                                    |                  |
//                                             v                                    v                  v
//  || botListener.hears(['trigger words', 'in quotes', 'separated by commas'], untaggedMessage, behaviorName);
//
//  ex: botListener.hears(['hi woody'], taggedMessage, sayBotIntroduction);
//
//-----------------------------------------------------------------------------------------------------------*/

var sayBotIntruction = function(bot, incomingMessage) {
  bot.startConversation(incomingMessage, function(err,convo) {
    convo.say('Howdy Partner!');
    convo.say('You\'re my favorite deputy!');

  });
}
botListener.hears(['hi woody'], taggedMessage, sayBotIntruction);


/*-------------------------------------------------------------------------------------------------------------
//
//                                          Bot Logic Part 3: startConversation() and ask()
//                           -- WRITE RICH INTERACTIONS BY WRITING QUESTIONS AND WAITING FOR RESPONSES --
//
//                                                      Instructions:
//
//  1: Write your first question and give it a name.
//
//     TIP: Your first question must have the startConversation() call
//     TIP: Chain your questions together to create deep interactions
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
//  ||     endBeatlesConversation(response, convo);
//  ||     convo.next();
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
//                                     (what to listen for)                (tagged or untagged) (your action name)
//                                             |                                    |                  |
//                                             v                                    v                  v
//  || botListener.hears(['trigger words', 'in quotes', 'separated by commas'], untaggedMessage, behaviorName);
//
//  ex: botListener.hears(['lets talk about the beatles'], untaggedMessage, askAboutFavoriteBeatle);
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
   convo.say("I guess I prefer the Rolling Stones.");
}

botListener.hears(['lets talk about the beatles'], untaggedMessage, askAboutFavoriteBeatle);

questionWithMultipleResponses = function(response, convo) { 
  convo.ask("Would you like fries with that?", [
      {
        pattern: bot.utterances.yes,
        callback: function(response,convo) {
          convo.say('Great! Coming right up...');
          // do something else...
          convo.next();

        }
      },
      {
        pattern: bot.utterances.no,
        callback: function(response,convo) {
          convo.say('Who doesn\'t like fries?');
          // do something else...
          convo.next();
        }
      },
      {
        pattern: /one|two/ig,
        callback: function(response,convo) {
          convo.say('thats not many fries');
          // do something else...
          convo.next();
        }
      },
      {
        pattern: 'three',
        callback: function(response,convo) {
          convo.say('FRIES AND PIZZA DO NOT MIX');
          // do something else...
          convo.next();
        }
      },
      {
        default: true, // IF THE PATTERNS ARE NOT MATCHED
        callback: function(response,convo) {
          // just repeat the question
          convo.repeat();
          convo.next();
        }
      }
    ]);
}


botListener.hears(['hello','hi'],'direct_message,direct_mention,mention',function(bot, incomingMessage) {
    botListener.storage.users.get(incomingMessage.user,function(err, user) {
        if (user && user.name) {
            bot.reply(incomingMessage,'**cough** ' + user.name + '!!');
        } else {
            bot.reply(incomingMessage,'**cough**');
        }
    });
});

botListener.hears(['shutdown'],'direct_message,direct_mention,mention',function(bot, incomingMessage) {

    bot.startConversation(incomingMessage,function(err, convo) {
        convo.ask('Are you sure you want me to shutdown?',[
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say('Bye!');
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    },3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('*Phew!*');
                convo.next();
            }
        }
        ]);
    });
});