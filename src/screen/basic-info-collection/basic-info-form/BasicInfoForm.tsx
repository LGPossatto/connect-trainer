import { StyleSheet, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { CtaButton } from "../../../components/buttons/cta/CtaButton";
import { InputTag } from "../../../components/inputs/input-tag/InputTag";
import { InputText } from "../../../components/inputs/input-text/InputText";

export const BasicInfoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      weight: "",
      birthday: "",
      height: "",
    },
  });

  const onPress = () => {
    console.log();
  };

  return (
    <View style={styles.container}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <InputText
            label="Nome"
            value={value}
            onChange={onChange}
            placeholder="Seu nome"
          ></InputText>
        )}
      />
      <Controller
        name="weight"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <InputTag
            label="Peso"
            tag="kg"
            value={value}
            onChange={onChange}
            placeholder="07/12/1994"
            numeric
          ></InputTag>
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
