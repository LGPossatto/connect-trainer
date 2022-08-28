import { StyleSheet, Text, View } from "react-native";

import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  title: string;
  text: string;
}

export const InfoBlock = ({ text, title }: props) => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.regularBold, textColor.regular]}>{title}:</Text>
      <Text style={[textStyles.regular, textColor.regular]}> {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
