const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
    let playlistIDs = Object.keys(this.playlists);
    for (let i = 0; i < playlistIDs.length; i++) {
      let playlistID = playlistIDs[i]
      let playlist = this.playlists[playlistID];
      console.log(`${playlistID}: ${playlist.name} - ${playlist.tracks.length}`);
    }
  },
  printTracks: function() {
    for (let trackID in this.tracks) {
      let track = this.tracks[trackID];
      console.log(`${trackID}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  printPlaylist: function(playlistId) {
    let playlist = this.playlists[playlistId];
    let playlistName = playlist.name;
    let howManyTracks = playlist.tracks.length;
    console.log(`${playlistId}: ${playlistName} - ${howManyTracks} tracks`);
  
    for (let trackId of playlist.tracks) {
      let track = this.tracks[trackId];
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    let playlist = this.playlists[playlistId];
  
    if (!playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
      console.log(`Added ${trackId} to playlist ${playlistId}`);
    }
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    const newTrack = this.generateUid();
    this.tracks[newTrack] = {
      id: newTrack,
      name: name,
      artist: artist,
      album: album
    };
  },
  addPlaylist: function(name) {
    const newPlaylist = generateUid();
    this.playlists[newPlaylist] = {
      id: newPlaylist,
      name: name,
      tracks: []
    };
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  let playlistIDs = Object.keys(library.playlists);

  for (let i = 0; i < playlistIDs.length; i++) {
    let playlistID = playlistIDs[i];
    let playlist = library.playlists[playlistID];
    console.log(`${playlistID}: ${playlist.name} - ${playlist.tracks.length}`);
  }
};
//library.printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let trackID in library.tracks) {
    let track = library.tracks[trackID];

    console.log(`${trackID}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
//library.printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlist = library.playlists[playlistId];
  let playlistName = playlist.name;
  let howManyTracks = playlist.tracks.length;
  console.log(`${playlistId}: ${playlistName} - ${howManyTracks} tracks`);

  for (let trackId of playlist.tracks) {
    let track = library.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
//library.printPlaylist("p01");
//library.printPlaylist("p02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlist = library.playlists[playlistId];

  if (!playlist.tracks.includes(trackId)) {
    playlist.tracks.push(trackId);
    console.log(`Added ${trackId} to playlist ${playlistId}`);
  }
};
//library.addTrackToPlaylist("t03", "p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const newTrack = generateUid();
  library.tracks[newTrack] = {
    id: newTrack,
    name: name,
    artist: artist,
    album: album
  };
};
//library.addTrack("What am I doing", "Brendan", "Maybe this isn't for me");
//console.log(library.tracks);


// adds a playlist to the library
const addPlaylist = function(name) {
  const newPlaylist = generateUid();
  library.playlists[newPlaylist] = {
    id: newPlaylist,
    name: name,
    tracks: []
  };
};
library.addPlaylist("Brendan's Confusion: Greatest Hits");
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}