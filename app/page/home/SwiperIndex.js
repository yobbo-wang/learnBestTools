/**
 * learnBestTools
 * 轮播组件
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
  Platform,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import Swiper from 'react-native-swiper'

const isIOS = Platform.OS == 'ios'
const width = Dimensions.get('window').width
const images = [{src:require('../../res/images/1.jpg')},{src:require('../../res/images/2.jpg')},
{src:require('../../res/images/3.jpg')},{src:require('../../res/images/4.jpg')},
{src:require('../../res/images/5.jpg')},{src:require('../../res/images/6.jpg')}]

export default class SwiperIndex extends Component {
    render() {
      return(
        <View style = {styles.container}>
          <Swiper style = {styles.wrapper} autoplay = {true} height = {120} loadMinimalSize={6} loadMinimal={true} 
          paginationStyle={{bottom:10}}
          activeDotStyle={{backgroundColor: this.props.themeColor}}
          >
            {
              images.map((item, i) => {
                  let render = (
                      <View style={styles.slide} >
                          <Image source={images[i].src} style={styles.image} />
                      </View>
                  )
                  return (
                      isIOS ?(
                          <TouchableHighlight key={i} onPress={() => {
                            
                          }}>{render}</TouchableHighlight>
                      ):(
                          <TouchableNativeFeedback key={i} onPress={() => {
                            
                          }}>{render}</TouchableNativeFeedback>
                      )
                  )
              })
            }

          </Swiper>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 5,
  },
  wrapper: {

  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'transparent'
  },
  image: {
    height: 120,
    width: width - 10,
    resizeMode:Image.resizeMode.cover,
    borderRadius: 5,
  },
  
})
