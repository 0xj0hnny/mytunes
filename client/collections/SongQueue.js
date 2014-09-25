// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(song){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      console.log(this, "before")
      this.shift();
      console.log(this, 'after')
      if(this.length){
        console.log("are you playing")
        this.playFirst();
      }
    });

     this.on('dequeue', function(song){
      this.remove(song);
    });


  },
  playFirst: function(){
    console.log("are you playingfirst")
    this.at(0).play();
  }

});
