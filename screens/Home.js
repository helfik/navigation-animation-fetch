import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageText}>This is my Home Page with all Navigation</Text>
                <Text style={styles.animationText}>Click here to see animation task</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Animation')} style={styles.button}>
                    <Text style={styles.buttonText}>Animation</Text>
                </TouchableOpacity>
                <Text style={styles.animationText}>Click here to see movies</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Movies')} style={styles.button}>
                    <Text style={styles.buttonText}>Movies</Text>
                </TouchableOpacity>

            </View>
        )
    }
};

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
        marginTop: 100,
        fontSize: 20,
    }

});

export default HomeScreen;

