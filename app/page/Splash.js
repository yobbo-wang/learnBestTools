/*
* Splash.js	启动页
*/
import React, {Component} from 'react'
import { Dimensions, Animated } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import NavigationUtil from '../expand/NavigationUtil'

const maxHeight = Dimensions.get('window').height
const maxWidth = Dimensions.get('window').width
const splashImg = require('../res/images/splash.png') //TODO上线后，动态更改启动图

export default class Splash extends Component{
	static navigationOptions = {
    	header: null
  	}

  	constructor(props) {
	    super(props)
	    this.state = {
	      bounceValue: new Animated.Value(1)
	    }
  	}

  	componentDidMount() {
  		const { navigate } = this.props.navigation
	    Animated.timing(this.state.bounceValue, {
	      toValue: 1.2,
	      duration: 1000
	    }).start()
	    SplashScreen.hide()
	    this.timer = setTimeout(() => {
	      	NavigationUtil.reset(this.props.navigation, 'Home') //需要把props一层层往下传递
	    }, 1000)
  	}

  	componentWillUnmount() {
    	clearTimeout(this.timer)
  	}

  	render() {
	    return (
	      <Animated.Image
	        style={{
	          width: maxWidth,
	          height: maxHeight,
	          transform: [{ scale: this.state.bounceValue }]
	        }}
	        source={splashImg}
	      />
	    )
  	}
}