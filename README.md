# Master Heroes

This project was created as part of a internship selection process at [App Masters](https://appmasters.io/)

It's a simple guess game using the [SuperHero API](https://github.com/akabab/superhero-api) where the player will test its knowledge of super heroes.

## Running the game
To try the game simply open [this link](https://allanmaral.github.io/master-heroes/).

## Cloning this repository
To clone this repo and play with the settings, open a terminal and run:
```sh
git clone https://github.com/allanmaral/master-heroes.git
```
Install the dependencies with:
```sh
yarn install
```
And run the game:
```sh
yarn start
```

If you wish to change the settings, open the [gameSettings](src/config/gameSettings.js) file. It should contain some thing like this:
```js
export default {
  numberOfCards: 15,
  gameTime: 60,
};
```

```numberOfCards``` is the total number of heroes that is shown to the user before the and of game.

```gameTime``` is the time, in seconds, that the player have to answer all the guesses.

## Features
The game loads every hero from the [API](https://github.com/akabab/superhero-api), shuffle the list and select a number of cards based on the variable ```numberOfCards``` from the file [gameSettings.js](src/config/gameSettings.js). Then, for each card, two random hero names are selected to build a question.

When the fist hero is shown, a countdown starts with ```gameTime``` seconds (defined in [gameSettings.js](src/config/gameSettings.js)).

The game ends after the countdown ends or the player answers all the heroes. If the player finish the cards before running out of time, the remaining time in the timer is converted to points based in the percentage of right answers (answering fast isn't always the best option).

## Technical details
This project was implemented using React, a javascript library for building user interfaces.

The following packages were used in this project:

1. **axios**: Used to handle the async request to the [SuperHero API](https://github.com/akabab/superhero-api).
2. **prop-types**: Used to document and validate the react components props usage.
3. **react-icons**: Used for the icons in the game.
4. **react-router**: Used to handle the navigation in the game.
5. **styled-components**: Used to stylize all the components in the page.

The Navbar system was suboptimal, the original plan was to use Redux to handle all the states, but due to time restraints that could not be implemented.

Building a global leaderboard with Node was also one of the goals, but as the Navbar solution with Redux, could not be implemented in time.
