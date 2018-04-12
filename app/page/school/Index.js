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
            theme: this.props.screenProps.theme
        }
    }

	render() {
    	return <View><Text>校园</Text></View>
  	}
}	