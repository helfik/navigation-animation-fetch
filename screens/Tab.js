import React, { Component } from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import AnimationScreen from './Animation';
import HomeScreen from './Home';
import MoviesScreen from './Movies';




const AppContainer = createAppContainer(AppTabNavigator);

export default class Tab extends React.Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}
