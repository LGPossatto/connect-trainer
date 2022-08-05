import { FC } from "react";
import { Modal, StyleSheet, View } from "react-native";

import { colors } from "../../../styles/variables/colors";

export const ModalCard: FC = ({ children }) => {
  return (
    <Modal transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.card}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.75,
  },
  card: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
  },
});
