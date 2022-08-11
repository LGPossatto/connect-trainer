import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../../../styles/variables/colors";
import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  text: string;
  onPress: () => void;
  size?: "big" | "regular";
}

export const CtaButton = ({ text, onPress, size = "regular" }: props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <LinearGradient
        style={[size === "regular" ? styles.regularPadding : styles.bigPadding]}
        colors={[colors.primaryDark, colors.primary]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Text
          style={[
            size === "regular" ? textStyles.regularBold : textStyles.bigBold,
            textColor.regularReversed,
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
});
