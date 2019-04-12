# dreamteam-client
React/Redux frontend repo for the solo project set in my final week on the [DevelopMe_ coding fellowship](https://developme.training/fellowship/).

The app can be viewed [here](http://dreamteam-client.s3-website.eu-west-2.amazonaws.com/).

The back end repo can be viewed [here](https://github.com/helenodia/dreamteam-api).

![dreamteam app demo](https://github.com/helenodia/dreamteam-client/blob/master/public/images/dreamteamapp1.gif)

## Frontend Setup
### Required

You will need to have npm installed.

### Installing
Clone the git repository and run npm install:

```git clone https://github.com/helenodia/dreamteam-app.git```

```npm install```

Once all the packages have installed, run:

```npm start```

There is the option to run the app with a local version of the [API](https://github.com/helenodia/dreamteam-api) on Homestead, or using the remote API hosted on AWS. To switch between them, in the client app directory open axios.js (```App > data > axios.js```) and comment out the URL you're not using:

```
[...]
export default axios.create({
	baseURL: "http://ec2-35-178-26-8.eu-west-2.compute.amazonaws.com/api/",
	// baseURL: "http://homestead.test/api/", 
[...]
```

## The Project
### The Brief

We were set the task of creating a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5) and were given a week to do this.

## Planning

### Plan One
My initial plan was to create a two screen web app with a simple, user-friendly layout, using React and Redux. I chose to use React and Redux as I'd enjoyed using JavaScript in the course and thought that the Redux state management would offer a logical way of working with the user's inputted data.

Key features:
 * Allow the user to input player names and experience ratings
 * Display the inputted player names after submission and allow the user to clear all the names and start over
 * Store the inputted players and their experience ratings in state
 * Generate two random teams from the user's input, which would be balanced in terms of the players' experience levels by taking into account the inputted ratings
 * Allow the user to reshuffle the teams or start over 

#### Stretch goals

If time allowed, I planned to make it possible for the user to edit and delete players before generating the teams.

I also wanted to integrate a Laravel API to store the players' names and ratings. This was partly as I'd enjoyed working with PHP and Laravel during the course and wanted to continue using them and partly as I thought it would be 'cleaner' to be able to generate the random teams serverside and send them back via a GET request. 

As a bigger stretch goal, I would have liked to set up user accounts functionality to let the user store their generated teams in the database and retrieve them later. 

### Plan Two
During the build I decided, for better or worse, to change course and pause the work I'd done so far in React and Redux to create an API using Laravel so that I could store the players' names and ratings in a table and then work out the random teams serverside. 

My plan was to get the API functioning and then return to REACT and Redux to finalise the app with the follow layout:

*Screen one: 'Players'*
This screen would feature:
* An input and radio buttons, letting the user add a player's name and experience rating (a rating of 1-3, set to a more user-friendly description)
* A submit button, which on click would send the inputted data to the database via a POST request, as well as to local state
* An area to display a list of inputted players' names, taken from local state
* A 'reset' button, clearing the names from local state and the database, letting the user start from scratch
* A 'generate teams' button, which would submit a GET request, triggering a method in laravel to return two random teams, balanced based on the players' experience levels. This button would also take the user to the Teams screen.

*Screen two: 'Teams'*
* Two lists, displaying the random teams
* A 'shuffle' button, which would submit another GET request to generate new teams from the existing players
* A 'reset' button, clearing the data stored in local state and in the 'players' table serverside and taking the user back to the Players screen to start over.

<!-- ### Wireframes


### Git

### UI

  -->

## Learnings

My overall learning from this project was to set achievable goals for an MVP. Changing course to build an API at a lage stage in the project meant that I wasn't left with much wiggle room to get round any issues that came up during the build and unfortunately I fell behind on my plans for the front-end.

That said, I now have a better idea of what's a realistic goal within a week based on my experience.



<!-- ### Issues -->

## To do:

* Refactor the team sorting logic in Laravel
* Update the sass styling to make the app responsive 
* Add aria labels in React to help with [WAI_ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) guidelines
* Add buttons to the list of players on the Players screen to let the user edit or delete players without having to reset the entire list



