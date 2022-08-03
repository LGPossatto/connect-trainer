import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CtaButton } from "../../../components/buttons/cta/CtaButton";
import { InputText } from "../../../components/inputs/input-text/InputText";

export const CreateAccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onPress = () => {
    console.log({ email, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      <InputText
        value={email}
        setValue={setEmail}
        label="Email"
        error={null}
        placeholder="Digite seu e-mail"
      ></InputText>
      <InputText
        value={password}
        setValue={setPassword}
        label="Senha"
        error={null}
        secure
        placeholder="Digite sua senha"
      ></InputText>
      <InputText
        value={confirmPassword}
        setValue={setConfirmPassword}
        label="Cofirme sua Senha"
        error={null}
        secure
        placeholder="Confirme sua senha novamente"
      ></InputText>
      <View style={styles.buttonView}>
        <CtaButton onPress={onPress} text="Continuar" size="big"></CtaButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  buttonView: { marginTop: 48 },
});
