/*
* 程序入口
*/
'use strict'
import React, {Component} from 'react'
import configureStore from './store/configureStore'
import sagas from './sagas/index';
import { Provider } from 'react-redux'
import App from './containers/app'

// const store = configureStore()
// store.runSaga(sagas)

function setup() {
      
     class Root extends Component{
        render() {
            return (
                <Provider>
                    <App />
                </Provider>
            );
        }
     }   

     return <Root/>

}

export default setup