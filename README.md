## Welcome to Designing Conversations: Rise of the Bots

###<a href="http://www.meetup.com/Huge-LA/events/228204876/" target="_blank">Meetup Info</a>

![](http://i.giphy.com/osicrp6ErKw9i.gif)

## At Home Setup

### Step 1: *Install Node.js and Sublime Text*

<a href="https://nodejs.org/en/" target="_blank">Please download the lastest STABLE version of Node.js here</a>

This will allow us to use the Javascript programming language.

### Step 2: *Install Sublime Text*

<a href="http://www.sublimetext.com" target="_blank">Install Sublime Text</a>

Sublime is the text editor we will use to edit our code and write bots.

### Step 3: *Sign up for Slack*

You should already have completed the registration to Rise of the Bots
but if you haven't please do so now at the following link:
<a href="http://join.riseofthebots.net">http://join.riseofthebots.net</a>.

## Let's Begin

We've prepared this document to serve as a short walkthrough that will have you
up and running by the end of it. In order to create a chatbot we'll be depending
on a few pieces of existing technology. This will allow us to build our bot
with greatly improved speed and ease collaboration efforts so that everyone can
get involved. All of our work will utilize Node.js, so let's start there.


### Step 4: *Download this starter kit*

<a href="https://github.com/davidsicher/demo-bot/releases" target="_blank">Please download the lastest release here</a>.

In order to help speed things up we've prepared a small scaffolding for a chat bot.
Inside are examples of many of the pieces of functionality you can find in your
bot. Our demo bot is build on top of <a href="https://github.com/howdyai/botkit" target="_blank">Botkit</a>.

### Step 5: *Install dependencies*

Open a finder window, navigate to Applications > Utilities. There you'll find
Terminal.app which we'll use to enter commands. First we will enter the project
folder by typing the following command. Press the enter key when done.

    // IMPORTANT: not copy paste friendly, replace x-x-x with the name of the file that was just downloaded
    $ cd ~/Downloads/demo-bot-x.x.x

Then we'll complete the installation by typing the following command, also in terminal.

    $ npm install

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

Open a text editor and create a file in the root directory of this project called `.env`.
The file name should include the dot prefix. The entire name of the file is
`.env`. There is no additional file extension. Type in `token=` then your new
token so that the contents of the file looks like this:

    token=xoxb-fffffffffff-PfN6HCc7L6kVHqTU3eTS1Csc

### Step 8: *SHIP IT*

You officially have a capable chat bot!!! Connect the bot to slack by running:

    $ npm start

After the bot has loaded and the output has stopped you should notice that
your bot is online and available inside your Slack team. There are endless
possibilities, what will you come up with?

![](http://i.giphy.com/CDMz3fckRXXDG.gif)
