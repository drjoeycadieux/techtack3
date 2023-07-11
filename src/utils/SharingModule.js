import React from 'react-native';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';


export default function Sharing() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Button
                    title='Share Code'
                    color='#2355B9'
                    onPress={() => Alert.alert('View Sharing Links.')}
                />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
        textAlign: 'center',
        color: 'black',
    }
})