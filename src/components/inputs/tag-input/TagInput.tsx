import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { checkIfNumber } from "../../../utils/checkIfNumber";

import { textColor, textStyles } from "../../../styles/textStyles";
import { colors } from "../../../styles/variables/colors";

interface props {
  value: string;
  onChange: (...event: any[]) => void;
  label: string;
  tag: string;
  placeholder?: string;
  error?: string | null;
  secure?: boolean;
  numeric?: boolean;
}

export const TagInput = ({
  value,
  onChange,
  label,
  tag,
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
      <View style={styles.inputView}>
        <TextInput
          style={[
            styles.input,
            textStyles.regular,
            textColor.grayDark,
            onFocus || value.length > 0 ? styles.onFocus : null,
          ]}
          textAlign="right"
          value={value}
          onChangeText={numeric ? handdleNumericChange : onChange}
          placeholder={placeholder}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          secureTextEntry={secure}
          keyboardType={numeric ? "number-pad" : "default"}
        ></TextInput>
        <View
          style={[
            styles.tag,
            onFocus || value.length > 0 ? styles.onFocus : null,
          ]}
        >
          <Text style={[textStyles.smallBold, textColor.gray]}>{tag}</Text>
        </View>
      </View>
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
  inputView: {
    transform: [{ translateX: 12 }],
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: -12,
    marginRight: -12,
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 38,
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: colors.gray,
  },
  tag: {
    transform: [{ translateX: -12 }],
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: "100%",
    backgroundColor: colors.grayLight,
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
