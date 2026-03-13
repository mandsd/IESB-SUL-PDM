import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { titulo } from './util'; 
import titulo_default from './util';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <Text style={styles.titulo_test}>{titulo_default}</Text>
      <Button title="Clique aqui"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },

  titulo_test: {
    margin: 20,
    color: '#4e5de2',
    fontSize: 30
  }
});