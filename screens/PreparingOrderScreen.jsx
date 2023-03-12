import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import { StatusBar as StsBar } from "expo-status-bar";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 bg-[#00CCBB] justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-64 w-64"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white text-center font-bold"
      >
        Waiting for Restaurant to accept order!
      </Animatable.Text>
      <Progress.Circle size={30} indeterminate={true} color="white" />

      <StsBar style="auto" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
