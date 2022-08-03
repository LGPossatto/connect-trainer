import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CtaButton } from "../../../components/buttons/cta/CtaButton";
import { LinkButton } from "../../../components/buttons/link/LinkButton";
import { InputText } from "../../../components/inputs/input-text/InputText";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    console.log({ email, password });
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
        placeholder="Digite sua senha"
        secure
      ></InputText>
      <LinkButton
        text="Esqueceu sua senha?"
        onPress={() => {
          console.log("login link button");
        }}
      ></LinkButton>
      <View style={styles.buttonView}>
        <CtaButton onPress={onPress} text="Confirmar" size="big"></CtaButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  buttonView: { marginTop: 48 },
});
