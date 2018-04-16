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
	SectionList,
	TouchableHighlight,
	StyleSheet,
} 
from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles'
import ViewUtils from '../../expand/ViewUtils'
import {MoreMenu} from '../common/MoreMenu'
import NavigationUtil from '../../expand/NavigationUtil'
import CustomTheme from './theme/CustomTheme'
import ThemeDao from "../../expand/ThemeUtil"
import HeaderComponent from './person/HeaderComponent'

let changeThemeColor = null, commonNavigation = null
export default class Index extends Component {
	constructor(props) {
        super(props)
        this.state = {
            theme: this.props.screenProps.theme
        }
    } 
    
	onClick(tab, title) {
        let key, componentList = []
        const params = {theme: this.state.theme, title}
        switch(tab){
            case MoreMenu.Custom_Key:
                key = 'my-theme-CommonNavigateView'
                componentList.push(<CustomTheme {...this.props} key = {key} callback = {this.callbackChangeTheme.bind(this)} />)
                params.componentList = componentList
                params.headerRight = this.getThemeHeaderRight.bind(this)
                params.openCommonNavigateViewAfterCallback = this.openCommonNavigateViewAfterCallback.bind(this)
            break
        }
        if(key != undefined && componentList.length > 0){
            //定义所有组件用参数传给公共渲染组件显示
            NavigationUtil.navigate(this.props.navigation, 'CommonNavigateView', params, key)
        }
	}	

    //定义主题颜色头部导航右边显示
    getThemeHeaderRight() {
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
        var sections = [
            { key: "我的学习", data: [
                { title: "消息中心", id: MoreMenu.Message_Center, img: require('./img/ic_custom_language.png') },
                { title: "我的收藏", id: MoreMenu.My_Favorite , img: require('../../res/images/ic_favorite.png')}, 
                { title: "我的课堂",  id: MoreMenu.My_Calssify , img: require('../../res/images/ic_favorite.png')},
                { title: "学习记录",  id: MoreMenu.Learn_Record, img: require('../../res/images/ic_favorite.png') }
            ]},
            { key: "系统", data: [
                { title: "积分换书", id: MoreMenu.Integral_Book,img: require('./img/ic_custom_language.png'), activity: "0元好书在这里" },
                { title: "帮助", id: MoreMenu.Help, img: require('../../res/images/ic_favorite.png') }, 
                { title: "设置",  id: MoreMenu.Setting, img: require('../../res/images/ic_favorite.png') },
                { title: "主题颜色",  id: MoreMenu.Custom_Key, img: require('./img/ic_view_quilt.png') }
            ]}
        ]
    	return (
    		<View style={GlobalStyles.listView_container}>
    			 <SectionList
                        ListHeaderComponent = {(<HeaderComponent {...this.props} />)}
                        renderSectionHeader = {(data) => {
                            return  <Text style={styles.groupTitle}>{data.section.key}</Text>
                        }}
                        renderItem = {(data) => {
                            return this.getItem(data.item.id, data.item.img, data.item.title, data.item.activity)
                        }}
                        sections = {sections}
                        ItemSeparatorComponent= {() => {
                            return (<View style={{height:1}} ><Text></Text></View>)
                        }}
                 /> 
    		</View>
    	)
  	}

}

const styles = StyleSheet.create({
    groupTitle: {
        // fontWeight:'500',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray'

    },
})