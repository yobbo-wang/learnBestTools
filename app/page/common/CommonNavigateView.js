/**
 * learnBestTools
 * 新窗口公共模版
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
  StyleSheet,
 } from 'react-native'
import NavigationUtil from '../../expand/NavigationUtil'

export default class CommonNavigateView extends Component{
  	constructor(props) {
          super(props)
          this.state = {
              theme: this.props.screenProps.theme,
          }
    }

  	static navigationOptions = ({ navigation, screenProps }) => ({
  	    title: navigation.state.params.title,
  	    headerStyle: {
            backgroundColor: screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor 
        },
        headerRight: navigation.state.params.headerRight ? navigation.state.params.headerRight() : null
    })


    componentDidMount() {
        if(this.props.navigation.state.params.openCommonNavigateViewAfterCallback){
            this.props.navigation.state.params.openCommonNavigateViewAfterCallback(this.props.navigation)
        }
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
            NavigationUtil.setParams(this.props.navigation, this.props.navigation.state.key, updateTheme)
        }
    }
 
    //从参数中获取公共组件进行熏染
    getRenderCotent() {
        const componentList = this.props.navigation.state.params.componentList
        let pages =[]
        for (let i = 0; i < componentList.length; i++) {
            pages.push(componentList[i])
        }
        return(
            <View style={styles.container}>{pages}</View>
        )
    }
    
	render() {
		return this.getRenderCotent()
	}	

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
