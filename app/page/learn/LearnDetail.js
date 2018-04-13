/**
 * learnBestTools
 * 本地学习详情
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
}
from 'react-native'

export default class LearnDetail extends Component {
	constructor(props) {
        super(props)
        this.state = {
            theme: this.props.screenProps.theme
        }
    }

	render() {
		return(
			<View>
				<Text style={{color: this.state.theme.themeColor}}>本地学习详情</Text>
			</View>
		)
	}

}
