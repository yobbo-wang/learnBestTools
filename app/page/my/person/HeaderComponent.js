/**
 * learnBestTools
 * 我的个人信息
 *   上线后，个人头像的背景颜色要还原
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
	TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} 
from 'react-native'
import GlobalStyles from '../../../res/styles/GlobalStyles'

const width = Dimensions.get('window').width

export default class HeaderComponent extends Component {

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

   renderAllItem() {
      const MiddleData = [
        {"img": require('../img/ic_view_quilt.png'), "title": "最新学习", key: "learn"},
        {"img": require('../../../res/images/ic_favorite.png'), "title": "我的收藏", key: "learn2"},
        {"img": require('../img/ic_insert_emoticon.png'), "title": "我的实战", key: "learn3"},
        {"img": require('../img/ic_check_box_outline_blank.png'), "title": "我的路径", key: "learn4"}
      ]
      let itemArr = [];
      for(let i=0; i<MiddleData.length; i++){
          let data = MiddleData[i]
          itemArr.push(
            <TouchableOpacity key={data.key} activeOpacity={0.5} onPress={()=>{
              
            }}>
                <View style={styles.innerViewStyle}>
                    <Image source={data.img} style={[{width:30, height:30, marginBottom:3}, this.state.theme.styles.tabBarSelectedIcon]}/>
                    <Text style={{color:'#2b333b', fontSize: 11}}>{data.title}</Text>
                </View>
            </TouchableOpacity>
          )
      }
      return itemArr
  }

	render() {
    	return (
        <View>
      		<TouchableHighlight onPress= {() => {
              alert('个人主页')
          }}>
              <View style={[styles.item, {height: 80}]}>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                      <Image source={require('../../../res/images/ic_trending.png')}
                             style={[{width: 40, height: 40, marginRight: 10}, this.state.theme.styles.tabBarSelectedIcon]}/>
                      <Text>冬天里的一把火</Text>
                  </View>
                  <Image source={require('../../../res/images/ic_tiaozhuan.png')}
                         style={[{opacity: 1,marginRight: 10,height: 22,width: 22,alignSelf: 'center',}, 
                         this.state.theme.styles.tabBarSelectedIcon]}/>
              </View>
          </TouchableHighlight>
          <View style={{height:1}} ><Text></Text></View>
          <TouchableHighlight onPress = {() => {}}>
              <View style={[styles.item, {height: 60}]}>
                   <View style={{alignItems: 'center', flexDirection: 'row', justifyContent:'space-around'}}>
                        {this.renderAllItem()}
                   </View>
              </View>
          </TouchableHighlight>
        </View>
        
    	)
  	}

}	

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 10, 
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    innerViewStyle:{
        width: width/4,
        height:70,
        justifyContent:'center',
        alignItems:'center'
    }
})