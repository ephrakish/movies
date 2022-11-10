//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
const {ObjectId} = require('mongodb');

module.exports = {
    checkString (val) {
        if(typeof(val) !== "string") {
          throw `${val} must be a string`
        }
        if( val === "") {
          throw `${val} must not be an empty string`
        }
        if( val.length === 0) {
          throw `${val} must be a string`
        }
        if( val === " " || val === "  " || val === "   ") {
          throw `${val} must be a string`
        }
      },
      
      checkMissingValues (val) {
        if(val === undefined) {
          throw 'All fields need to have valid values'
        }
      },
      
      checkArray (values) {
        if( values.length === 0) {
          throw `${values} must be an empty array`
        }
        values.forEach((val) => {
          if(typeof(val) !== "string") {
            throw `${val} must be a string`
          }
          if( val === "") {
            throw `${val} must not be an empty string`
          }
          if( val.length === 0) {
            throw `${val} must be a string`
          }
          if( val === " ") {
            throw `${val} must be a string`
          }
        })
      },
      
      checkRunningTime (runningTime) {
        let arr = runningTime.split(' ');
        var firstNumber = arr[0].match(/-?\d+/g)[0];
        var lastNumber = arr[1].match(/(\d+)/)[0];
        if(Number(firstNumber) < 0) {
          throw `${lastNumber} must be greater or equal to 0`
        }
        if(Number(firstNumber) === 0) {
          if(Number(lastNumber) > 59 || Number(lastNumber) <= 30) {
            throw `${lastNumber} - runTime must be greater than 30 and less or equal to 59`
          }
        }
        if(Number(firstNumber) > 0) {
          if(Number(lastNumber) > 59) {
            throw `${lastNumber} must be less or equal to 59`
          }
        }
      },
      
      checkDate (submittedDate) {
        let dates = submittedDate.split("/");
        let day = Number(dates[1]);
        let month = Number(dates[0]);
        let year = Number(dates[2]);
        const daysOfTheYear = [31,29,31,30,31,30,31,31,30,31,30,31];
        const monthToCheck = month - 1;
        const daysToCheck = daysOfTheYear[monthToCheck];
        const times = Date().split(" ");
        const currentYear = Number(times[3]);
        const validYear = currentYear + 2;
        if(day > daysToCheck) {
          throw `${day} - exceeds the days of the month`
        }
        if(year > validYear || year < 1900) {
          throw `${year} - exceeds the years required`
        }
      },
      
      checkId (id) {
        if(!ObjectId.isValid(id)) {
          throw `${id} - id is invalid`
        }
      },
      
      checkRating (rating) {
        if(typeof(rating) !== "number" || rating > 5 || rating < 1) {
          throw `${rating} - rating should be a number between 1 and 5`
        }
      }
      
}