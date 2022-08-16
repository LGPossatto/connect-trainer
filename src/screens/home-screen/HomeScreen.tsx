import { StyleSheet, Text, View } from "react-native";

import { textColor, textStyles } from "../../styles/textStyles";

import { TitleLogo } from "../../components/visuals/title-logo/TitleLogo";
import { TrainingCard } from "../../components/cards/training-card/TrainingCard";

export const HomeScreen = () => {
  return (
    <View style={styles.marginHorizontal}>
      <View>
        <TitleLogo size="small" align="left"></TitleLogo>
      </View>
      <Text
        style={[styles.title, textStyles.bigBold, textColor.regularReversed]}
      >
        Proxímos treinos:
      </Text>
      <TrainingCard title="ASDsadsad asd asd dsa"></TrainingCard>
    </View>
  );
};

const styles = StyleSheet.create({
  marginHorizontal: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: -20,
    marginBottom: 20,
  },
});
