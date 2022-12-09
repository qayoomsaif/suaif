import {
  StorageManager,
  UserInfoStorage,
  DateFormat,
  SystemStorage,
  Validate,
  ImagePicker,
} from './Manager/index';
var applicationFactory = null;

class ApplicationFactory {
  constructor(config) {
    this.config = config;
    // Assigning all functions of Manager class to the instance of this class
    this.validate = new Validate();
    this.storageManager = new StorageManager();
    this.dateFormat = new DateFormat();
    this.systemStorage = new SystemStorage(this.storageManager,);
    this.userInfoStorage = new UserInfoStorage(this.storageManager,);
    this.imagePicker = new ImagePicker(this.permissions);
  }

  /* When these below functions will be called from anywhere in the project they will call Manager functions  */
  getStorageManager() {
    return this.storageManager;
  }
  getValidate() {
    return this.validate;
  }
  getSystemStorage() {
    return this.systemStorage;
  }
  getUserInfoStorage() {
    return this.userInfoStorage;
  }
  getDateFormat() {
    return this.dateFormat;
  }
  getHelper() {
    return this.helper;
  }
  getImagePicker() {
    return this.imagePicker;
  }
}

/**
 * @param {*} config
 * @returns {ApplicationFactory}
 */
function getFactory(config) {
  if (!applicationFactory) {
    if (!config) {
      throw new Error('config not defined');
    }
    applicationFactory = new ApplicationFactory(config);
  }
  return applicationFactory;
}
module.exports = getFactory;
