/**
 * learnBestTools
 *     搜索框公共模版
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
    Platform,
} from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles'

const width = Dimensions.get('window').width

export default class SearchHeader extends React.Component {
    constructor(props) {
          super(props)
          this.state = {
              theme: this.props.screenProps.theme,
          }
    }

    render() {
        return (
            <View style={{
                backgroundColor: this.state.theme.themeColor,
                height: Platform.OS==='ios'? GlobalStyles.nav_bar_height_ios : GlobalStyles.nav_bar_height_android,
                flexDirection: 'row',
                alignItems: 'space-between',
            }}>
                <TextInput
                ref="input"
                style={styles.textInput}
                autoFocus={true}
                underlineColorAndroid="white"
                placeholder="输入课程名、老师、专业查询"
                placeholderTextColor="white"
                clearTextOnFocus={true}
                clearButtonMode="while-editing"
                onChangeText = {() => {}}
                />
            </View>
        )
    }
}
/*alignItems: 'center', 
                flexDirection: 'row'*/
const styles = StyleSheet.create({
    statusBar: {
        height: 20,
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    textInput: {
        width: width - 100,
        height: (Platform.OS === 'ios') ? 30 : 40,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center', 
        borderRadius: 3,
        opacity: 0.7,
        color:'white'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        flex: 1,
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        height: 40,
        position: 'absolute',
        left: 10,
        top: GlobalStyles.window_height-45-(Platform.OS === 'ios' ? 0:25),
        right: 10,
        bottom: 0,
        alignSelf: 'flex-end',
        borderRadius: 3,

    },
})