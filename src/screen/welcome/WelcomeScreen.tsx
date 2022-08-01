import { useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";

import { welcomeData } from "./welcomeData";
import { screenWidth } from "../../styles/variables/screen";

import { PageIndicator } from "../../components/visuals/pageIndicator/PageIndicator";
import { ScrollScreen } from "./scrollScreen/ScrollScreen";

export const WelcomeScreen = () => {
  const [pageIndex, setpageIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.velocity!.x > 0) {
      const index = Math.ceil(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
      );

      setpageIndex(index);
    } else {
      const index = Math.floor(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
      );

      setpageIndex(index);
    }
  };

  return (
    <View>
      <FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        snapToInterval={screenWidth}
        data={welcomeData}
        keyExtractor={({ index }) => index.toString()}
        renderItem={({ item: { text, title, imgPath } }) => (
          <ScrollScreen
            text={text}
            title={title}
            imgPath={imgPath}
          ></ScrollScreen>
        )}
        onScroll={onScroll}
      ></FlatList>
      <View style={styles.pageIndicatorView}>
        <PageIndicator
          numOfIndicators={4}
          pageIndex={pageIndex}
        ></PageIndicator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageIndicatorView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 48,
  },
});
