import { StyleSheet, Text, View } from 'react-native';

// components
import HeaderModule from './src/components/HeaderModule';

// utils
import SharingModule from './src/utils/SharingModule';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderModule />
      <Text style={styles.text}>
        Techtack Technologies | Most Advanced Platform From Developers.
      </Text>
      <SharingModule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  text: {
    padding: 8,
    textAlign: 'center',
    color: '#B4B7BD',
    paddingTop: 45,
    fontSize: 26,
    fontWeight: 'bold',
  }
});
