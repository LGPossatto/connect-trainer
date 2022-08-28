import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../../../styles/variables/colors";
import { textStyles } from "../../../styles/textStyles";

import { WeekDaysView } from "./week-days-view/WeekDaysView";

interface props {
  title: string;
}

export const WorkoutCard = ({ title }: props) => {
  const handleOnPress = () => {
    console.log("card press");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOnPress}
      activeOpacity={0.95}
    >
      <LinearGradient
        style={styles.gradient}
        colors={[colors.primaryDark, colors.primary]}
        start={[0.3, 0.3]}
        end={[0.7, 0.7]}
      ></LinearGradient>
      <View style={styles.contentView}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/card-img-placeholder.jpg")}
          ></Image>
        </View>
        <View style={styles.infoView}>
          <View style={styles.textView}>
            <Text
              numberOfLines={1}
              style={[textStyles.regularBold, styles.textColor]}
            >
              {title}
            </Text>
            <Text style={[textStyles.bigBold, styles.textColor]}>19:30</Text>
          </View>
          <View style={styles.lineSpan}></View>
          <WeekDaysView day="0"></WeekDaysView>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    position: "relative",
    padding: 12,
    borderRadius: 8,
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  contentView: {
    flexDirection: "row",
  },
  imgView: {
    overflow: "hidden",
    width: 80,
    height: 80,
    padding: 2,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  infoView: {
    flex: 1,
    paddingLeft: 12,
  },
  textView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textColor: {
    color: colors.white,
  },
  lineSpan: {
    width: "100%",
    marginBottom: 8,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
  },
});
