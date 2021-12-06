var readlineSync = require('readline-sync');
var chalk = require('chalk')

console.log(chalk.magentaBright("\tHi there, let's check if you were born in Leap year.") + "\n")
var userName = readlineSync.question(chalk.bgCyan("What's your name?") + "\n>")
var year = 5;

for(i=0;i<50;i++) //validating date format or looping back the question.
{
  var year = Number((readlineSync.question("\n" + chalk.bgMagenta("What's your Birth date? (Type in format: DD-MM-YYYY)") + "\n>" )).split("-")[2]);

if (String(year) === 'NaN') 
{
  console.log(chalk.bgRed("ERROR! Enter Date in Valid Format"))
}
else {
   break;
}
}



console.log('\n')
function isLeap(year) {
  var is_leap = false;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        is_leap = true;
      }
      else {
        is_leap = false;
      }
    }
    else {
      is_leap = true;
    }
  }
  if (is_leap) {
    console.log(">>" + chalk.bgGreen(userName + ", You were born in leap! year."))
  }
  else {
    console.log(">>" + chalk.bgRed(userName + ", You weren't born in leap! year."))
  }
}

isLeap(year)

