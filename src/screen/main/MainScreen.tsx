import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { WelcomeScreen } from "../welcome/WelcomeScreen";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: Constants.statusBarHeight },
});
