import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
    },
    caja1: {
        // flex: 3,
        borderWidth: 2,
        // borderColor: 'white',
        // marginHorizontal: 5,
        // alignSelf: 'center', // sobre escribe propiedades flex del padre
        fontSize: 30,
        backgroundColor: 'red',
    },
    caja2: {
        // flex: 4,
        // marginHorizontal: 5,
        // alignSelf: 'flex-start',
        borderWidth: 2,
        // borderColor: 'white',
        fontSize: 30,
        backgroundColor: 'darkorange',
    },
    caja3: {
        // flex: 5,
        // marginHorizontal: 5,
        borderWidth: 2,
        // borderColor: 'white',
        fontSize: 30,
        backgroundColor: 'green',
    },
});

export default FlexScreen;
