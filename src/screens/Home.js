import React from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

// components
import HeaderModule from '../components/HeaderModule';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <HeaderModule />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },
})