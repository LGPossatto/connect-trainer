import { StyleSheet } from "react-native";

import { colors } from "./variables/colors";

// --------------------------- FONT SIZE --------------------------- //
const standardColor = colors.black;
const regularSize = 20;
const smallSize = 16;
const bigSize = 28;
const hugeSize = 48;

export const textStyles = StyleSheet.create({
  regular: {
    color: standardColor,
    fontSize: regularSize,
    fontWeight: "400",
  },
  regularBold: {
    color: standardColor,
    fontSize: regularSize,
    fontWeight: "700",
  },
  regularSemiBold: {
    color: standardColor,
    fontSize: regularSize,
    fontWeight: "600",
  },
  small: {
    color: standardColor,
    fontSize: smallSize,
    fontWeight: "400",
  },
  smallBold: {
    color: standardColor,
    fontSize: smallSize,
    fontWeight: "700",
  },
  smallSemiBold: {
    color: standardColor,
    fontSize: smallSize,
    fontWeight: "600",
  },
  big: {
    color: standardColor,
    fontSize: bigSize,
    fontWeight: "400",
  },
  bigBold: {
    color: standardColor,
    fontSize: bigSize,
    fontWeight: "700",
  },
  bigSemiBold: {
    color: standardColor,
    fontSize: bigSize,
    fontWeight: "600",
  },
  huge: {
    color: standardColor,
    fontSize: hugeSize,
    fontWeight: "400",
  },
  hugeBold: {
    color: standardColor,
    fontSize: hugeSize,
    fontWeight: "700",
  },
  hugeSemiBold: {
    color: standardColor,
    fontSize: hugeSize,
    fontWeight: "600",
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
  gray: {
    color: colors.gray,
  },
  grayDark: {
    color: colors.grayDark,
  },
  blueLink: { color: colors.blueLink },
  danger: { color: colors.danger },
});
