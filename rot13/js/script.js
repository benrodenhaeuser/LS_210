function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function isLetter(char) {
  return isLowerCase(char) || isUpperCase(char);
}

function isInSecondHalfOfAlphabet(char) {
  return (char >= 'n' && char <= 'z') || (char >= 'N' && char <= 'Z');
}

function rotateCharBy13(char) {
  var rotation = 13;
  var alphabetLength = 26;
  var adjustment = (isInSecondHalfOfAlphabet(char) ? alphabetLength : 0);

  return String.fromCharCode(char.charCodeAt(0) + rotation - adjustment);
}

function rot13(string) {
  var rotatedString;
  var i;

  rotatedString = '';

  for (i = 0; i < string.length; i++) {
    currentChar = string[i];

    if (isLetter(currentChar)) {
      rotatedString += rotateCharBy13(currentChar);
    } else {
      rotatedString += currentChar;
    }
  }

  return rotatedString;
}
