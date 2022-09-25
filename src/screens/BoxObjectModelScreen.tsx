import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#19C8D1',
        flex: 1,
    },
    title: {
        alignSelf: 'center',
        borderColor: 'blue',
        borderWidth: 5,
        fontSize: 50,
        letterSpacing: 6,
        lineHeight: 50,
        paddingHorizontal: 10,
        paddingVertical: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        textDecorationLine: 'underline',
        top: 10,
    },
});
