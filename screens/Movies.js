import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Image} from 'react-native-animatable';

let url = 'https://api.tvmaze.com/search/shows?q=';

export class MoviesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: [],
        };
    }

    queryFunc = (text) => { this.setState({query: text}) };

    apiFunc = async () => {
        try {
            const response = await fetch(url + this.state.query)
            const data = await response.json()
            this.setState({ data })
            console.log({ data })
        } catch (e) {
            console.log("We can't show you anything")
        }
    };

    press(){
        return this.apiFunc();
    }

    render() {
        const { data } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.pageText}>Movies Task</Text>
                    <View flexDirection="row">
                        <TextInput placeholder='Ex: Doctor Who' style={styles.input} onChangeText={(text) => this.queryFunc(text)} flexDirection="column"/>
                        <TouchableOpacity flexDirection="column" onPress={() => this.press()}>
                            <Image source={require('../img/loupe.png')} style={styles.searchIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.moviesList}>
                    {this.state.data.map(movie => (
                        <Text key={movie.show.id} style={styles.movieText}>{movie.show.name}</Text>
                    ))}
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
    },

    input: {
        width: '70%',
        fontSize: 30,
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 40,
        padding: 15,
    },

    searchIcon: {
        marginTop: 60,
        marginLeft: 10,
    },

    moviesList: {
        margin: 30,
    },

    movieText: {
        fontSize: 25,
        padding: 10,
    }

});

export default MoviesScreen;

