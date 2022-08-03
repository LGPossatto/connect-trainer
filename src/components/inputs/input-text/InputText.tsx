import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { checkIfNumber } from "../../../utils/checkIfNumber";

import { textColor, textStyles } from "../../../styles/textStyles";
import { colors } from "../../../styles/variables/colors";

interface props {
  label: string;
  error: string | null;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  secure?: boolean;
  numeric?: boolean;
}

export const InputText = ({
  value,
  setValue,
  label,
  error,
  placeholder = "",
  secure = false,
  numeric = false,
}: props) => {
  const [onFocus, setOnFocus] = useState(false);

  const handdleNumeric = (e: string) => {
    if (checkIfNumber(e)) setValue(e);
  };

  return (
    <View style={style.container}>
      <Text style={[style.label, textStyles.regularSemiBold]}>{label}</Text>
      <TextInput
        style={[
          style.input,
          textStyles.regular,
          textColor.grayDark,
          onFocus || value.length > 0 ? style.onFocus : null,
        ]}
        value={value}
        onChangeText={numeric ? setValue : (e) => handdleNumeric(e)}
        placeholder={placeholder}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        secureTextEntry={secure}
        keyboardType={numeric ? "number-pad" : "default"}
      ></TextInput>
      {error && (
        <Text style={[style.error, textStyles.regular, textColor.danger]}>
          ! {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginTop: 4,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.gray,
  },
  onFocus: {
    borderColor: colors.grayDark,
  },
  error: {
    marginBottom: 4,
  },
});
