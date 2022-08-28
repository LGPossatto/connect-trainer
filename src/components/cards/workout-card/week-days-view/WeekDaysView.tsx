import { StyleSheet, Text, View } from "react-native";

import { textColor, textStyles } from "../../../../styles/textStyles";
import { colors } from "../../../../styles/variables/colors";

interface props {
  day: "0" | "1" | "2" | "3" | "4" | "5" | "6";
}

export const WeekDaysView = ({ day }: props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.day, day === "0" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "0" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          D
        </Text>
      </View>
      <View style={[styles.day, day === "1" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "1" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          S
        </Text>
      </View>
      <View style={[styles.day, day === "2" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "2" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          T
        </Text>
      </View>
      <View style={[styles.day, day === "3" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "3" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          Q
        </Text>
      </View>
      <View style={[styles.day, day === "4" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "4" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          Q
        </Text>
      </View>
      <View style={[styles.day, day === "5" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "5" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          S
        </Text>
      </View>
      <View style={[styles.day, day === "6" ? styles.active : null]}>
        <Text
          style={[
            textStyles.smallBold,
            day === "6" ? textColor.regularReversed : textColor.grayDark,
          ]}
        >
          S
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  day: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  active: {
    backgroundColor: colors.grayDark,
  },
});
