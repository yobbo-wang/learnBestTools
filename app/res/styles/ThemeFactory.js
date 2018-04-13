/**
 * learnBestTools
 * 全部主题颜色定义
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
'use strict'
import {
    StyleSheet,
} from 'react-native'

export const ThemeFlags = {
    Default: {color: '#3e9ce9', key: '默认'},
    Red : {color:'#F44336', key: '红'},
    Pink: {color: '#E91E63', key: '粉红'},
    Purple: {color: '#9C27B0', key: '紫'},
    DeepPurple: {color: '#673AB7', key: '深紫'},
    Indigo: {color: '#3F51B5', key: '靛蓝'},
    Blue: {color: '#2196F3', key: '蓝'},
    LightBlue: {color: '#03A9F4', key: '淡蓝'},
    Cyan: {color: '#00BCD4', key: '蓝绿'},
    Teal: {color: '#009688', key: '青色'},
    Green: {color: '#4CAF50', key: '绿'},
    LightGreen: {color: '#8BC34A', key: '深绿'},
    Lime: {color: '#CDDC39', key: '石灰'},
    Yellow: {color: '#FFEB3B', key: '黄'},
    Amber: {color: '#FFC107', key: '琥珀色'},
    Orange: {color: '#FF9800', key: '橙色'},
    DeepOrange: {color: '#FF5722', key: '深橙'},
    Brown: {color: '#795548', key: '棕色'},
    Grey: {color: '#9E9E9E', key: '灰色'},
    BlueGrey: {color: '#607D8B', key: '蓝灰色'},
    Black: {color: '#000000', key: '黑色'}
}

export default class ThemeFactory {
    // constructor(themeFlag) {
    //     this.themeFlag = themeFlag;
    //     this.theme = this.createTheme();
    // }

    static createTheme(themeFlag) {
        return {
            themeColor : themeFlag,
            styles : StyleSheet.create({
                selectedTitleStyle:{
                    color: themeFlag
                },
                tabBarSelectedIcon: {
                    tintColor: themeFlag
                },
                navBar:{
                    backgroundColor:themeFlag,
                },
                themeColor:{
                    color:themeFlag
                },

            })
        }
    }
}

