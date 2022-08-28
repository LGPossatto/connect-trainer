import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { textColor, textStyles } from "../../styles/textStyles";
import { colors } from "../../styles/variables/colors";
import { screenWidth } from "../../styles/variables/screen";

import LeftArrow from "../../assets/icons/leftArrow";

import { BackgroundFlag } from "../../components/visuals/background-flag/BackgroundFlag";
import { StackingCard } from "../../components/cards/stacking-card/StackingCard";
import { InfoBlock } from "./info-block/InfoBlock";

export const WorkoutScreen = () => {
  const handleOnPress = () => {
    console.log("btn onPress");
  };

  return (
    <View>
      <View style={styles.titleView}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={handleOnPress}
          activeOpacity={0.7}
        >
          <LeftArrow></LeftArrow>
        </TouchableOpacity>
        <Text style={[textStyles.bigBold, textColor.regularReversed]}>
          Test Title
        </Text>
        <View style={styles.alignInv}>
          <LeftArrow></LeftArrow>
        </View>
      </View>
      <ScrollView>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/images/workout-1.jpg")}
          ></Image>
        </View>
        <View style={styles.backgroungFlag}>
          <BackgroundFlag></BackgroundFlag>
        </View>
        <View style={styles.cardView}>
          <StackingCard>
            <View style={styles.cardTitleView}>
              <View style={styles.infoView}>
                <Text style={[textStyles.bigBold, textColor.regular]}>
                  Informação
                </Text>
                <InfoBlock
                  title="Informação 1"
                  text="ksajd kjsadkjasd"
                ></InfoBlock>
                <InfoBlock title="Informação 2" text="ksajd kjsad"></InfoBlock>
                <InfoBlock
                  title="Informação 3"
                  text="ksajd kjsadk j asd"
                ></InfoBlock>
              </View>
              <View style={styles.timeView}>
                <Text style={[textStyles.hugeBold, textColor.regular]}>
                  19:30
                </Text>
                <Text
                  style={[
                    textStyles.regular,
                    textColor.regular,
                    { lineHeight: 20 },
                  ]}
                >
                  Quarta-Feira
                </Text>
              </View>
            </View>
          </StackingCard>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 24,
  },
  backBtn: {
    overflow: "hidden",
    borderRadius: 16,
    marginLeft: 20,
  },
  alignInv: {
    opacity: 0,
    marginRight: 20,
  },
  imgView: {
    width: "100%",
    maxHeight: screenWidth * 0.5625,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.black,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  backgroungFlag: {
    paddingTop: 24,
  },
  cardView: {
    marginHorizontal: 20,
  },
  cardTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoView: {},
  timeView: {
    alignItems: "center",
    lineHeight: 0,
  },
});
