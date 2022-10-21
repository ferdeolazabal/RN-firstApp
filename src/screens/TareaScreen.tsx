import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.cajaMorada}>Caja 1</Text>
            <Text style={styles.cajaNaranja}>Caja 2</Text>
            <Text style={styles.cajaAzul}>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
    },
    cajaMorada: {
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        flex: 5,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});

export default TareaScreen;
