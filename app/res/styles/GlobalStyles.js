/**
 * learnBestTools
 * 全局样式定义
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import {
    Dimensions,
} from 'react-native'

const {height, width} = Dimensions.get('window');

module.exports ={
    line: {
        flex: 1,
        height: 0.6,
        opacity: 1,
        backgroundColor: 'darkgray',
        left: 36,
    },
    cell_container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:2
    },
    listView_container:{
        flex: 1,
        backgroundColor: '#f3f3f4',
    },
    backgroundColor: '#f3f3f4',
    listView_height:(height-(20+40)),
    window_height:height,
    window_width:width,
    nav_bar_height_ios:44,
    nav_bar_height_android:50,

};