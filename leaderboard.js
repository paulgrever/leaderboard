PlayersList = new Mongo.Collection('players');


if(Meteor.isClient){
  Template.leaderboard.helpers({
   'player' : function(){
      return PlayersList.find({},{sort: {score: -1, name: 1}  });
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    },
    'showSelectedPlayer' : function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer);
    }
  });
  Template.playerCount.helpers({
    'playersCount' : function(){
      return PlayersList.find().count();
    }
  });


  Template.leaderboard.events({
    // events go here
    'click .player': function(){
        var playerId = this._id;;
        Session.set('selectedPlayer', playerId);
        var selectedPlayer = Session.get('selectedPlayer');
    },
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: 5}});
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: -5}});
    }
  });

  Template.addPlayerForm.events({
    "submit form" : function(event){
      event.preventDefault();
      var playerNameVar = event.target.playerName.value;
      var playerScoreVar = parseInt(event.target.playerScore.value);
      PlayersList.insert({
        name: playerNameVar,
        score: (playerScoreVar || 0)
      });
      event.target.playerName.value = "";
      event.target.playerScore.value = "";
    },

    'click .remove' : function(){
      var selectedPlayer = Session.get('selectedPlayer');
      alert("Do you really want to remove this player?")
      PlayersList.remove(selectedPlayer);
    }

  });
}

if(Meteor.isServer){
  
}

