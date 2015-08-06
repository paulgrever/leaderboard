PlayersList = new Mongo.Collection('players');


if(Meteor.isClient){
  Template.leaderboard.helpers({
   'player' : function(){
      return PlayersList.find();
    },
    'otherHelperFunction': function(){
        return "Some other function"
    }
  });
  Template.playerCount.helpers({
    'playersCount' : function(){
      return PlayersList.find().count();
    }
  })

  Template.leaderboard.events({
    // events go here
    "click .player" : function() {
      console.log("You clicked a player element");
    }
  });
}

if(Meteor.isServer){
  
}

