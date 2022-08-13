import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { textStyles } from "../../../../styles/textStyles";

import { ModalCard } from "../../../cards/modal-card/ModalCard";

interface props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemsList: string[];
}

export const ItemsSelect = ({
  value,
  setValue,
  open,
  setOpen,
  itemsList,
}: props) => {
  const handleOnPress = (item: string) => {
    setValue(item);
    setOpen(false);
  };

  return (
    <ModalCard open={open}>
      <FlatList
        data={itemsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleOnPress(item)}
            activeOpacity={0.7}
          >
            <Text style={[textStyles.regularSemiBold]}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
    </ModalCard>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
