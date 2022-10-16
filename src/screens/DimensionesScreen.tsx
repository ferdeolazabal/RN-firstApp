import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

// const {width, height} = Dimensions.get('window');

const DimensionesScreen = () => {
    const {width, height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada} />
                <View style={styles.cajaNaranja} />
            </View>

            <View>
                <Text style={styles.title}>
                    W: {width} H: {height}{' '}
                </Text>
            </View>
        </View>
    );
};

export default DimensionesScreen;

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 30,
    },
});
