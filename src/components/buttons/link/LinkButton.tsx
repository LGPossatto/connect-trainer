import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { textColor, textStyles } from "../../../styles/textStyles";

export const LinkButton = () => {
  const onPress = () => {
    console.log("link button");
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[styles.link, textStyles.regularSemiBold, textColor.blueLink]}
      >
        Esqueceu sua senha?
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: { textDecorationLine: "underline" },
});
