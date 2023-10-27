import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from 'react-native-webview';

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: 'https://uri.amap.com/marker?position=174.763336,-36.848461' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Map;


