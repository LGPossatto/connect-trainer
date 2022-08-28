import { StyleSheet, Text, View } from "react-native";

import { textColor, textStyles } from "../../styles/textStyles";

import { TitleLogo } from "../../components/visuals/title-logo/TitleLogo";
import { WorkoutCard } from "../../components/cards/workout-card/WorkoutCard";

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
      <WorkoutCard title="ASDsadsad asd asd dsa"></WorkoutCard>
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
