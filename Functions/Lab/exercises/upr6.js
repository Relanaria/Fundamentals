function passwordValidator(str) {
  let passwordLength = lengthOfPassword(str);
  let passwordLetterAndDigits = lettersAndDigits(str);
  let enoughNumbersInPassword = numbersCheck(str);

  if (passwordLength && passwordLetterAndDigits && enoughNumbersInPassword) {
    console.log("Password is valid");
  } else {
    if (!passwordLength) {
      console.log("Password must be between 6 and 10 characters");
    }

    if (!passwordLetterAndDigits) {
      console.log("Password must consist only of letters and digits");
    }
    if (!enoughNumbersInPassword) {
      console.log("Password must have at least 2 digits");
    }
  }

  function lengthOfPassword(str1) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      count++;
    }

    if (count < 6 || count > 10) {
      return false;
    } else {
      return true;
    }
  }

  function lettersAndDigits(str2) {
    let letterMatchCheck = false;
    const re = new RegExp(/[a-zA-Z0-9*]/g);
    for (let i = 0; i < str2.length; i++) {
      let currentElement = str2[i];

      if (currentElement.match(re)) {
        letterMatchCheck = true;
      } else {
        return false;
      }
    }
    if (letterMatchCheck) {
      return true;
    }
  }

  function numbersCheck(str3) {
    let count1 = 0;
    const re1 = /[0-9*]/g;
  
    for (let i = 0; i < str3.length; i++) {
      if (str3[i].match(re1)) {
        count1++;
      }
    }
  
    if (count1 >= 2) {
      return true;
    } else {
      return false;
    }
  }
}

// passwordValidator('logIn')
passwordValidator('000000')
// passwordValidator("Pa$s$s");
