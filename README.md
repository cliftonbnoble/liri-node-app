# liri-node-app
Like a really dumb siri
# LIRI Bot

### Overview of the Liri Bot

Liri is a text based smart assistant.  His abilities at the moment are limited to searching Spotify for Songs, Concerts by artists, and OMDB for movies.  Simpley type in one of the following commands "concert-this" for concert info, "spotify-this_song" for song info, "movie-this" for movie info, and "do-what-it-says" will get liri's favorite song, or movie.  LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Usage examples

`node liri.js concert-this <artist/band name here>` Will return:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")
`node liri.js spotify-this-song '<song name here>'` Will Return:
* This will show the following information about the song in your terminal/bash window
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base.
`node liri.js movie-this '<movie name here>'` Will Return:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
`node liri.js do-what-it-says` Will Return: 
* It will run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`
* Change the text in `random.txt` to run different commands.  Make sure you follow the directions above.  Use spotify-this followed by a song, movie-this followed by a movie, or concert-this followed by an artist.  Save the file and run node liri do-what-it-says.

### Video Demonstration
  
[click here for a demo](https://drive.google.com/file/d/1LJ-pXLn7InjuVbxN7pBy2lVHp41QTtCr/view?usp=sharing),

### Bonus

Bonus feature added after the video.  Please take a look at the snapshot for the appendFile bonus.  Added to movie-this.  Appends an object.  Cars and Snatch have been added.  Each additional movie search will be added.