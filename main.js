


// 1. Loop through the following array and count how many "computers" there are. Log the final count:


const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

let total = 0;
for (items of officeItems) {
  if (items === 'computer') {
        total++;
    }
};
console.log(`the final count is ${total}`)

// 2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

// bonus challenge #1 Log to the console a personalized message like:


// bonus challenge #3 Check to see if the movie goer is a male or female for an even more personalized message.