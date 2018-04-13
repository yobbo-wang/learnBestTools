/**
 * learnBestTools
 * 学习版块入口组件
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
	TouchableHighlight, 
}from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Learn from '../page/learn/Index'
import * as learnCreators from '../actions/learn'
import ViewUtils from '../expand/ViewUtils'
import NavigationUtil from '../expand/NavigationUtil'

class LearnContainer extends Component {
	constructor(props) {
        super(props)
        this.state ={
            theme: this.props.screenProps.theme
        }
    } 

    static navigationOptions = ({ navigation, screenProps }) => ({
	    title: '学习',
	    tabBarIcon: ({ tintColor }) => (
	    	<Image style={{width: 26, height: 26,resizeMode: 'contain',tintColor: tintColor == '#999999' ? tintColor : 
	    		screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor
	    	}} 
	    	source={require('../res/images/ic_trending.png')} />
	    ),
        headerStyle:{
            backgroundColor: screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={{color: tintColor == '#999999' ? tintColor : screenProps.appComponent.state.theme?
            screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor, fontSize:10}}>学习</Text>
        ),
	    headerRight: (
	      	<View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                    ref='button'
                    underlayColor='transparent'
                    onPress={()=>{
                        this.props.navigator.push({
                            component: SearchPage,
                            params: {
                                theme:this.state.theme,
                                ...this.props,
                            },
                        });
                    }}>
                    <View style={{padding:5}}>
                        <Image
                            style={{width: 24, height: 24}}
                            source={require('../res/images/ic_search_white_48pt.png')}
                        />
                    </View>
                </TouchableHighlight>
                {ViewUtils.getMoreButton(()=>this.refs.moreMenu.open())}
            </View>
    	)
  	})

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
            NavigationUtil.setParams(this.props.navigation, this.props.navigation.state.key, updateTheme)
        }
    }

    render() {
    	return <Learn {...this.props} />
  	}

}	

//关联状态机
const mapStateToProps = (state) => {
  	const { learn } = state
  	return {
    	learn
  	}
}

const mapDispatchToProps = (dispatch) => {
  	const learnActions = bindActionCreators(learnCreators, dispatch)
  	return {
    	learnActions
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnContainer)