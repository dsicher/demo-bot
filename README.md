## Welcome to Designing Conversations: Rise of the Bots

###[SXSW Session Information](http://schedule.sxsw.com/2017/events/PP66459)

![](http://i.giphy.com/osicrp6ErKw9i.gif)


## Tooling


### Episode IV - var a = new Hope(); *(Sign up for Slack)*
Please complete your registration at the following link:
[http://join.riseofthebots.net](http://join.riseofthebots.net)
You will receive a confirmation email shortly to join Rise of the Bots on Slack.


### Episode V - The Empire Strikes Branch: *(Register your bot)*
Later we will want to connect your bot to Slack. As a first step, let's create
the integration point. Make sure you've logged into
[Rise of the Bots](https://riseofthebots.slack.com/). Then visit the custom
integrations page at
[https://slack.com/apps/manage/custom-integrations](https://slack.com/apps/manage/custom-integrations)

+ Click "Bots".
+ Click "Add Configuration".
+ Enter a username.
+ Click "Add bot integration".
+ **Copy your token. Hang on to this, we'll use it in a minute.**
+ Add any other relevant information you may have to the profile of your bot.
  You can come back to edit the profile later as the persona becomes more tangible.


### Episode VI - Return of the Sed -i: *(Install Docker)*
[Get docker here](https://store.docker.com/search?type=edition&offering=community).
Please follow the steps on screen to install Docker. There are two installation
methods we will be supporting, Mac and Linux. If you happen to be a Windows user
we'll do our best to support you too. Please complete the installation and
proceed to the next step.


### Episode I - The Prototon Menace: *(Get the latest release of our starter kit)*
**You should complete the previous step before attempting this one.**

Once ready, [please download the lastest release here](https://github.com/davidsicher/demo-bot/releases).
We created a bot that you can program with natural language commands!
Inside are instructions and examples of the functionality you can program with
your bot.

Double click the `LAUNCH` file found in the downloaded folder. A terminal window
will open up and you will be prompted to enter your slack token as a next step.
After entering your token please hit the enter key.

The first time you launch the bot you may be prompted to install additional
software. Please agree to all future dialog windows. If additional installs are
required repeat the launch step, double clicking the file again.

A terminal window will pop up and display a whole lot of output.
At the very end you should see a line that reads as follows:

    ** BOT ID:  your-bot-name  ...attempting to connect to RTM!

Check in Slack to see if your Bot is online and send them a message. For now ask
them for help by sending a message that simply says `help`.


### Episode II - The Git Clone Wars: *(Install a Text Editor)*
[Install Sublime Text](http://www.sublimetext.com)

Sublime is the text editor we will use to edit our code and write bots.

After you have installed Sublime Text, drag it to your dock. This will help you
easily open your bot for editing.


### Episode III - Revenge of the Scripths *(Get hacking)*
We've prepared this document to serve as a short walk-through that will have you
up and running by the end of it. In order to create a chatbot we'll be depending
on a few pieces of existing technology. This will allow us to build our bot
with greatly improved speed and ease collaboration efforts so that everyone can
get involved. All of our work will utilize our demo-bot code base, so let's
start there.

![](http://i.giphy.com/CDMz3fckRXXDG.gif)
