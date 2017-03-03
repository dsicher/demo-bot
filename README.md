## Welcome to Designing Conversations: Rise of the Bots

###[SXSW Session Information](http://schedule.sxsw.com/2017/events/PP66459)

![](http://i.giphy.com/osicrp6ErKw9i.gif)

## Tool Setup

### Step 1: *Install Docker*

[Get docker here](https://store.docker.com/search?type=edition&offering=community).

Please follow the steps on screen to install Docker. There are three installation
methods we will be supporting, Mac, Linux, and Windows.

### Step 2: *Install Sublime Text*

[Install Sublime Text](http://www.sublimetext.com)

Sublime is the text editor we will use to edit our code and write bots.

After you have installed Sublime Text, drag it to your dock. This will help you
easily open your bot for editing.

### Step 3: *Sign up for Slack*

Please complete your registration at the following link:
[http://join.riseofthebots.net](http://join.riseofthebots.net)

You will receive a confirmation email shortly to join Rise of the Bots on Slack.

## Let's Begin

We've prepared this document to serve as a short walkthrough that will have you
up and running by the end of it. In order to create a chatbot we'll be depending
on a few pieces of existing technology. This will allow us to build our bot
with greatly improved speed and ease collaboration efforts so that everyone can
get involved. All of our work will utilize our demo-bot code base, so let's
start there.


### Step 4: *Download this starter bot*

[Please download the lastest release here](https://github.com/davidsicher/demo-bot/releases)

We created a bot that you can program with natural language commands!
Inside are instructions and examples of the functionality you will find in your
bot. In addition to our tools, your bot will use
[Botkit](https://github.com/howdyai/botkit) to connect to Slack.

### Step 5: *Register your bot*

Next we want to connect your bot to Slack! As a first step, register your bot.
Make sure you've logged into [Rise of the Bots](https://riseofthebots.slack.com/).
Then visit the custom integrations page at
[https://slack.com/apps/manage/custom-integrations](https://slack.com/apps/manage/custom-integrations)

+ Click "Bots".
+ Click "Add Configuration".
+ Enter a username.
+ Click "Add bot integration".
+ Collect your token. Hang on to this, we'll need it in a minute.
+ Add any relevant information to the profile of your bot.

### Step 8: *SHIP IT*

Double click the `LAUNCH` file found in the folder you downloaded earlier.

You will be prompted to enter your token as a next step. After entering your
token please hit the enter key. A terminal window will pop up and display a
whole lot of output. At the very end you should see a line that reads as follows:

    ** BOT ID:  your-bot-name  ...attempting to connect to RTM!

Check in Slack to see if your Bot is online and send them a message. For now ask
them for help by sending a message that simply says `help`.

GET HACKING!

![](http://i.giphy.com/CDMz3fckRXXDG.gif)
