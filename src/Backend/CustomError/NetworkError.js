module.exports = class NetworkError extends require('./UserError') {
  constructor(errors, type) {
    // Overriding both message and status code.
    super(errors, type);
    // Saving custom property.
    this.status = errors.status ? errors.status : 999;
    this.url = errors.url ? errors.url : null;
    this.messageApi = errors.messageApi ? errors.messageApi : 'error not found';
    this.message = 'Please check your internet connection and try again';
    this.option = errors.option ? errors.option : null;
    this.detail = errors.object
      ? errors.object.detail
        ? errors.object.detail
        : {}
      : {};
    this.mainType = 'NetworkError';
    this.type = type || 'NetworkError';
    this.body = errors;
  }
};

