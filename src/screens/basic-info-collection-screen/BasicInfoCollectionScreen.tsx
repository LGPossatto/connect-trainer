import { StyleSheet, Text, View } from "react-native";

import { textStyles } from "../../styles/textStyles";

import { TitleLogo } from "../../components/visuals/title-logo/TitleLogo";
import { StackingCard } from "../../components/cards/stacking-card/StackingCard";
import { BasicInfoForm } from "./basic-info-form/BasicInfoForm";

export const BasicInfoCollectionScreen = () => {
  return (
    <View style={styles.container}>
      <TitleLogo></TitleLogo>
      <View style={styles.marginTop}>
        <StackingCard>
          <View style={styles.cardView}>
            <Text style={textStyles.bigBold}>Só mais um pouco</Text>
            <Text style={textStyles.regular}>Me conte mais sobre você</Text>
          </View>
          <View style={[styles.cardView, styles.form]}>
            <BasicInfoForm></BasicInfoForm>
          </View>
        </StackingCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 24 },
  cardView: {
    alignItems: "center",
  },
  form: {
    marginVertical: 8,
  },
  marginTop: { marginTop: -24 },
});
