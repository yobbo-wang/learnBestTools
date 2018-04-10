/*
*
*/
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
          <Swiper style = {styles.wrapper} autoplay = {false} height = {120} >
            {
              images.map((item, i) => {
                  let render = (
                      <View style={styles.slide}>
                          <Image source={images[i].src} style={[{width: 15}, styles.image, styles.raduisRight]} />
                          <Image source={images[i].src} style={[styles.image,styles.raduis, {width: width - 50}]} />
                          <Image source={images[i].src} style={[{width: 15}, styles.image, styles.raduisLeft]} />
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
      paddingTop: 5,
      paddingBottom: 5,
  },
  wrapper: {

  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 5,
    marginLeft: 5,
    height: 120,
    // width: width - 90,
    // resizeMode:Image.resizeMode.cover,
    // borderRadius: 5,
  },
  raduis: {
    borderRadius: 5,
  },
  raduisRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  raduisLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  }
  
})
