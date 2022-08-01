import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "expo-constants";
import { screenTrueHeight } from "../../../styles/variables/screen";
import { colors } from "../../../styles/variables/colors";

export const BackgroundFlag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flag}>
        <LinearGradient
          style={styles.gradient}
          colors={[colors.black, colors.grayDark]}
          start={[0.3, 0.3]}
          end={[0.7, 0.7]}
        ></LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: "-25%",
    right: "-25%",
    height: screenTrueHeight,
    //backgroundColor: "red",
  },
  flag: {
    overflow: "hidden",
    position: "relative",
    transform: [{ skewY: "-30deg" }],
    top: "-20%",
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: colors.black,
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
});
