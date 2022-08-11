import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { checkIfNumber } from "../../../utils/checkIfNumber";

import { textColor, textStyles } from "../../../styles/textStyles";
import { colors } from "../../../styles/variables/colors";

interface props {
  value: string;
  onChange: (...event: any[]) => void;
  label: string;
  placeholder?: string;
  error?: string | null;
  secure?: boolean;
  numeric?: boolean;
}

export const LabelTextInput = ({
  value,
  onChange,
  label,
  placeholder = "",
  error = null,
  secure = false,
  numeric = false,
}: props) => {
  const [onFocus, setOnFocus] = useState(false);

  const handdleNumericChange = (e: string) => {
    if (checkIfNumber(e)) onChange(e);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, textStyles.regularSemiBold]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textStyles.regular,
          textColor.grayDark,
          onFocus || value.length > 0 ? styles.onFocus : null,
        ]}
        value={value}
        onChangeText={numeric ? handdleNumericChange : onChange}
        placeholder={placeholder}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        secureTextEntry={secure}
        keyboardType={numeric ? "number-pad" : "default"}
      ></TextInput>
      {error && (
        <Text style={[styles.error, textStyles.regular, textColor.danger]}>
          ! {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
