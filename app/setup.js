/**
 * learnBestTools
 * 程序入口
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from 'react'
import { AsyncStorage } from 'react-native'
import configureStore from './store/ConfigureStore'
import sagas from './sagas/Index'
import { Provider } from 'react-redux'
import App from './containers/App'
import ThemeUtil from './expand/ThemeUtil'
import ThemeFactory, {ThemeFlags} from './res/styles/ThemeFactory'

const store = configureStore()
store.runSaga(sagas)

export default class setup extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }    

    componentDidMount() {
        new ThemeUtil().getTheme().then((data=>{
            this.setState({
                theme : data
            })
        }))
    }    

    // _loadInitState = async() => {
    //     try {
    //         let theme = await AsyncStorage.getItem('theme_key')
    //         if(theme == undefined){
    //             theme = ThemeFlags.Default.color
    //         }
    //         return null
    //     } catch(error) {
    //         alert(error)
    //     }

    // }

    render() {
        return (
            <Provider store={store}>
                <App theme = {this.state.theme} />
            </Provider>
        )
    }
}
