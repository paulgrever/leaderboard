PlayersList = new Mongo.Collection('players');

console.log("paul g!!");

if(Meteor.isClient){
  console.log("Hello client");
}

if(Meteor.isServer){
  console.log("Hello server");
}