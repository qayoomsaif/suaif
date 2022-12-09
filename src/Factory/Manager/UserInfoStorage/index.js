export default class UserInfoStorage {
  constructor(storageManager, baseUrl) {
    this.storageManager = storageManager;
    this.baseUrl = baseUrl;
    this.isLogin = false;
    this.isLoginEmail = false;
    this.isLoginDevice = false;
    this.getIsLogin();
  }
  async set(object) {
    await this.storageManager._set('userInfo', object ? object : false);
    await this.getIsLogin();
    return object;
  }
  async get() {
    let response = await this.storageManager._get('userInfo');
    if (response.email || response.device) return response;
    let response2 = await this.getNewDeviceBasedToken();
    return response2;
  }
  // get user information form system storage
  async getUserInfo() {
    let response = await this.get();
    if (response.isLogin) {
      this.isLogin = response.isLogin;
    } else {
      this.isLogin = false;
    }
    if (response) {
      return response;
    }
    return false;
  }
  // Gets user login status in bool
  async clearUserSystemStorageInfo() {
    let response = await this.storageManager.remove('userInfo');
    // if (response) return response;
    return response;
  }

  async setNewUserIsLogin() {
    let response = await this.storageManager._set('newLogin', true);
    if (response) return response;
    return false;
  }
  async getNewUserIsLogin() {
    let response = await this.storageManager._get('newLogin');
    if (response) return response;
    return false;
  }
  async removeNewUserIsLogin() {
    let response = await this.storageManager.remove('newLogin');
    if (response) return response;
    return false;
  }
  async appOpenFirstTime() {
    let usedBefore = await this.getUserUsingFirstTime();
    if (usedBefore) {
      return false;
    }
    return true;
  }

  async setStoreUserInfo(data, type) {
    if (type != 'device') {
      let response = await this.getStoreUserInfo();
      let object = {
        loginFrom: type,
        isLogin: data.isLogin,
        device: response ? response.device : null,
        email: {
          isLogin: data.isLogin,
          token: data.token,
          email: data.email ? data.email : null,
          socialId: data.socialId ? data.socialId : null,
          loginFrom: type,
        },
      };
      let response2 = await this.set(object); // store login by email Info in system storage and also stores old device login information
      this.isLogin = true;
      this.isLoginEmail = true;
      this.isLoginDevice = true;
      return response2;
    }
    if (type == 'device') {
      let object = {
        loginFrom: type,
        isLogin: data.isLogin,
        email: null,
        device: {
          isLogin: data.isLogin,
          token: data.token,
          loginFrom: type,
        },
      };
      let response2 = await this.set(object); // // store login by device Info in system storage
      this.isLogin = true;
      this.isLoginDevice = true;
      return response2;
    }
  }
  async getStoreUserInfo() {
    let response = await this.get();
    return response;
  }
  async checkLogin() {
    let response = await this.get();
    if (response) {
      if (response.email) {
        if (response.email.token) {
          this.isLogin = true;
          return {
            status: response.email.token,
            tokenLength: response.email.token.length,
            type: 'email',
          };
        }
      }
      if (response.device) {
        if (response.device.token) {
          this.isLogin = true;
          return {
            status: response.device.token,
            tokenLength: response.device.token.length,
            type: 'email',
          };
        }
      }
    }
    return false;
  }

  async getIsLogin() {
    let response = await this.get();
    if (response) {
      if (response.email) {
        if (response.email.isLogin) {
          this.isLogin = true;
          this.isLoginEmail = true;
          return response.email.isLogin ? response.email.isLogin : false;
        }
      }
      if (response.device) {
        if (response.device.isLogin) {
          this.isLogin = true;
          this.isLoginDevice = true;
          return response.device.isLogin ? response.device.isLogin : false;
        }
      }
    }
    this.isLogin = false;
    return false;
  }
  async getToken() {
    let response = await this.get();
    if (response) {
      if (response.email) {
        return response.email.token ? response.email.token : false;
      }
      if (response.device) {
        return response.device.token ? response.device.token : false;
      }
      return false;
    }
  }
  async getDeviceBaseLoginInfo() {
    let response = await this.get();
    if (response) {
      return response.device ? response.device : false;
    }
    return false;
  }
  async getEmailBaseLoginInfo() {
    let response = await this.get();
    if (response) {
      return response.email ? response.email : false;
    }
    return false;
  }

  async getRefreshToken() {
    let response = await this.get;
    if (response) {
      if (response.email) {
        return response.email.refreshToken
          ? response.email.refreshToken
          : false;
      }
      if (response.device) {
        return response.device ? response.device.refreshToken : false;
      }
    }
    return false;
  }

  async getEmailIsLogin() {
    let response = await this.get();
    if (response) {
      if (response.email) {
        if (response.email.isLogin) {
        }

        response.email.isLogin ? response.email.isLogin : false;
      }
    }
    return false;
  }
  async getDeviceIsLogin() {
    let response = await this.get();
    if (response) {
      if (response.device) {
        return response.device.isLogin ? response.device.isLogin : false;
      }
    }
    return false;
  }

  async getLoginFrom() {
    let response = await this.get();
    if (response) {
      if (response.loginFrom) {
        return response.loginFrom ? response.loginFrom : false;
      }
    }
    return false;
  }
  async logOut() {
    let response = await this.get();
    if (response) {
      let object = {
        email: null,
        device: response.device ? response.device : null,
        loginFrom: response.device ? response.device.loginFrom : null,
        isLogin: response.device ? response.device.isLogin : false,
      };
      await this.set(object);
      this.isLoginEmail = false;
      this.getDeviceIsLogin = true;
      this.isLogin = true;
      return true;
    }
    this.isLoginEmail = false;
    this.getDeviceIsLogin = false;
    this.isLogin = false;
    return false;
  }
  // set user opened app for the first time
  async setUserUsingFirstTime() {
    this.storageManager._set('appUsedBefore', true);
  }
  // get if the user opened app for the first time

  async getUserUsingFirstTime() {
    let response = await this.storageManager._get('appUsedBefore');
    return response;
  }

  async getNewDeviceBasedToken() {
    try {
      let url = this.baseUrl.api2 + 'api/v4/auth/token';
      let response = await fetch(url);
      let responseJson = await response.json();
      if (responseJson.status === 404) {
        return false;
      }
      if (response.status === 501) {
        return false;
      }
      if (response.status === 200) {
        if (responseJson.response) {
          await this.setStoreUserInfo(
            {
              isLogin: responseJson.response.token ? true : false,
              token: responseJson.response.token
                ? responseJson.response.token
                : null,
            },
            (type = 'device'),
          );
          let response3 = await this.get();
          return response3;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  async responseToJSon(response) {
    let responseJson = await response.json();
    return responseJson;
  }
}
module.exports = {UserInfoStorage};
