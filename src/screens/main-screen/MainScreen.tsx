import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "expo-constants";
import { colors } from "../../styles/variables/colors";

import { BackgroundFlag } from "../../components/visuals/background-flag/BackgroundFlag";
import { BasicInfoCollectionScreen } from "../basic-info-collection-screen/BasicInfoCollectionScreen";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundFlag></BackgroundFlag>
      <LinearGradient
        style={styles.statusBarBackground}
        colors={[colors.black, colors.grayDark]}
        start={[0, 0]}
        end={[1, 1]}
      ></LinearGradient>
      <BasicInfoCollectionScreen></BasicInfoCollectionScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  statusBarBackground: {
    width: "100%",
    height: Constants.statusBarHeight,
  },
});
