import { requestSend } from './RequestSend';
import { UserInfoStorage } from 'Factory';
import { BASEURLS } from '../enviroments'
const getHeaders = async (isLogin, contentType, header) => {
  let Content_Type = 'application/json'
  switch (contentType) {
    case 0:
      Content_Type = 'application/json'
      break;
    case 1:
      Content_Type = 'multipart/form-data'
      break;
    case 2:
      Content_Type = 'application/x-www-form-urlencoded'
      break;
    default:
      Content_Type = Content_Type
      break;
  }
  let requestHeader = { Accept: 'application/json', 'Content-Type': Content_Type, };
  if (isLogin) {
    let response ={token: '123222'};
    // let response = await UserInfoStorage.get();
    if (response && response.token) {
      requestHeader = Object.assign(requestHeader, { Authorization: 'Bearer ' + response.token, });
    } else { }
  }
  if (header) { requestHeader = Object.assign(requestHeader, header) }
  return requestHeader
}

const getUrl = async (url, baseUrlType) => {
  switch (baseUrlType) {
    case 0:
      return BASEURLS.API + url
    case 1:
      return BASEURLS.BASE_URL + url
    case 2:
      return BASEURLS.BASE_URL2 + url
    case 4:
      return BASEURLS.BASE_URL3 + url
    default:
      return url
  }
}


export const ApiManager = {
  get: async (url, body = {}, isLogin = false, header = {}, baseUrlType = 0, contentType = 0,) => {
    let endpoint = await getUrl(url, baseUrlType)
    let headers = await getHeaders(isLogin, contentType, header)
    return await requestSend(endpoint, null, headers, 'GET');
  },
  post: async (url, body = {}, isLogin = false, header = {}, baseUrlType = 0, contentType = 0,) => {
    let endpoint = await getUrl(url, baseUrlType)
    let headers = await getHeaders(isLogin, contentType, header)
    return await requestSend(endpoint, body, headers, 'post');
  },
  put: async (url, body = {}, isLogin = false, header = {}, baseUrlType = 0, contentType = 0,) => {
    let endpoint = await getUrl(url, baseUrlType)
    let headers = await getHeaders(isLogin, contentType, header)
    return await requestSend(endpoint, body, headers, 'PUT');
  },
  patch: async (url, body = {}, isLogin = false, header = {}, baseUrlType = 0, contentType = 0,) => {
    let endpoint = await getUrl(url, baseUrlType)
    let headers = await getHeaders(isLogin, contentType, header)
    return await requestSend(endpoint, body, headers, 'PATCH');
  },
  delete: async (url, body = {}, isLogin = false, header = {}, baseUrlType = 0, contentType = 0,) => {
    let endpoint = await getUrl(url, baseUrlType)
    let headers = await getHeaders(isLogin, contentType, header)
    return await requestSend(endpoint, body, headers, 'DELETE');
  },
};
