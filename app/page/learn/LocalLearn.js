/**
 * learnBestTools
 * 本地学习
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
    TouchableNativeFeedback,
    Platform,
    Dimensions,
    ScrollView,
    TextInput,
}
from 'react-native'
import Swiper from 'react-native-swiper'
import px2pd from '../../expand/px2dp'
import SwiperIndex from '../home/SwiperIndex'
import LearnDetail from './LearnDetail'
import NavigationUtil from '../../expand/NavigationUtil'
import SearchHeader from '../common/SearchHeader'

const isIOS = Platform.OS == 'ios'
const {width,height} = Dimensions.get('window')
const headH = px2pd(isIOS? 140 : 120)

const imgTypes = [{src:require('./images/1.jpg')},
{src:require('./images/2.jpg')},{src:require('./images/3.jpg')},
{src:require('./images/4.jpg')},{src:require('./images/5.jpg')},
{src:require('./images/6.jpg')},{src:require('./images/7.jpg')},
{src:require('./images/8.jpg')},{src:require('./images/9.jpg')},
{src:require('./images/10.jpg')},{src:require('./images/1.jpg')},
{src:require('./images/2.jpg')},{src:require('./images/3.jpg')},
{src:require('./images/4.jpg')},{src:require('./images/5.jpg')},
{src:require('./images/6.jpg')}]

export default class LocalLearn extends Component {
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

    toLearnDesc() {
        //定义所有组件用参数传给公共渲染组件显示
        let componentList = [<LearnDetail {...this.props} />], key = 'LocalLearn-CommonNavigateView'
        const params = {theme: this.state.theme, title : '实验讲义', componentList}
        params.headerRight = this.getThemeHeaderRight.bind(this)
        NavigationUtil.navigate(this.props.navigation, 'CommonNavigateView', params, key)
    }

    //定义主题颜色头部导航右边显示
    getThemeHeaderRight() {
        return (
            <View style={{flexDirection: 'row',}}>
                <TouchableHighlight
                    ref='button'
                    underlayColor='transparent'
                    onPress={()=>{
                        alert('sousuo')
                    }}>
                    <View style={{padding:5, flexDirection: 'row'}}>
                        <Image
                            style={{width: 32, height: 32}}
                            source={require('../../res/images/ic_search_white_48pt.png')}
                        />
                    </View>
                </TouchableHighlight>
              </View>
        )
    }

    _learnClassify(){
        const w = width/4, h = w*.6 + 20
        let renderSwipeView = (types, n) => {
            return (
                <View style={styles.typesView}>
                    {
                        types.map((item, i) => {
                            let render = (
                                <View style={[{width: w, height: h}, styles.typesItem]}>
                                    <Image source={imgTypes[n+i].src} style={{width: w*.5, height: w*.5, borderRadius: 5}}/>
                                    <Text style={{fontSize: px2pd(12), color:"#666", padding: px2pd(5)}}>{item}</Text>
                                </View>
                            )
                            return (
                                isIOS?(
                                    <TouchableHighlight style={{width: w, height: h}} key={i} onPress={() => {
                                        this.toLearnDesc()
                                    }}>{render}</TouchableHighlight>
                                ):(
                                    <TouchableNativeFeedback style={{width: w, height: h}} key={i} onPress={() => {

                                    }}>{render}</TouchableNativeFeedback>
                                )
                            )
                        })
                    }
                </View>
            )
        }
        return (
            <Swiper
                height={h*2.4} 
                style={styles.wrapper}
                paginationStyle={{ bottom: 10 }}
                dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor: this.props.themeColor, width: 6, height: 6}}>
                {renderSwipeView(['课件/实验讲义','题库','前端工具','WebApp','Vue.js','Bootstrap','HTML5','Angular'], 0)}
                {renderSwipeView(['前端工具','WebApp','Vue.js','Bootstrap','HTML5','Angular','JQuery','JavaScript'], 8)}
            </Swiper>
        )
    }

    _newwestCurriculum() {
        return (
            <View style={styles.typesView}>
                
            </View>
        )
    }

    render() {
    	return (
    		<View style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View>
                        <SwiperIndex themeColor = {this.props.themeColor} />
                    </View>
                    <Text style={styles.groupTitle}>学习分类</Text>
                    <View style={{backgroundColor:"#fff",paddingBottom:px2pd(10)}}>
                       {this._learnClassify()}
                    </View>
                    <Text style={styles.groupTitle}>最新课程</Text>
                    <View style={{backgroundColor:"#fff",paddingBottom:px2pd(10)}}>
                       {this._newwestCurriculum()}
                    </View>
               </ScrollView>
            </View>
    	)
    }	
}	

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f3f3f3',
    },
    scrollView:{
        marginBottom:px2pd(46),
    },
    wrapper: {
        
    },
    typesView:{
    	paddingTop: px2pd(10),
        paddingBottom: px2pd(10),
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    typesItem:{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    groupTitle: {
        //fontWeight:'500',
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 5,
        fontSize: 14,
        color: 'gray'

    }
    
});
