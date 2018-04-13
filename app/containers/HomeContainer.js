/**
 * learnBestTools
 * 首页入口组件
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React, {Component} from 'react'
import { 
	StyleSheet,
	View, 
	Text, 
	Image,
  TouchableHighlight 
}from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../page/home/Index'
import * as homeCreators from '../actions/home'
import NavigationUtil from '../expand/NavigationUtil'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
            theme: this.props.screenProps.theme
        }
    }

	static navigationOptions = ({ navigation, screenProps}) => ({
	    title: '首页',
	    tabBarIcon: ({ tintColor }) => (
	    	<Image style={{width: 26, height: 26,resizeMode: 'contain',
            tintColor: tintColor == '#999999' ? tintColor :
                screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor 
            }} 
	    	source={require('../res/images/ic_polular.png')} />
	    ),
        headerStyle:{
            backgroundColor: screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={{color: tintColor == '#999999' ? tintColor : screenProps.appComponent.state.theme?
            screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor, fontSize:10}}>首页</Text>
        ),
        headerRight: (
            <View style={{flexDirection: 'row',}}>
                <TouchableHighlight
                    ref='button'
                    underlayColor='transparent'
                    onPress={()=>{
                        this.props.navigator.push({
                            component: SearchPage,
                            params: {
                                theme: this.state.theme,
                                ...this.props,
                            },
                        });
                    }}>
                    <View style={{padding:5, flexDirection: 'row'}}>
                        <Image
                            style={{width: 24, height: 24}}
                            source={require('../res/images/ic_search_white_48pt.png')}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        )
    })

	componentDidMount() {
        this.props.screenProps.appComponent.addSubscriber(this.onSubscriber)
    }

    componentWillUnmount() {
        this.props.screenProps.appComponent.removeSubscriber(this.onSubscriber);
    }

    onSubscriber = (updateTheme)=> {
        var changedValues = this.props.screenProps.appComponent.changedValues
        if (changedValues.app.themeChange && updateTheme) {
            this.setState({
                theme: updateTheme
            })
            NavigationUtil.setParams(this.props.navigation, this.props.navigation.state.key, updateTheme)
        }
    }

    render() {
    	return <Home {...this.props} />
  	}

}

//关联状态机
const mapStateToProps = (state) => {
  	const { home } = state
  	return {
    	home
  	}
}

const mapDispatchToProps = (dispatch) => {
  	const homeActions = bindActionCreators(homeCreators, dispatch)
  	return {
    	homeActions
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
