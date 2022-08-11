import { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ModalCard } from "../../cards/modal-card/ModalCard";

import { colors } from "../../../styles/variables/colors";
import { textColor, textStyles } from "../../../styles/textStyles";

interface props {
  label: string;
  placeholder: string;
  placeholderRight?: boolean;
  onPress: () => void;
}

export const InputModal: FC<props> = ({
  label,
  placeholder,
  placeholderRight = false,
  onPress,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(placeholder);

  const handleOnPress = () => {
    setOpen(true);
  };

  return (
    <View>
      <ModalCard btnText="Confirmar" open={open} setOpen={setOpen}>
        {children}
      </ModalCard>
      <View style={styles.inputView}>
        <Text style={[styles.label, textStyles.regularSemiBold]}>{label}</Text>
        <TouchableOpacity
          style={[styles.input]}
          onPress={handleOnPress}
          activeOpacity={0.7}
        >
          <Text
            style={[
              textStyles.regular,
              textColor.gray,
              placeholderRight ? styles.placeholderRight : null,
            ]}
          >
            {inputValue}
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
