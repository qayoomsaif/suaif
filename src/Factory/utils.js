export const birthdayFormat=(str) => {
    let textStr = str.replace(/[^0-9]/g, '');
    let newStr = textStr?.split('/').join('');
    let res = newStr;
    if (newStr.length > 4) {
      var part1 = newStr.substring(0, 2);
      var part2 = newStr.substring(2, 4);
      var part3 = newStr.substring(4, 8);
      res = part1 + '/' + part2 + '/' + part3;
    } else if (newStr.length > 2) {
      var part1 = newStr.substring(0, 2);
      var part2 = newStr.substring(2, 4);
      res = part1 + '/' + part2;
    }
    return res;
  }
  export const formatPhoneNumber=(phoneNumberString)=> {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }