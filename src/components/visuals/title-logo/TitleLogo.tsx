import { Image, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

interface props {
  size?: "big" | "small";
  align?: "center" | "left";
}

export const TitleLogo = ({ size = "big", align = "center" }: props) => {
  return (
    <View style={styles.logoView}>
      <Image
        style={
          align === "center"
            ? { alignSelf: "center" }
            : { alignSelf: "flex-start" }
        }
        source={
          size === "big"
            ? require("../../../assets/images/logo-title-white.png")
            : require("../../../assets/images/logo-title-white-small.png")
        }
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    marginTop: 60 - Constants.statusBarHeight,
    marginBottom: 60,
  },
});
