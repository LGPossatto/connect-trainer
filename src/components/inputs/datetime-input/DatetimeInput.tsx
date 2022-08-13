import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { colors } from "../../../styles/variables/colors";
import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  label: string;
  value: Date;
  setValue: React.Dispatch<React.SetStateAction<Date>>;
  inicialValue: Date;
  mode?: "date" | "time";
  placeholderRight?: boolean;
}

export const DatetimeInput = ({
  label,
  value,
  setValue,
  inicialValue,
  mode = "date",
  placeholderRight = false,
}: props) => {
  const [show, setShow] = useState(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedValue?: Date | undefined
  ) => {
    const currentValue = selectedValue;
    if (currentValue) setValue(currentValue);
    setShow(false);
  };

  const handleOnPress = () => {
    setShow(true);
  };

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          accentColor="#fff"
        />
      )}
      <View style={styles.inputView}>
        <Text style={[styles.label, textStyles.regularSemiBold]}>{label}</Text>
        <TouchableOpacity
          style={[
            styles.input,
            value.toLocaleDateString() !== inicialValue.toLocaleDateString()
              ? styles.onFocus
              : null,
          ]}
          onPress={handleOnPress}
          activeOpacity={0.7}
        >
          <Text
            style={[
              textStyles.regular,
              textColor.gray,
              placeholderRight ? styles.placeholderRight : null,
              value.toLocaleDateString() !== inicialValue.toLocaleDateString()
                ? textColor.grayDark
                : null,
            ]}
          >
            {value.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
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
  placeholderRight: {
    textAlign: "right",
  },
});
