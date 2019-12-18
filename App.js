import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AnimationScreen from './screens/Animation';
import HomeScreen from './screens/Home';
import MoviesScreen from './screens/Movies';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Component } from 'react-native';

class NavigationDrawerStructure extends React.Component {


    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('./img/dots-menu.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const HomeStackNavigator = createStackNavigator({
    First: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#87B56A',
            },
            headerTintColor: '#fff',
        }),
    },
});

const AnimationStackNavigator = createStackNavigator({
    Second: {
        screen: AnimationScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Animation',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#87B56A',
            },
            headerTintColor: '#fff',
        }),
    },
});

const MoviesStackNavigator = createStackNavigator({
    Third: {
        screen: MoviesScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Movies',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#87B56A',
            },
            headerTintColor: '#fff',
        }),
    },
});

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
        navigationOptions: {
            headerShown: false,
            headerStyle: {
                backgroundColor: '#87B56A',
            },
            headerTintColor: '#FFFFFF',
            title: 'Navigation',
        },
    },
});

const AppNavigator = createStackNavigator({
    Animation: AnimationScreen,
    Home: HomeScreen,
    Movies: MoviesScreen,
},{
    initialRouteName: 'Home',
    navigationOptions: {
        // header: ({ goBack }) => ({
        //     left: <Left onPress={goBack} />,
        // }),
    }
});

const DrawerNavigator = createDrawerNavigator({
    HomeScreen: {
        screen: HomeStackNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
        },
    },
    AnimationScreen: {
        screen: AnimationStackNavigator,
        navigationOptions: {
            drawerLabel: 'Animation',
        },
    },
    MoviesScreen: {
        screen: MoviesStackNavigator,
        navigationOptions: {
            drawerLabel: 'Movies',
        },
    },
    TabScreen: {
        screen: AppTabNavigator,
    },

    StackScreen: {
        screen: AppNavigator,
    }

});

const AppContainerDrawer = createAppContainer(DrawerNavigator);


export default class App extends React.Component {
    render() {
        return (
            <AppContainerDrawer/>

        );
    }
}


