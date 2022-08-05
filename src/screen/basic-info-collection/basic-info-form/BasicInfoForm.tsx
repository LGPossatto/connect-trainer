import { StyleSheet, Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { CtaButton } from "../../../components/buttons/cta/CtaButton";
import { InputTag } from "../../../components/inputs/input-tag/InputTag";
import { InputText } from "../../../components/inputs/input-text/InputText";
import { ModalCard } from "../../../components/cards/modal-card/ModalCard";

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
      <ModalCard>
        <Text>oiasdasdsa</Text>
      </ModalCard>
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
      <View style={styles.rowView}>
        <View style={styles.viewMore}>
          <Controller
            name="birthday"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { value, onChange } }) => (
              <InputText
                label="Nascimento"
                value={value}
                onChange={onChange}
                placeholder="07/12/1994"
              ></InputText>
            )}
          />
        </View>
        <View style={styles.viewLess}>
          <Controller
            name="height"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <InputTag
                label="Altura"
                tag="m"
                value={value}
                onChange={onChange}
                placeholder="1.75"
                numeric
              ></InputTag>
            )}
          />
        </View>
        <View style={styles.viewLess}>
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
                placeholder="85"
                numeric
              ></InputTag>
            )}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <CtaButton onPress={onPress} text="Continuar" size="big"></CtaButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  buttonView: { marginTop: 48 },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewMore: { flex: 0.3 },
  viewLess: { flex: 0.3 },
});
