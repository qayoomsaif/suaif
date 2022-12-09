import { createNavigationContainerRef, StackActions } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef()
export function navigate(name, params) {
    if (navigationRef.isReady()) {
        try {
            // Perform navigation if the react navigation is ready to handle actions
            navigationRef.navigate(name, params);
            return true
        } catch (error) {
            return false
        }
    } else {
        return false
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}
export function popToTop(name, params) {
    if (navigationRef.isReady()) {
        try {
            navigationRef.dispatch(StackActions.popToTop());
            // Perform navigation if the react navigation is ready to handle actions
            return true
        } catch (error) {
            return false
        }
    } else {
        return false
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}
export function PopTo(name) {
    if (navigationRef.isReady()) {
        try {
            navigationRef.dispatch(StackActions.pop(name));
            // StackActions.pop({key:})
            // navigationRef.dispatch(StackActions.popToTop());
            // Perform navigation if the react navigation is ready to handle actions
            return true
        } catch (error) {
            return false
        }
    } else {
        return false
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}
export function push(name, params) {
    if (navigationRef.isReady()) {
        try {
            // Perform navigation if the react navigation is ready to handle actions
            navigationRef.navigate(name, params);
            return true
        } catch (error) {
            return false
        }
    } else {
        return false
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}
export function goBack() {
    if (navigationRef.isReady()) {
        try {
            navigationRef.goBack()
            return true
        } catch (error) {
            return false
        }
    }
    return false
}
export function isFocused() {
    if (navigationRef.isReady()) {
        try {
            return navigationRef.isFocused()
        } catch (error) {
            return false
        }
    }
    return false
}
export function isBack() {
    if (navigationRef.isReady()) {
        try {
            return navigationRef.canGoBack()
        } catch (error) {
            return false
        }
    }
    return false
}