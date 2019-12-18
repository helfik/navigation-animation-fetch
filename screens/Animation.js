import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';


export class AnimationScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.pageText}>Pulsing Flower Animation</Text>
                    <Animatable.Image animation="pulse"
                                      easing="ease-out"
                                      iterationCount="infinite"
                                      source={require('../img/flower.png')} style={styles.image}/>
                    <Text style={styles.animationText}>Click here to go back on Home page</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.button}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                    <Text style={styles.animationText}>...or here to see the Movies task</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Movies')} style={styles.button}>
                        <Text style={styles.buttonText}>Movies</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '30%',
        borderColor: '#fcba03',
        backgroundColor: '#fcba03',
        borderRadius: 5,
        height: 60,
        textAlign: 'center',
        padding: 15,
        marginTop: 30,
    },

    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },

    pageText: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
    },

    container: {
        alignItems: 'center',
    },

    animationText: {
        marginTop: 50,
        fontSize: 20,
    },

    image: {
        width: 200,
        height: 200,
        marginTop: 50,
    }

});

export default AnimationScreen;

