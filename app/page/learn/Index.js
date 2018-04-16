/**
 * learnBestTools
 * 学习
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
    StyleSheet,
}
from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import LocalLearn from './LocalLearn'

const category = [{key: 'recommend', tabLabel: '推荐'},
{key: 'localLearn', tabLabel: '本地学习'},
{key: 'classicalCouse', tabLabel: '精品课'},
{key: 'freeClassical', tabLabel: '免费课程'}]

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: this.props.screenProps.theme
        }
    }
    
    componentDidMount() {
        this.props.screenProps.appComponent.addSubscriber(this.onSubscriber)
    }

    componentWillUnmount() {
        this.props.screenProps.appComponent.removeSubscriber(this.onSubscriber);
    }

    // 回调改变主题颜色
    onSubscriber = (updateTheme)=> {
        var changedValues = this.props.screenProps.appComponent.changedValues
        if (changedValues.app.themeChange && updateTheme) {
            this.setState({
                theme: updateTheme
            })
        }
    }

    renderContent(key) {
        if(key == undefined) return null
        var options = {}    
        switch (key) {
          case 'recommend':
                return null
          case 'localLearn':
                return (<LocalLearn {...this.props} /> )
            break    
          case 'classicalCouse':
            
          case 'freeClassical':
            
          default:
            return null
        }
    }

    // 固定几个分类，其他自定义扩展，便于后期自定义添加功能
    learnConetnt() {
        // TODO 查询用户自定义分类，再加到列表中
        const content = category.map((item, i) => {
            const categoryView = (
                <View key={item.key} tabLabel={item.tabLabel} style={styles.base}>
                    {this.renderContent(item.key)}
                </View>
            )
            return categoryView
        })
        return content
    }

	render() {
    	return (
            <View style={styles.container}>
               <ScrollableTabView
                  renderTabBar={() => (
                    <ScrollableTabBar
                      tabStyle={styles.tab}
                      textStyle={styles.tabText}
                    />
                  )}
                  initialPage = {1}
                  tabBarBackgroundColor = {this.state.theme.themeColor}
                  tabBarUnderlineStyle = {styles.tabBarUnderline}
                  tabBarActiveTextColor= '#fff'
                  tabBarInactiveTextColor = '#f3f3f3'>
                    {this.learnConetnt()}
                </ScrollableTabView>
            </View>
        )
  	}
}	

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    tabBarUnderline: {
        backgroundColor: '#fff',
        height: 3
    },
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 13
    },
})
