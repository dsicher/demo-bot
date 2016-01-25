## Welcome to Designing Conversations: Rise of the Bots

###[Meetup Info](http://www.meetup.com/Huge-LA/events/228204876/)

![](http://i.giphy.com/osicrp6ErKw9i.gif)

TODO: MAKE LINKS TARGET BLANK

## At Home Setup

### Step 1: *Install Node.js and Sublime Text*

[Please download the lastest STABLE version of Node.js here](https://nodejs.org/en/)

This will allow us to use the Javascript programming language.

### Step 2: *Install Sublime Text*

[Install Sublime Text](http://www.sublimetext.com/)

Sublime is the text editor we will use to edit our code and write bots.

### Step 3: *Sign up for Slack*

We'll be sending out an email invitation to join our Slack team and follow the instructions.
You can introduce yourself in our `#intros` channel or hang back until the day of the event.
Thanks so much for your interest, we can't wait to meet you!


## Let's Begin

We've prepared this document to serve as a short walkthrough that will have you
up and running by the end of it. In order to create a chatbot we'll be depending
on a few pieces of existing technology. This will allow us to build our bot
with greatly improved speed and ease collaboration efforts so that everyone can
get involved. All of our work will utilize Node.js, so let's start there.


### Step 4: *Download this starter kit*

[Please download the lastest release here](https://github.com/davidsicher/demo-bot/releases).

In order to help speed things up we've prepared a small scaffolding for a chat bot.
Inside are examples of many of the pieces of functionality you can find in your
bot. Our demo bot is build on top of [Botkit](https://github.com/howdyai/botkit).

### Step 5: *Install dependencies*

Open a finder window, navigate to Applications > Utilities. There you'll find
Terminal.app which we'll use to enter commands. First we will enter the project
folder by typing the following command. Press the enter key when done.

    // IMPORTANT: not copy paste friendly, replace x-x-x with the name of the file that was just downloaded
    $ cd ~/Downloads/demo-bot-x.x.x

Then we'll complete the installation by typing the following command, also in terminal.

    $ npm install

### Step 6: *Register your bot*

You should already have completed the registration to
[Rise of the Bots](https://riseofthebots.slack.com/), but if you haven't
please let one of the event coordinators know now.

Next we want to connect your bot to Slack! As a first step, register your bot.
Make sure you've logged into
[Rise of the Bots](https://riseofthebots.slack.com/) then visit the custom
integrations page at [https://slack.com/apps/manage/custom-integrations](https://slack.com/apps/manage/custom-integrations).
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
