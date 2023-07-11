import React from 'react-native';
import { View, Text, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Techtack Technologies</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 45,
        backgroundColor: '#2355B9',
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    }
})