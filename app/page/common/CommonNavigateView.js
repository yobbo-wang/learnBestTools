/*
* 公共窗口
*/

import React, {Component} from 'react'
import { 
	View,
	Text,
  TouchableHighlight,
  Image
 } from 'react-native'
import CustomThemePage from '../my/CustomTheme'
import {MoreMenu} from '../common/MoreMenu'
import ThemeDao from "../../expand/ThemeUtil"
import NavigationUtil from '../../expand/NavigationUtil'

export default class CommonNavigateView extends Component{
  	constructor(props) {
          super(props)
          this.state = {
              params: this.props.navigation.state.params,
          }
    }

  	static navigationOptions = ({ navigation, screenProps }) => ({
  	    title: navigation.state.params.title,
  	    headerStyle: {
            backgroundColor: navigation.state.params.theme.themeColor
        },
        headerRight: CommonNavigateView.getHeaderRight(navigation)
    })

    static getHeaderRight(navigation){
        const menuType =  navigation.state.params.menuType
        let headerRightView = null
        switch(menuType){
            case MoreMenu.Custom_Theme:
              headerRightView = (
                  <View style={{flexDirection: 'row',}}>
                    <TouchableHighlight
                        ref='button'
                        underlayColor='transparent'
                        onPress={()=>{
                            if(navigation.state.params.changeTheme){
                                new ThemeDao().save(navigation.state.params.theme.themeColor)
                            }
                            navigation.goBack()
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
              break
        }
        return headerRightView
    }

    callbackSelectTheme(updateTheme) {
        if(updateTheme != undefined){
            // 更新所有页面的颜色
            NavigationUtil.setParams( this.props.navigation, this.props.navigation.state.key, 
              {...this.state.params, theme: updateTheme, changeTheme: true} )
            this.props.screenProps.appComponent.onThemeChange(updateTheme)
        }
    }

  	getRenderCotent() {
  		const menuType = this.props.navigation.state.params.menuType
  		let TargetComponent = null, callback = null
  		switch (menuType) {
  			case MoreMenu.Custom_Theme:
  				TargetComponent = CustomThemePage
          callback = this.callbackSelectTheme
          break
  		}
  		return <TargetComponent callback = {callback.bind(this)}  theme = {this.state.params.theme} />
  	}

	render() {
		return this.getRenderCotent()
	}	

}
