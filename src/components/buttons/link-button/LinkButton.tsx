import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  text: string;
  onPress: () => void;
}

export const LinkButton = ({ text, onPress }: props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[styles.link, textStyles.regularSemiBold, textColor.blueLink]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: { textDecorationLine: "underline" },
});
