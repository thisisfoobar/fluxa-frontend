# Silly Emoji Titles Frontend

## URL

[https://silly-emoji-titles-frontend.onrender.com/](https://silly-emoji-titles-frontend.onrender.com/)

I created this site to solve a personal issue, updating the titles of my Strava activities. I wanted a way to have them automatically updated to a random emoji so it was something fun but I didn't have to do anything with it after I posted an activity.
This site connects to Strava's api where a user authorizes it's use.  Once the user has authorized this app they no longer need to do anything.  The app uses Strava's webhooks to listen for new activities created and then updates the title to a random emoji from the database.
The main feature of the site is listed above, a Strava title being automatically updated to a random emoji.  For future enhancements, I'd like to provide users with options of things they would want to have their titles updated to.  It could be random music lyrics, quotes, jokes or something else fun.  I would also like to add more to the site about me and maybe other fun stuff for users to interact with.
Standard user flow:

- From the welcome page: click on 'Connect to Strava'
- User is redirected to Strava
  - If user is not logged into Strava they will have to do so at this point
  - Once logged in, user will be prompted with a form to Authorize the app
- If the user Authorizes the app, they are redirected to a landing page showing success
- Nothing else needs to be done at this point as the app listens for new activities and updates the title

## Strava API

For more information about Strava's API: [https://developers.strava.com/]

## Tests

Tests are written with Jest and located within the app 'filename'.test.js.  You will need to have Jest installed and simply run them with npm jest.

## Tech stack

This app was created with React, Node, JavaScript and Express.  I have also deployed the database onto Supabase.  I chose this as it's widely used and I wanted more exposure to using it.  To find the repository for my backend: [https://github.com/thisisfoobar/silly-emoji-titles-backend]
