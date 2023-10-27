import React from "react";
import { Text, View } from "react-native";


const MyPetScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#006600", fontSize: 40 }}>My Pet!</Text>
        </View>
      );
};

export default MyPetScreen;