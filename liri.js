//required files
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var axios = require("axios")
var moment = require("moment")
//Variables to capture user submission.  Used a slice and rejoined them
let userSubmission = process.argv[2]
let userWords = process.argv.slice(3)
let userInput = userWords.join(" ")
//variable to capture spotify object
let logObj = {}
//If else statment to take in users request.  Could have also used a switch statement here
if (userSubmission === 'concert-this') {
    concertThis()
} else if (userSubmission === 'spotify-this-song'){
    spotifyThisSong()
} else if (userSubmission === 'movie-this'){
    movieThis()
} else if (userSubmission === 'do-what-it-says'){
    doWhatItSays()
} else {
  console.log("I don't understand you Bro")  
}
//Function to search Spotify
function spotifyThisSong() {
  //If user input is empty we give it a default value of Ace of Base the Sign
  if (userInput === "") {
    userInput = "Ace of Base the Sign"
  }
  //Searches Spotify for users song
    spotify.search({ type: 'track', query: userInput, limit: '3' }, function(err, data) {
        if (err) {
          throw err;
        }      
      console.log("Artist Name: ", JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
      console.log("Song Name: ", JSON.stringify(data.tracks.items[0].name, null, 2)); 
      console.log("Song Preview: ", JSON.stringify(data.tracks.items[0].preview_url, null, 2));
      console.log("Album Name: ", JSON.stringify(data.tracks.items[0].album.name, null, 2));
      console.log("\n-------------------------\n")
      })
    } 
//Function to check for concerts
function concertThis() {
    console.log("User Input:", userInput)
    //No default needed so we only search for users requests
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
        function (response) {
          //For loop to get the next 5 concerts
            for (let i = 0; i < 5; i++) {
            let date = response.data[i].datetime
            let state = response.data[i].venue.region
            console.log("Artist: ",userInput)
            console.log("Name of Venue: ", response.data[i].venue.name)
            console.log("Venue Location: ", response.data[i].venue.city,",",state)
            console.log("Date & Time: ", moment(date).format('MMMM Do YYYY, h:mm:ss a'))
            console.log("\n-------------------------\n")
          }
        }
    )
}
//Function to check for Movies
function movieThis() {
  //If user doesn't input a movie it defaults to Mr. Nobody
  if (userInput === "") {
    userInput = "Mr. Nobody"
  }
    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
          console.log("Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);
          console.log("Rotten Tomato Rating: " + response.data.Metascore);
          console.log("Country the Movie was produced: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot of the Movie: " +response.data.Plot);
          console.log("Actors: " + response.data.Actors);
          logObj.title = response.data.Title
          logObj.year = response.data.Year
          logObj.imdbRating = response.data.imdbRating
          logObj.Metascore = response.data.Metascore
          logObj.Country = response.data.Country
          logObj.Language = response.data.Language
          logObj.Plot = response.data.Plot
          logObj.Actors = response.data.Actors
          appendToFile(JSON.stringify(logObj));
        }
      );
//Function to grab text from random.txt file
}
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        // If the code experiences any errors it will log the error to the console.
        if (error) throw error;
          // return console.log(error);
          let dataSplit = data.split(",");
              liriCommand = dataSplit[0]
              userInput = dataSplit[1]
          //Used a swtich statement here instead of if statements to grab data from txt file
          switch (liriCommand) {
            case "spotify-this-song":
              spotifyThisSong()
              break;
            case "movie-this":
              movieThis()
              break;
            case "concert-this":
              concertThis()
              break;
          }
      });
}
function appendToFile(text){
  fs.appendFile("log.txt", text + "\n", function(err) {

    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }
    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log("Content Added!");
    }
  });
}