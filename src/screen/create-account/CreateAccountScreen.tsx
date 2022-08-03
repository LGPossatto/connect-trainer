import { StyleSheet, Text, View } from "react-native";

import { textColor, textStyles } from "../../styles/textStyles";
import { colors } from "../../styles/variables/colors";

import { TitleLogo } from "../../components/visuals/title-logo/TitleLogo";
import { StackingCard } from "../../components/cards/stacking-card/StackingCard";
import { GoogleButton } from "../../components/buttons/google/GoogleButton";
import { CreateAccountForm } from "./create-account-form/CreateAccountForm";

export const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <TitleLogo></TitleLogo>
      <StackingCard>
        <View style={styles.cardView}>
          <Text style={textStyles.bigBold}>Criar Conta</Text>
          <Text style={textStyles.regular}>Crie sua conta pessoal</Text>
        </View>
        <View style={[styles.cardView, styles.googleView]}>
          <GoogleButton></GoogleButton>
        </View>
        <View style={[styles.cardView, styles.split]}>
          <View style={styles.viewSplit}></View>
          <Text style={[textStyles.regular, textColor.gray]}>OU</Text>
          <View style={styles.viewSplit}></View>
        </View>
        <View style={[styles.cardView, styles.form]}>
          <CreateAccountForm></CreateAccountForm>
        </View>
      </StackingCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 24 },
  cardView: {
    alignItems: "center",
  },
  googleView: {
    marginVertical: 24,
  },
  split: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  viewSplit: {
    width: "45%",
    height: 2,
    backgroundColor: colors.gray,
  },
  form: {
    marginVertical: 8,
  },
});
