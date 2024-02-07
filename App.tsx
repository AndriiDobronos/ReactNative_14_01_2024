import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from "./src/CastomHuks/ExampleApi";
import MyBackHandler from "./src/CastomHuks/ExampleBackHandler";
import MySwitcherKeyboard from "./src/CastomHuks/ExampleKeyboart";
import ItemListRefresh from "./src/CastomHuks/ItemListRefresh";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50,marginBottom:20}}>
        Hello world
      </Text>

        <MyComponent />
        <MyBackHandler />
        <MySwitcherKeyboard />
        <ItemListRefresh />

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
});
