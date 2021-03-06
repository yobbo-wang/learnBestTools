/**
 * learnBestTools
 * 公共试图组件处理类
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React  from 'react'
import {
    TouchableHighlight,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native'

export default class ViewUtils {
    static getSettingItem(callBack, icon, text, tintStyle, desc, expandableIco) {
        return (
            <TouchableHighlight
                onPress={callBack}>
                <View style={[styles.item_container, styles.setting_item]}>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        {icon ?
                            <Image source={icon} resizeMode='stretch'
                                   style={[{opacity: 1, width: 16, height: 16, marginRight: 10,}, tintStyle]}/> :
                            <View style={{opacity: 1, width: 16, height: 16, marginRight: 10,}} />
                            }
                        <Text>{text}</Text>
                    </View>

                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        {desc ? <Text>{desc}</Text> : null }
                        <Image source={expandableIco ? expandableIco : require('../res/images/ic_tiaozhuan.png')}
                           style={[{
                               marginRight: 10,
                               height: 22,
                               width: 22,
                               alignSelf: 'center',
                               opacity: 1
                           }, tintStyle]}/>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    static getClassifyHeader(callBack, icon, text, tintStyle, classifyStyle) {
        return (
            <TouchableHighlight
                onPress={callBack}>
                <View style={[styles.item_container, styles.classify_item, classifyStyle]}>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        {icon ?
                            <Image source={icon} resizeMode='stretch'
                                   style={[{opacity: 1, width: 16, height: 16, marginRight: 10,}, tintStyle]}/> :
                            <View style={{opacity: 1, width: 16, height: 16, marginRight: 10,}} />
                            }
                        <Text>{text}</Text>
                    </View>

                    <Image source={require('../res/images/ic_tiaozhuan.png')}
                           style={[{
                               marginRight: 10,
                               height: 22,
                               width: 22,
                               alignSelf: 'center',
                               opacity: 1
                           }, tintStyle]}/>
                </View>
            </TouchableHighlight>
        )
    }

    static getMoreButton(callBack) {
        return <TouchableHighlight
            ref='moreMenuButton'
            underlayColor='transparent'
            style={{padding:5}}
            onPress={callBack}>
            <View style={{paddingRight:8}}>
                <Image
                    style={{width: 24, height: 24, marginLeft: 5}}
                    source={require('../res/images/ic_more_vert_white_48pt.png')}
                />
            </View>
        </TouchableHighlight>
    }

    static getLeftButton(callBack) {
        return <TouchableOpacity
            style={{padding:8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../res/images/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    item_container: {
        backgroundColor: 'white',
        padding: 10, 
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    setting_item: {
        height: 60,
    },
    classify_item: {
        height: 45,  
        borderTopWidth: 10,
        borderColor: '#f3f3f4',
        borderStyle: null,
    },
})