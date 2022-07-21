import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { MainScreen } from "./src/screen/main/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MainScreen></MainScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
