import { StyleSheet, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { CtaButton } from "../../../components/buttons/cta/CtaButton";
import { LinkButton } from "../../../components/buttons/link/LinkButton";
import { InputText } from "../../../components/inputs/input-text/InputText";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onPress = () => {};

  return (
    <View style={styles.container}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <InputText
            label="E-mail"
            value={value}
            onChange={onChange}
            placeholder="Digite seu e-mail"
          ></InputText>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <InputText
            label="Senha"
            value={value}
            onChange={onChange}
            placeholder="Digite sua senha"
          ></InputText>
        )}
      />
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
