PlayersList = new Mongo.Collection('players');


if(Meteor.isClient){
  Template.leaderboard.helpers({
   'player' : function(){
      return PlayersList.find();
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    }
  });
  Template.playerCount.helpers({
    'playersCount' : function(){
      return PlayersList.find().count();
    }
  })

  Template.leaderboard.events({
    // events go here
    'click .player': function(){
        var playerId = this._id;;
        Session.set('selectedPlayer', playerId);
        var selectedPlayer = Session.get('selectedPlayer');
    }
  });
}

if(Meteor.isServer){
  
}

