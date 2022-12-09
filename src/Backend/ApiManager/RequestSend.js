import { generateApiError } from 'CustomError/genrateError';
import axios from 'axios';
export async function requestSend(url, data, headers, method) {
  let option = { url, method, headers, data };
  if (method == 'GET') { delete option.data }
  try {
    let response = await axios(option);
    if (response && response.status == 200 && response.data) {
      if (response.data.success) { return response.data.data; }
      return response.data;
    }
  } catch (e) {
    if (e?.response && !e?.mainType) {
      generateApiError(
        option,
        e.response,
        url,
        e && e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e &&
            e.response &&
            e.response.data &&
            e.response.data.error &&
            e.response.data.error.lenght &&
            e.response.data.error[0].msg
            ? e.response.data.error[0]
            : null,
        e &&
          e.response &&
          e.response.data &&
          e.response.data.error &&
          e.response.data.error.lenght
          ? e.response.data.error
          : e.response.data
            ? e.response.data
            : e.response,
      );
      if (e && !e.response && !e.mainType) {
        generateApiError(option, null, url, null, e.message ? e.message : e, e);
      }
    }
    throw e;
  }
}
export async function responseToJSon(option, response, url) {
  try {
    return await response.json();
  } catch (e) {
    generateApiError(option, response, url, null, 'json error', e);
    throw e;
  }
}
