/**
 * learnBestTools
 * 主题颜色处理工具类
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'

import {
    AsyncStorage,
} from 'react-native'
import ThemeFactory, {ThemeFlags} from '../res/styles/ThemeFactory'
const THEME_KEY = 'theme_key'

export default class ThemeDao {
    getTheme() {
        return new Promise((resolve, reject)=> {
            AsyncStorage.getItem(THEME_KEY, (error, result)=> {
                if (error) {
                    reject(error);
                    return;
                }
                if (!result) {
                    this.save(ThemeFlags.Default.color);
                    result = ThemeFlags.Default.color;
                }
                resolve(ThemeFactory.createTheme(result));
            });
        });
    }

    save(themeFlag) {
        AsyncStorage.setItem(THEME_KEY, themeFlag, (error, result)=> {

        });
    }
}