

import { ApiManager } from './ApiManager/index'
export const UserServices = {
  getAllAlbum: async () => {
    let url = 'api/album/getAllAlbum';
    let body = { limit: 2, offset: 0 }
    let header = {}
    let response = await ApiManager.post(url, body, true, header)
    return response?.data ? response.data : response;
  },
  getAllAlbums: async () => {
    let url = 'api2/profile/health';
    let body = { limit: 2, offset: 0 }
    let header = {}
    let response = await ApiManager.get(url, body, false, header, 1)
    return response?.data ? response.data : response;
  }
}