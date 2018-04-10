/*
* 程序入口
*/
'use strict'
import React, {Component} from 'react'
import configureStore from './store/ConfigureStore'
import sagas from './sagas/Index';
import { Provider } from 'react-redux'
import App from './containers/App'
import ThemeUtil from './expand/ThemeUtil'

const store = configureStore()
store.runSaga(sagas)

export default class setup extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }    

    componentDidMount() {
        const {navigator} = this.props;
        new ThemeUtil().getTheme().then((data=>{
            this.setState({
                theme : data
            })
        }))
    }    

    render() {
        return (
            <Provider store={store}>
                <App theme = {this.state.theme} />
            </Provider>
        )
    }
}
