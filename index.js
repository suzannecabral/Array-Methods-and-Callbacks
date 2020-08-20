import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(`------- Task 1: Console Log -------`);


//------------------------------------------
// //all of these work to access data

console.log(fifaData);
console.log(fifaData[2]);
console.log(fifaData[2].Year);
console.log(fifaData[2].Stage);


// console.log(dataset[index]);
// // this works       param: (dataset, index)
// // log an object by index, from argument

// console.log(dataset[index][key]); 
// //this works        param: (dataset, index, key)
// // log key value using bracket notation, from argument
// // can take a string with spaces as key arg

// //next... I need something that loops so it can check each object for a condition. I'll need to access the object, then check the key.
// // I keep forgetting quotes for strings.


        // //this works to filter down to finals games
        // const finalMatch = dataset.filter(function(game){
        //     return(game["Stage"] === "Final" && game["Year"] === 2014);

            
        // });

//------------------------------------------

console.log("--------- getMatchData ---------" );


    function getMatchData(dataset){

        let matchData = {};
        let homeTeam = {name:"",score:0};
        let awayTeam = {name:"",score:0};
        
        //this works to filter down to finals games
        const finalMatch = dataset.filter(function(game){
            return(game["Stage"] === "Final" && game["Year"] === 2014);

            
        });

        matchData = finalMatch;
        homeTeam.name = matchData[0]["Home Team Name"];
        homeTeam.score = matchData[0]["Home Team Goals"];

        awayTeam.name = matchData[0]["Away Team Name"];
        awayTeam.score = matchData[0]["Away Team Goals"]



        console.log(matchData);

        console.log(`In ${matchData[0].Year}, the score was ${homeTeam.name}: ${homeTeam.score} (home) to ${awayTeam.name}: ${awayTeam.score} (away) `)

        if(homeTeam.score > awayTeam.score){
            console.log(`The winner was ${homeTeam.name}`);
        }else if (awayTeam.score > homeTeam.score){
            console.log(`The winner was ${awayTeam.Name}`);
        }else{
            console.log("It's a tie?");
        };
        

        



        //I can get the final game data as an object
        //How do I access the values inside the object?

//function getFinals()

    }

getMatchData(fifaData);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

console.log("--------- task2 getFinals ---------" );

function getFinals(data) {

    let finalsData = [];

    const finalMatches = data.filter(function(games){
        return(games["Stage"] === "Final");
    });

    finalsData = finalMatches;
    console.log(finalsData);



};

getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log("--------- task3 getYears ---------" );


function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
 