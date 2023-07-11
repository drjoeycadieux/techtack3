import React from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

// components
import HeaderModule from '../components/HeaderModule';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderModule />
            <Text style={styles.text}>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },
    text: {
        padding: 10,
    },
})