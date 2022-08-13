import { StyleSheet, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { CtaButton } from "../../../components/buttons/cta-button/CtaButton";
import { TagInput } from "../../../components/inputs/tag-input/TagInput";
import { LabelTextInput } from "../../../components/inputs/label-text-input/LabelTextInput";
import { DatetimeInput } from "../../../components/inputs/datetime-input/DatetimeInput";
import { SelectTextInput } from "../../../components/inputs/select-text-input/SelectTextInput";

export const BasicInfoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      birthday: new Date(),
      weight: "",
      height: "",
      sex: "",
      gender: "",
      disease: "",
      extraInfo: "",
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
        <View style={[styles.viewRow4, styles.marginRight]}>
          <Controller
            name="birthday"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DatetimeInput
                label="Nascimento"
                value={value}
                setValue={onChange}
                inicialValue={new Date()}
                placeholderRight
              ></DatetimeInput>
            )}
          />
        </View>
        <View style={[styles.viewRow3, styles.marginRight]}>
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
        <View style={styles.viewRow3}>
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
      <View style={styles.rowView}>
        <View style={[styles.viewRow5, styles.marginRight]}>
          <Controller
            name="sex"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <SelectTextInput
                value={value}
                setValue={onChange}
                itemsList={["Test A", "Test B", "Test C"]}
                label="Sexo"
                placeholder="Selecionar"
              ></SelectTextInput>
            )}
          />
        </View>
        <View style={styles.viewRow5}>
          <Controller
            name="gender"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <SelectTextInput
                value={value}
                setValue={onChange}
                itemsList={["Test D", "Test E", "Test F"]}
                label="Gênero"
                placeholder="Selecionar"
              ></SelectTextInput>
            )}
          />
        </View>
      </View>
      <Controller
        name="disease"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <LabelTextInput
            label="Alguma doença ou incapacidade?"
            value={value}
            onChange={onChange}
            placeholder="Hérnia de disco, osteoporose..."
          ></LabelTextInput>
        )}
      />
      <Controller
        name="extraInfo"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <LabelTextInput
            label="Gostaria de acrenscentar algo?"
            value={value}
            onChange={onChange}
            placeholder="Hérnia de disco, osteoporose..."
            numberofLines={3}
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
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewRow3: { flex: 0.3 },
  viewRow4: { flex: 0.4 },
  viewRow5: { flex: 0.5 },
  marginRight: { marginRight: 20 },
});
