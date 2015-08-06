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
}

if(Meteor.isServer){
  
}