/**
* home index.js
*/

import React, {Component} from 'react'
import {
	View, 
	Text,
	Image
} 
from 'react-native'

export default class Index extends Component {

	constructor(props) {
        super(props)
        this.state = {
            screenProps: this.props.screenProps
        }
    }   	

	static navigationOptions = ({ navigation,screenProps }) => ({
	    title: '校园',
	    tabBarIcon: ({ tintColor }) => (
	    	<Image style={{width: 26, height: 26,resizeMode: 'contain',tintColor: tintColor == '#999999' ? tintColor : screenProps.themeColor}} 
	    	source={require('../../res/images/ic_favorite.png')} />
	    ),
	    headerStyle:{
        	backgroundColor: screenProps.themeColor
      	},
      	tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={{color: tintColor == '#999999' ? tintColor : screenProps.themeColor, fontSize:10}}>校园</Text>
        ),
  	})

	render() {
    	return <View><Text>校园</Text></View>
  	}
}	