import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { MainScreen } from "./src/screens/main-screen/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" />
      <MainScreen></MainScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
