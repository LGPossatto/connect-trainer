import { StyleSheet, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { CtaButton } from "../../../components/buttons/cta-button/CtaButton";
import { LabelTextInput } from "../../../components/inputs/label-text-input/LabelTextInput";

export const CreateAccountForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
          <LabelTextInput
            label="E-mail"
            value={value}
            onChange={onChange}
            placeholder="Digite seu e-mail"
          ></LabelTextInput>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <LabelTextInput
            label="Senha"
            value={value}
            onChange={onChange}
            placeholder="Digite sua senha"
            secure
          ></LabelTextInput>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <LabelTextInput
            label="Confirmar senha"
            value={value}
            onChange={onChange}
            placeholder="Digite sua senha novamente"
            secure
          ></LabelTextInput>
        )}
      />
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
