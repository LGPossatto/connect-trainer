import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const statusBarHeight = Constants.statusBarHeight;

export const screenTrueHeight = Dimensions.get("screen").height;
export const screenHeight = Dimensions.get("screen").height - statusBarHeight;
export const screenWidth = Dimensions.get("screen").width;
