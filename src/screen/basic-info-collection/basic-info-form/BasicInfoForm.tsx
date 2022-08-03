import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CtaButton } from "../../../components/buttons/cta/CtaButton";
import { InputTag } from "../../../components/inputs/input-tag/InputTag";
import { InputText } from "../../../components/inputs/input-text/InputText";

export const BasicInfoForm = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");

  const onPress = () => {
    console.log({ name, weight });
  };

  return (
    <View style={styles.container}>
      <InputText
        value={name}
        setValue={setName}
        label="Nome"
        error={null}
        placeholder="Digite seu nome"
      ></InputText>
      <InputTag
        value={weight}
        setValue={setWeight}
        label="Peso"
        error={null}
        placeholder="85"
        tag="Kg"
        numeric
      ></InputTag>
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
