/**
 * learnBestTools
 * 我的
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React, {Component} from 'react'
import {
	View, 
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	StyleSheet
} 
from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles'
import ViewUtils from '../../expand/ViewUtils'
import {MoreMenu} from '../common/MoreMenu'
import NavigationUtil from '../../expand/NavigationUtil'
import CustomTheme from './CustomTheme'
import ThemeDao from "../../expand/ThemeUtil"

let changeThemeColor = null, commonNavigation = null
export default class Index extends Component {
	constructor(props) {
        super(props)
        this.state = {
            theme: this.props.screenProps.theme
        }
    } 
    
	onClick(tab, title) {
        //定义所有组件用参数传给公共熏染组件显示
        let componentList = [<CustomTheme {...this.props} callback = {this.callbackChangeTheme.bind(this)} />],
        openCommonNavigateViewAfterCallback = this.openCommonNavigateViewAfterCallback.bind(this),
        key = 'my-index-CommonNavigateView'
        const headerRight = this.getHeaderRight.bind(this)
        const params = {menuType: tab, theme: this.state.theme, title, componentList, headerRight, openCommonNavigateViewAfterCallback}
        NavigationUtil.navigate(this.props.navigation, 'CommonNavigateView', params, key)
	}	

    //定义头部导航右边显示
    getHeaderRight() {
        return (
            <View style={{flexDirection: 'row',}}>
                <TouchableHighlight
                    ref='button'
                    underlayColor='transparent'
                    onPress={()=>{
                        if(changeThemeColor != null && commonNavigation != null) {
                            new ThemeDao().save(changeThemeColor)
                            NavigationUtil.back(commonNavigation, commonNavigation.state.key)
                            changeThemeColor = null, commonNavigation = null
                        }
                    }}>
                    <View style={{padding:5, flexDirection: 'row'}}>
                        <Image
                            style={{width: 32, height: 32}}
                            source={require('../../res/images/ic_done.png')}
                        />
                    </View>
                </TouchableHighlight>
              </View>
        )
    }

    openCommonNavigateViewAfterCallback(navigation) {
        if(navigation != undefined){
            commonNavigation = navigation
        }
    }

    callbackChangeTheme(updateTheme) {
        if(updateTheme != undefined){
            changeThemeColor = updateTheme.themeColor
            this.setState({
                theme: updateTheme
            })
            // 更新所有页面的颜色
            this.props.screenProps.appComponent.onThemeChange(updateTheme)
        }
    }

	getItem(tag, icon, text, desc, expandableIco) {
        return ViewUtils.getSettingItem( () => this.onClick(tag, text), icon, text, this.state.theme.styles.tabBarSelectedIcon, desc, expandableIco)
    }

	render() {
    	return (
    		<View style={GlobalStyles.listView_container}>
    			<ScrollView >
    				<TouchableHighlight
                        onPress= {() => this.onClick('my info')}>
                        <View style={[styles.item, {height: 80}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_trending.png')}
                                       style={[{width: 40, height: 40, marginRight: 10}, this.state.theme.styles.tabBarSelectedIcon]}/>
                                <Text>冬天里的一把火</Text>
                            </View>
                            <Image source={require('../../res/images/ic_tiaozhuan.png')}
                                   style={[{
                                       opacity: 1,
                                       marginRight: 10,
                                       height: 22,
                                       width: 22,
                                       alignSelf: 'center',
                                   }, this.state.theme.styles.tabBarSelectedIcon]}/>
                        </View>
                    </TouchableHighlight>
                    <View style={GlobalStyles.line} />
                    
                    <Text style={styles.groupTitle}>我的学习</Text>
                    <View style={GlobalStyles.line} />
					{this.getItem('MoreMenu.Custom_Language', require('./img/ic_custom_language.png'), '消息中心')}
					<View style={GlobalStyles.line} />
                    {this.getItem('MoreMenu.Sort_Language', require('../../res/images/ic_favorite.png'), '我的收藏')}
					<View style={GlobalStyles.line} />
					{this.getItem('MoreMenu.Sort_Language', require('../../res/images/ic_favorite.png'), '我的课堂')}
					<View style={GlobalStyles.line} />
					{this.getItem('MoreMenu.Sort_Language', require('../../res/images/ic_favorite.png'), '学习记录')}
					
					<Text style={styles.groupTitle}>系统相关</Text>
					<View style={GlobalStyles.line} />
					{this.getItem('MoreMenu.Custom_Language', require('./img/ic_custom_language.png'), '积分换书', '0元好书在这里')}
					<View style={GlobalStyles.line} />
					<View style={GlobalStyles.line} />
                    {this.getItem('MoreMenu.Sort_Language', require('../../res/images/ic_favorite.png'), '帮助')}
					<View style={GlobalStyles.line} />
					{this.getItem('MoreMenu.Sort_Language', require('../../res/images/ic_favorite.png'), '设置')}
                    <View style={GlobalStyles.line} />
                    {this.getItem(MoreMenu.Custom_Theme, require('./img/ic_view_quilt.png'), '主题颜色')}
                    <View style={[{marginBottom: 60}]}/>

    			</ScrollView>
                
    		</View>
    	)
  	}

}	

/*
 <TouchableHighlight>
                        <View style={[styles.item, {height: 50}]}>
                             <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                    状态栏
                             </View>
                        </View>
                    </TouchableHighlight>
                    <View style={GlobalStyles.line} />

*/

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 10, 
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    groupTitle: {
        // fontWeight:'500',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray'

    },
})