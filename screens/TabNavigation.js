import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './Home';
import MoviesScreen from './Movies';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";


const TabScreen = createBottomTabNavigator(
    {
        Home: HomeScreen ,
        Animation: AnimationScreen,
        Movies: MoviesScreen,
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#fcba03',
            inactiveTintColor: '#F8F8F8',
            style: {
                fontSize: 30,
                backgroundColor: '#87B56A',
            },
            labelStyle: {
                fontSize: 30,
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);

const AppTabNavigator = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
    },
});

const AppContainerDrawer = createAppContainer(AppTabNavigator);
