import { Image, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

export const TitleLogo = () => {
  return (
    <View style={styles.logoView}>
      <Image
        style={styles.logoTitle}
        source={require("../../../assets/images/logo-title-white.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    marginTop: 60 - Constants.statusBarHeight,
    marginBottom: 60,
  },
  logoTitle: {
    alignSelf: "center",
  },
});
