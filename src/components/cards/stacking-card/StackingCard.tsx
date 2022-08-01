import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../../../styles/variables/colors";
import { dropShadow } from "../../../styles/dropShadows";

export const StackingCard: FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...dropShadow,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
  },
});
