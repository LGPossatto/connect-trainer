import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../../../styles/helpers/colors";
import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  text: string;
  onPress: () => void;
  size?: "big" | "regular";
  color?: "primary" | "black";
}

export const CtaButton = ({
  text,
  onPress,
  size = "regular",
  color = "primary",
}: props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <LinearGradient
        style={[
          size === "regular" ? styles.regularPadding : styles.bigPadding,
          color === "primary"
            ? styles.primaryBackground
            : styles.secondaryBackground,
        ]}
        colors={[colors.primaryDark, colors.primary]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Text
          style={[
            textColor.regularReversed,
            size === "regular" ? textStyles.regularBold : textStyles.bigBold,
          ]}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: "center", borderRadius: 8, overflow: "hidden" },
  regularPadding: { paddingHorizontal: 32, paddingVertical: 8 },
  bigPadding: { paddingHorizontal: 48, paddingVertical: 12 },
  primaryBackground: { backgroundColor: "red" },
  secondaryBackground: { backgroundColor: "black" },
});
