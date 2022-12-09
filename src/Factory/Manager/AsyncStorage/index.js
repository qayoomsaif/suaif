// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


// This class is for general local storage
export default class StorageManager {
    // For string value
    async set(setDataKey, value) {
        try {
            let a = await AsyncStorage.setItem(setDataKey, (value));
            return (true)
        } catch (error) {
            return (false)
        }
    }

    // For Boolean value    
    async setBollean(setDataKey, value) {
        try {
            // From JSON to string
            await AsyncStorage.setItem(setDataKey, JSON.stringify(value));
            return (true)
        } catch (e) {
            return (false)
        }
    }

    // For Boolean value and dictionary values. Duplicate with setBoolean Func. Must be removed later
    async _set(setDataKey, value) {
        try {
            await AsyncStorage.setItem(setDataKey, JSON.stringify(value));
            return (true)
        } catch (e) {
            return (false)
        }
    }

    // For string value
    async get(getdata) {
        try {
            const value = await AsyncStorage.getItem(getdata);
            if (value && value != '') {
                return (value)
            }
            return (false)
        }
        catch (e) {
            return (false)
        }
    }

    // For Boolen value or dictionary value
    async _get(getdata) {
        try {
            var value = await AsyncStorage.getItem(getdata);
            if (value && value != '') {
                // From string to JSON
                return (JSON.parse(value))
            }
            return (false)
        } catch (e) {
            return (false)
        }
    }

    // Gets the key and removes key+value
    async remove(remove) {
        try {
            await AsyncStorage.removeItem(remove);
            return true
        } catch (error) {
            return false;
        }
    };
}
module.exports = { StorageManager }
