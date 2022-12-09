import ExtendableBuiltin from './ExtendableBuiltin';
module.exports = class ApiError extends ExtendableBuiltin(Error) {
  constructor(errors, type) {
    super(errors, type);
    this.status = errors.status ? errors.status : 111;
    this.url = errors.url ? errors.url : null;
    this.messageApi = errors.messageApi ? errors.messageApi : 'error not found';
    this.msgApi =
      errors.messageApi &&
      errors.messageApi.errors &&
      errors.messageApi.errors.length
        ? errors.messageApi.errors[0]
        : 'error not found';
    this.message = errors.message
      ? errors.message
      : 'Something went wrong. Please try again.';
    this.option = errors.option ? errors.option : null;
    this.detail = errors.object
      ? errors.object.detail
        ? errors.object.detail
        : {}
      : {};
    this.mainType = 'ApiError';
    this.type = type || ApiError.name;
    // this.body = errors;
    return;
  }
};

// message: message ? message : null,
//   status: response ? (response.status ? response.status : null) : null,
//   url: url ? url : null,
//   messageApi: messageApi ? messageApi : message ? message : 'error not found',
//   object: errorObject ? errorObject : null,
//   option: option,
