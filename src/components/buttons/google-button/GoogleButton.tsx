import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { textColor, textStyles } from "../../../styles/textStyles";
import { dropShadow } from "../../../styles/dropShadows";

import { GoogleLogo } from "../../../assets/icons/GoogleLogo";

export const GoogleButton = () => {
  const onPress = () => {};

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <GoogleLogo></GoogleLogo>
      <Text
        style={[styles.text, textStyles.regularSemiBold, textColor.grayDark]}
      >
        Continuar com o Google
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...dropShadow,
    overflow: "hidden",
    borderRadius: 40,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  text: { marginLeft: 12 },
});
