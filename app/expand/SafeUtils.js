/*
* 用来获取是不是iphoneX
 */

import {
  DeviceInfo,
  Platform,
  NativeModules,
  
} from 'react-native'

const { PlatformConstants = {} } = NativeModules;
const { minor = 0 } = PlatformConstants.reactNativeVersion || {};

// 用于判断是不是iphoneX
export const isIPhoneX = (() => {
  if (Platform.OS === 'web') return false;

  if (minor >= 50) {
    return DeviceInfo.isIPhoneX_deprecated
  }

  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
  )
})()

