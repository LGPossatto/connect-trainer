import { StyleSheet } from "react-native";

import { colors } from "./helpers/colors";

// --------------------------- FONT SIZE --------------------------- //
const regularSize = 16;
const bigSize = 24;
const hugeSize = 48;

export const textStyles = StyleSheet.create({
  regular: {
    fontSize: regularSize,
    fontWeight: "400",
  },
  regularBold: {
    fontSize: regularSize,
    fontWeight: "700",
  },
  regularSemiBold: {
    fontSize: regularSize,
    fontWeight: "500",
  },
  big: {
    fontSize: bigSize,
    fontWeight: "400",
  },
  bigBold: {
    fontSize: bigSize,
    fontWeight: "700",
  },
  bigSemiBold: {
    fontSize: bigSize,
    fontWeight: "500",
  },
  huge: {
    fontSize: hugeSize,
    fontWeight: "400",
  },
  hugeBold: {
    fontSize: hugeSize,
    fontWeight: "700",
  },
  hugeSemiBold: {
    fontSize: hugeSize,
    fontWeight: "500",
  },
});

// --------------------------- COLOR --------------------------- //
export const textColor = StyleSheet.create({
  regular: {
    color: colors.black,
  },
  regularReversed: {
    color: colors.white,
  },
});
