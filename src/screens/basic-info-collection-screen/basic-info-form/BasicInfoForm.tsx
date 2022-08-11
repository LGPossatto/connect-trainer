import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { CtaButton } from "../../../components/buttons/cta-button/CtaButton";
import { TagInput } from "../../../components/inputs/tag-input/TagInput";
import { LabelTextInput } from "../../../components/inputs/label-text-input/LabelTextInput";
import { DatetimeInput } from "../../../components/inputs/datetime-input/DatetimeInput";

export const BasicInfoForm = () => {
  const [date, setDate] = useState(new Date());
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      weight: "",
      birthday: new Date(),
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
          <LabelTextInput
            label="Nome"
            value={value}
            onChange={onChange}
            placeholder="Seu nome"
          ></LabelTextInput>
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
            render={({ field: { onChange, value } }) => (
              <DatetimeInput
                label="Nascimento"
                setValue={onChange}
                value={value}
                placeholderRight
              ></DatetimeInput>
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
              <TagInput
                label="Altura"
                tag="m"
                value={value}
                onChange={onChange}
                placeholder="1.75"
                numeric
              ></TagInput>
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
              <TagInput
                label="Peso"
                tag="kg"
                value={value}
                onChange={onChange}
                placeholder="85"
                numeric
              ></TagInput>
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
