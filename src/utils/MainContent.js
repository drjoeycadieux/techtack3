import React from 'react-native';
import { View, Text, StyleSheet } from 'react-native';


export default function MainContent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
    },
    text: {
        textAlign: 'center',
        color: 'black',
    }
})