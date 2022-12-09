import { Alert } from 'react-native';

export class Validate {
    constructor(router) {
        this.router = router;
    }
    email(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
        if (re.test(email)) {
            return true;
        }
        return false;
    }
    passowrd(passowrd) {
        // var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
        // var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#.&*$!%*?&])[A-Za-z\d@#.&*$!%*?&]{8,15}$/;
        if (re.test(passowrd)) {
            return true;
        }
        return false;
    }
    async validateNum(num) {
        regex = /^[0-9\s]*$/;
        if (regex.test(num)) {
            return true;
        }
        return false;
    }
    async validateStringWithSpace(str) {
        regex = /^[a-zA-Z ]*$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }
    string(str) {
        regex = /^[a-zA-Z ]*$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }
    async validateOnlyString(str) {
        regex = /^[a-zA-Z]*$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }
    async validateNuminArry(num) {
        var value = true;
        for (i = 0; i < num.length; i++) {
            let regex = /^[0-9\s]*$/;
            let res = regex.test(num[i]);
            if (!res) {
                value = false;
            }
        }
        return value;
    }
}

// Minimum eight characters, at least one letter and one number:
// 
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
// Minimum eight characters, at least one letter, one number and one special character:
// 
// "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
// 
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// 
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// 
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"
// module.exports = {Helper};
