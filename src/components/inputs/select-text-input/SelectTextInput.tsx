import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../../styles/variables/colors";
import { textColor, textStyles } from "../../../styles/textStyles";
import { ItemsSelect } from "./items-select/ItemsSelect";

interface props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder: string;
  itemsList: string[];
}

export const SelectTextInput = ({
  value,
  setValue,
  label,
  placeholder,
  itemsList,
}: props) => {
  const [open, setOpen] = useState(false);

  const handleOnPress = () => {
    setOpen(true);
  };

  return (
    <View>
      <ItemsSelect
        value={value}
        setValue={setValue}
        open={open}
        itemsList={itemsList}
        setOpen={setOpen}
      ></ItemsSelect>
      <View style={styles.inputView}>
        <Text style={[styles.label, textStyles.regularSemiBold]}>{label}</Text>
        <TouchableOpacity
          style={[styles.input, value !== "" && styles.onFocus]}
          onPress={handleOnPress}
          activeOpacity={0.7}
        >
          <Text
            style={[
              textStyles.regular,
              textColor.gray,
              value !== "" && textColor.grayDark,
            ]}
          >
            {value === "" ? placeholder : value}
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
