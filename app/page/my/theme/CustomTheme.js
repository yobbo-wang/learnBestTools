/**
 * learnBestTools
 * 自定义主题颜色
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React, {Component} from "react"
import {
    StyleSheet,
    View,
    Image,
    Text,
    Platform,
    ScrollView,
    Modal,
    TouchableHighlight,
    Dimensions
} from "react-native"
import ThemeFactory, {ThemeFlags} from "../../../res/styles/ThemeFactory"
import ThemeDao from "../../../expand/ThemeUtil"
import GlobalStyles from '../../../res/styles/GlobalStyles'
import  {isIPhoneX} from '../../../expand/SafeUtils'
const height = Dimensions.get('window').height

export default class CustomTheme extends Component {
	constructor(props) {
        super(props)
        this.themeDao = new ThemeDao()
        this.state = {
            callback : this.props.callback,
            theme : this.props.theme
        }
    }

    //回调用来记录主题颜色，便于保存主题颜色
    onSelectTheme(themeKey) {
        this.state.callback(ThemeFactory.createTheme(ThemeFlags[themeKey].color)) 
    }

    renderCustomThemeView() {
        return (
            <ScrollView style = {styles.modalContainer}>
                {this.renderThemeItems()}
            </ScrollView>
        )
    }

    getThemeItem(themeKey) {
        return (
            <TouchableHighlight
                style={{flex: 1}}
                underlayColor='white'
                onPress={()=>this.onSelectTheme(themeKey)}>
                <View style={[{backgroundColor: ThemeFlags[themeKey].color}, styles.themeItem]}>
                    <Text style={styles.themeText}>{ThemeFlags[themeKey].key}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderThemeItems() {
        let views = []
        for (let i = 0, keys = Object.keys(ThemeFlags), l = keys.length; i < l; i += 3) {
            let key1 = keys[i], key2 = keys[i + 1], key3 = keys[i + 2]
            views.push(<View key={i} style={{flexDirection: 'row'}}>
                {this.getThemeItem(key1)}
                {this.getThemeItem(key2)}
                {this.getThemeItem(key3)}
            </View>)
        }
        return views
    }

    render() {
    	return(
	    	<View style={GlobalStyles.listView_container}>
                {this.renderCustomThemeView()}
            </View>
    	)
    }	

}	

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        margin: 10,
        // padding: 10, 安卓端会报错，找不到padding属性
        marginTop: Platform.OS === 'ios' ? 20 : 10,
        marginBottom: isIPhoneX ? 34 : 5,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding: 3
    },
    themeItem: {
        flex: 1,
        height: height / 7,
        margin: 3,
        padding: 3,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    themeText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }

})