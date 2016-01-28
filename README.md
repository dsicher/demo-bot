## Welcome to Designing Conversations: Rise of the Bots

###<a href="http://www.meetup.com/Huge-LA/events/228204876/" target="_blank">Meetup Info</a>

![](http://i.giphy.com/osicrp6ErKw9i.gif)

## At Home Setup

### Step 1: *Install Node.js*

<a href="https://nodejs.org/en/" target="_blank">Please download the lastest STABLE version of Node.js here</a>

Node.js will allow us to use the Javascript programming language for our bots.

### Step 2: *Install Sublime Text*

<a href="http://www.sublimetext.com" target="_blank">Install Sublime Text</a>

Sublime is the text editor we will use to edit our code and write bots.

After you have installed Sublime Text, drag it to your dock. This will help you easily open your bot for editing.

### Step 3: *Sign up for Slack*

If you have not completed your registration for Rise of the Bots, please do so now at the following link:
<a href="http://join.riseofthebots.net">http://join.riseofthebots.net</a>.

You will receive a confirmation email shortly to join Rise of the Bots on Slack.

## Let's Begin

We've prepared this document to serve as a short walkthrough that will have you
up and running by the end of it. In order to create a chatbot we'll be depending
on a few pieces of existing technology. This will allow us to build our bot
with greatly improved speed and ease collaboration efforts so that everyone can
get involved. All of our work will utilize our demo-bot code base, so let's start there.


### Step 4: *Download this starter bot*

<a href="https://github.com/davidsicher/demo-bot/releases" target="_blank">Please download the lastest release here</a>.

We created a bot that you can program with natural language commands!
Inside are instructions and examples of the functionality you will find in your bot.
In addition to our tools, your bot will use <a href="https://github.com/howdyai/botkit" target="_blank">Botkit</a> to connect to Slack.

### Step 5: *Install dependencies*

Press command-spacebar to open Spotlight, type "terminal", and press enter. Alternatively, open a finder window
and navigate to Applications > Utilities. There you'll find Terminal.app which we'll use to enter commands.

In your terminal window, type the following, ignoring the dollar sign:

	$ cd 

In your finder, navigate to your Downloads directory and drag the demo-bot-x.x.x folder into your terminal window.

Press enter.

Then we'll complete the installation by typing the following command, also in terminal:

    $ npm install

If you see a dialogue box asking about installing the Xcode CLI tools, click yes.

### Step 6: *Register your bot*

Next we want to connect your bot to Slack! As a first step, register your bot.
Make sure you've logged into
<a href="https://riseofthebots.slack.com/" target="_blank">Rise of the Bots</a>
then visit the custom integrations page at
<a href="https://slack.com/apps/manage/custom-integrations" target="_blank">https://slack.com/apps/manage/custom-integrations</a>.
Click "Build your own" in the top right navigation, then "Make a Custom
Integration", and finally "Bots". Give your bot a username and click "Add Bot
integration". On the following screen you'll see a field called "API Token".
Copy the token, and keep it handy for the next step.

### Step 7: *Edit your settings*

Back in the finder, drag the demo-bot-x.x.x folder onto Sublime Text in your dock.

In the left column, control-click on the root directory of this project and
create a new file. Save the file and name it ".env".  The file name should include
the dot prefix. Click "yes" if you get a dialogue box about filenames beginning with a
period. In the file, type "token=" and paste your slack token from Step 6 so that the
contents of the file looks like this:

    token=xoxb-fffffffffff-PfN6HCc7L6kVHqTU3eTS1Csc

### Step 8: *SHIP IT*

You officially have a capable chat bot!!! Connect the bot to slack by running:

    $ npm start

After the bot has loaded and the output has stopped you should notice that
your bot is online and available inside your Slack team. There are endless
possibilities, what will you come up with?

![](http://i.giphy.com/CDMz3fckRXXDG.gif)
