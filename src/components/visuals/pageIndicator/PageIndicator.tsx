import { StyleSheet, View } from "react-native";
import { colors } from "../../../styles/helpers/colors";

interface props {
  numOfIndicators: number;
  pageIndex: number;
}

export const PageIndicator = ({ numOfIndicators, pageIndex }: props) => {
  const createListOfItems = () => {
    const listOfItems = [];

    for (let i = 0; i < numOfIndicators; i++) {
      listOfItems.push(
        <View
          key={i}
          testID="indicator"
          style={[
            styles.indicator,
            pageIndex === i
              ? { backgroundColor: colors.primary }
              : { backgroundColor: colors.grayLight },
          ]}
        ></View>
      );
    }

    return listOfItems;
  };

  return (
    <View style={styles.container}>
      {createListOfItems().map((item) => item)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 6,
  },
});
