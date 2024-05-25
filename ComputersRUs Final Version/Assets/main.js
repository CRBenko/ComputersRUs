/*
 * Student Name: Curtis Benko
 * Student ID: 41104274
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 23W
 * Assignment: 4
 * Date Submitted: APRIL 2023
 */
/* 
HAMBURGER MENU FUNCTION
Retrieved and modified from (How TO-Mobile Navigation Menu, 2023)
*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Age of Majority Functions
var monthToday = new Date().getMonth() + 1;
var dayToday = new Date().getDate();
var yearToday = new Date().getFullYear();
const TODAY = `${monthToday}/${dayToday}/${yearToday}`;

const isAgeOfMajority = function (birthYear, birthMonth, birthDay) {
  var birthdate = `${birthMonth}/${birthDay}/${birthYear}`;

  /* function to calculate age
    some snippets taken and ADAPTED FROM naveen, stackoverflow.com (2023)
    */
  function age() {
    var ageYears = yearToday - birthYear;
    var m = monthToday - birthMonth;
    if (m < 0 || (m === 0 && dayToday < birthDay)) {
      ageYears--;
    }
    return ageYears;
  }
  /* function to calculate if leap year
    some snippets taken and ADAPTED FROM programiz.com (2023)
    */
  function checkLeapYear() {
    var leap = new Date(birthYear, 1, 29).getDate() === 29;
    if (leap == false && birthMonth == 2 && birthDay >= 29) {
      return false;
    } else return true;
  }

  if (
    typeof birthYear === "number" &&
    birthYear >= 1920 &&
    birthYear <= 2010 &&
    typeof birthMonth === "number" &&
    birthMonth >= 1 &&
    birthMonth <= 12 &&
    typeof birthDay === "number" &&
    birthDay >= 1 &&
    birthDay <= 31 &&
    age() >= 18 &&
    checkLeapYear() == true
  ) {
    return true;
  } else return false;
};
//Email Validation
/* Retrieved from (How to Perform Email Validation in JavaScript? 2022),
    (Getting HTML form values 2021),
    (How to validate an email that it should contain at least some characters before "@" 2018)
  */
const isValidEmail = function (email) {
  if (/^\w+([\.-]?\w+){5,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
    // return console.log(true);
  }
  alert("You have entered an invalid email address!");
  return false;
  //   return console.log(false);
};

//
//
//Contact Us Page
//
//
$(function () {
  // //Date Picker
  // $("#datepicker").datepicker();

  $("#form").validate({
    rules: {
      //Name Rules
      name: {
        required: true,
      },
      //Phone Rules
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      //Email Rules
      email: {
        required: true,
        email: true,
      },
      //Confirm Email Rules
      confirm_email: {
        required: true,
        equalTo: "#email",
      },
      //Date of Birth Rules
      dob: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      //Comments Rules
      comments: {
        required: true,
        minlength: 3,
      },
      //Consent Checkbox Rules
      consent: {
        required: true,
      },
    },
    messages: {
      //Name Messages
      name: {
        required: "Please enter your Full Name",
      },
      //Phone Messages
      phone: {
        required: "Please enter your Phone Number (ie.5191234567)",
        minlength: "Must be 10-digits",
      },
      //Email Messages
      email: {
        required: "Please enter your Email",
      },
      //Confirm Email Messages
      confirm_email: {
        required: "Please confirm your email",
      },
      //Date of Birth Messages
      dob: {
        required: "Please enter your Date of Birth",
        minlength: "The date must be in (mm/dd/yyyy) format",
        maxlength:
          "Too many characters. Make sure you are using (mm/dd/yyyy) format",
      },
      //Comments Messages
      comments: {
        required: "A comment is Required",
        minlength: "Must contain at least 3 Characters",
      },
      //Consent Checkbox Messages
      consent: {
        required: "Must Accept",
      },
    },
  });

  //Check Phone Number Format
  //Adapted from Braj, StackOverflow
  function checkPhone(phone) {
    if (/^[0-9]{10}$/.test(phone)) {
      return true;
    } else {
      return false;
    }
  }
  //Check Email Format
  function isValidEmail(email) {
    if (/^\w+([\.-]?\w+){5,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
  //Check date format/validity function
  // Taken and adapted from Elian Ebbing stackoverflow.com
  function checkDate(dob) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dob)) return false;

    // Parse the date parts to integers
    var parts = dob.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

  var monthToday = new Date().getMonth() + 1;
  var dayToday = new Date().getDate();
  var yearToday = new Date().getFullYear();

  //Checking if 18 or Older
  function isAgeOfMajority(dob) {
    var dobparts = dob.split("/");
    var birthDay = parseInt(dobparts[1], 10);
    var birthMonth = parseInt(dobparts[0], 10);
    var birthYear = parseInt(dobparts[2], 10);

    /* function to calculate age
    some snippets taken and ADAPTED FROM naveen, stackoverflow.com (2023)
    */
    function age() {
      var ageYears = yearToday - birthYear;
      var m = monthToday - birthMonth;
      if (m < 0 || (m === 0 && dayToday < birthDay)) {
        ageYears--;
      }
      return ageYears;
    }
    /* function to calculate if leap year
    some snippets taken and ADAPTED FROM programiz.com (2023)
    */
    function checkLeapYear() {
      var leap = new Date(birthYear, 1, 29).getDate() === 29;
      if (leap == false && birthMonth == 2 && birthDay >= 29) {
        return false;
      } else return true;
    }

    if (
      typeof birthYear === "number" &&
      birthYear >= 1920 &&
      birthYear <= 2010 &&
      typeof birthMonth === "number" &&
      birthMonth >= 1 &&
      birthMonth <= 12 &&
      typeof birthDay === "number" &&
      birthDay >= 1 &&
      birthDay <= 31 &&
      age() >= 18 &&
      checkLeapYear() == true
    ) {
      return true;
    } else return false;
  }

  //Check if Emails Match
  function emailMatch() {
    if (email.value === confirm_email.value) {
      return true;
    } else {
      return false;
    }
  }

  //Checking comment length
  //Adapted from Toto and Uwe Keim, StackOverflow
  function commentLength(comment) {
    if (/^.{3,}$/.test(comment)) {
      return true;
    } else {
      return false;
    }
  }

  $("#submit").click(function () {
    if (
      checkDate(dob.value) === true &&
      isAgeOfMajority(dob.value) === true &&
      checkPhone(phone.value) === true &&
      isValidEmail(email.value) === true &&
      emailMatch() === true &&
      commentLength(comments.value) === true &&
      consent.checked === true
    ) {
      alert("success!");
      // form.reset();
    } else {
      alert("Something is wrong!");
      // form.reset();
    }
  });
});
