import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { screenHeight, screenWidth } from "../../../styles/helpers/vars";
import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  title: string;
  text: string;
  imgPath: string;
}

export const ScrollScreen = ({ title, text, imgPath }: props) => {
  return (
    <View>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/welcome-screen-1.jpg")}
        ></Image>
      </View>
      <LinearGradient
        colors={["#000", "transparent"]}
        start={[1, 1]}
        end={[0, 0]}
      >
        <View style={styles.textView}>
          <Text style={[textColor.regularReversed, textStyles.hugeBold]}>
            {title}
          </Text>
          <Text
            style={[
              textColor.regularReversed,
              textStyles.bigSemiBold,
              styles.centerText,
            ]}
          >
            {text}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  imgView: {
    overflow: "hidden",
    width: screenWidth,
    justifyContent: "center",
    position: "absolute",
  },
  img: {
    width: "100%",
    height: screenHeight,
  },
  textView: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
  },
  centerText: {
    width: "100%",
    paddingTop: 24,
    paddingBottom: screenHeight / 6,
    textAlign: "center",
  },
});
