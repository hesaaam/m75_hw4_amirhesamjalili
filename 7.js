function shift(n,alphabet) {
    let newAlpha = ""
    for (let i = 0; i < alphabet.length; i++) {
      let offset = (i + n) % alphabet.length;
      newAlpha += alphabet[offset];
    }
    return newAlpha;
  }
  
  function encode(message,shiftN) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz ";
    var newalpha = shift(shiftN, alphabet);
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
      let index = alphabet.indexOf(message[i]);
      result += newalpha[index];
    }
    return result;
  }
  
  
  
  function decode(message, shiftN) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz ";
    var newalpha = shift(shiftN, alphabet);
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
      let index = newalpha.indexOf(message[i]);
      result += alphabet[index];
    }
    return result;
  }
  
  
  console.log(encode("The bombing of Longhill Bridge", 5))
  console.log(decode("ymjegtrgnsletkeqtslmnqqegwnilj", 5));