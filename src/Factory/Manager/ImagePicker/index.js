import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class ImagePicker {
    constructor(permissions) {
        // this.permissions = permissions
    }

    async selectBanner() {
        let promise = new Promise(async (resolve) => {
            var options = {
                quality: 0.5, maxWidth: 800, maxHeight: 800, allowsEditing: false, title: 'Select Avatar',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };
            // let checkphoto = await this.permissions.checkMultiplePermission(['photo', 'camera'])

            // if (checkphoto) {
            // Shows image picker
            ImagePickers.showImagePicker(options, (response) => {
                if (response.didCancel) {
                    return resolve({ cancel: 'User cancelled image picker' })
                }
                if (response.error) {
                    return resolve({ error: response.error })
                }
                if (response.customButton) {
                    return resolve({ customButton: response.customButton })
                }
                let url = response.uri ? response.uri : null
                let uri = response.uri ? { uri: response.uri } : null;
                let base64 = response.data ? response.data : null
                return resolve({ url: url, uri: uri, base64: base64 })
            });
            return
            // }
            // return resolve({ permsission: 'Please allow camera or photo permsission.' })
        })
        return promise
    }

    launchCamera() {
        var options = {
            quality: 0.5, maxWidth: 800, maxHeight: 800, allowsEditing: false, title: 'Select Images',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            selectionLimit: 1
        };
        let promise = new Promise(async (resolve) => {
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    return resolve({ cancel: 'User cancelled camera action' })
                }
                if (response.error) {
                    return resolve({ error: response.error })
                }
                if (response.customButton) {
                    return resolve({ customButton: response.customButton })
                }
                return resolve({ attachments: response.assets })
            })
        });
        return promise
    }


    launchImageLibrary(selectionLimit = 0) {
        var options = {
            quality: 0.5, maxWidth: 800, maxHeight: 800, allowsEditing: false, title: 'Select Images',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            selectionLimit: selectionLimit
        };
        let promise = new Promise(async (resolve) => {
            launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    return resolve({ cancel: 'User cancelled image picker' })
                }
                if (response.error) {
                    return resolve({ error: response.error })
                }
                if (response.customButton) {
                    return resolve({ customButton: response.customButton })
                }
                return resolve({ attachments: response.assets })
            })
        });
        return promise
    }
}
module.exports = { ImagePicker }