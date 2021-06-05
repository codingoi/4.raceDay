//Variables

//Code that generates the basic race registration numbers
let raceNumber = Math.floor(Math.random() * 1000);

//Variable that indicates whether a runner registered early or not.
let isEarlyRegistration = false

//Variable for the runner’s age 
let age = 18



//Conditional Flow --> see registration rules in the readme


//Early adults receive a race number at or above 1000.
if (isEarlyRegistration && age > 18) {
    raceNumber += 1000;
}


 if(isEarlyRegistration && age > 18) {
    console.log(`Your race number is ${raceNumber} and your starting time is 9:30 am`);
}
else if(!isEarlyRegistration && age > 18){
    console.log(`Your race number is ${raceNumber} and your starting time is 11:00 am`);
}
else if(age = 18) {
    console.log('Please see the registration desk')
}
else {
    console.log(`Your race number is ${raceNumber} and your starting time is 12:30 am`);
}






