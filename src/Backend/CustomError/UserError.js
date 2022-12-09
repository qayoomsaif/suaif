import ExtendableBuiltin from './ExtendableBuiltin'
module.exports = class UserError extends ExtendableBuiltin(Error) {
    constructor(message, type) {
        // Calling parent constructor of base Error class.
        super(message);
        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
        // Capturing stack trace, excluding constructor call from it.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        // You can use any additional properties you want.
        // I'm going to use preferred HTTP status for this error types.
        // `500` is the default value if not specified.
        this.mainType = 'UserError'
        this.type = type || UserError.name;
        this.message = message || 'Something went wrong. Please try again.'
    }
};



// import ExtendableBuiltin from './ExtendableBuiltin'
// module.exports = class UserError extends ExtendableBuiltin(Error) {
//     constructor(message, type) {
//         // Calling parent constructor of base Error class.
//         super(message);
//         // Saving class name in the property of our custom error as a shortcut.
//         this.name = this.constructor.name;
//         // console.log(Error)
//         // Capturing stack trace, excluding constructor call from it.
//         if (Error.captureStackTrace) {
//             // V8 environments (Chrome and Node.js)
//             Error.captureStackTrace(this, this.constructor);
//         }
//         // Error.captureStackTrace(this, this.constructor);
//         // You can use any additional properties you want.
//         // I'm going to use preferred HTTP status for this error types.
//         // `500` is the default value if not specified.
//         this.mainType = 'UserError'
//         this.type = type || UserError.name;
//         this.message = message || 'Something went wrong. Please try again.'
//     }
// };