/**
* app enter
*/
'use strict';

import React, {Component} from 'react'
import {
    Text,
    View,
} from 'react-native'

function setup(){

    class Root extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
       
        render() {
            return (
                 <View><Text>Hello !!!</Text></View> 
            );
        }
    }

    return <Root/>;
}

module.exports = setup;