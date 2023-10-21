function songs(arr) {
  let numberOfSongs = arr.shift();
  let typeOfSong = arr.pop();
  let songs = [];

  class song {
    constructor(type, songName, time) {
      this.type = type;
      this.songName = songName;
      this.time = time;
    }
  }

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, songName, time] = arr[i].split("_");
    songs[i] = new song(type, songName, time);
  }

  if (typeOfSong === "all") {
    songs.forEach((i) => console.log(i.songName));
  } else {
    let filtered = songs.filter((i) => i.type === typeOfSong);
    filtered.forEach((i) => console.log(i.songName));
  }
}

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
