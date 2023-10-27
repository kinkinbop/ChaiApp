import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

const DashBoard = ({ navigation }) => {
  const [topBlockContent, setTopBlockContent] = useState('Content 1');

  const handleTopBlockPress = (content) => {
    setTopBlockContent(content);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.ConstantBlock, { top: StatusBar.currentHeight }]}>
        <Text style={styles.text}>{topBlockContent}</Text>
        <LinearGradient
          colors={topBlockContent === 'Content 1' ? ['#929692', '#cccccc'] : ['#cccccc', '#929692']}
          style={styles.toolbar}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity 
            style={styles.toolbarButton} 
            onPress={() => handleTopBlockPress('Content 1')}
          >
            <Text style={styles.toolbarButtonText}>Content 1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.toolbarButton} 
            onPress={() => handleTopBlockPress('Content 2')}
          >
            <Text style={styles.toolbarButtonText}>Content 2</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.topBlock}>
          <Text style={styles.text}>Status</Text>
          <Ionicons name="bar-chart-outline" size={80} color="#006600" />
        </TouchableOpacity>
        <View style={styles.row}>
          <View style={styles.column}>
            
              <TouchableOpacity key={2} style={styles.block}>
                <Text style={styles.text}>Breathe</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
              <TouchableOpacity key={3} style={styles.block} onPress={() => navigation.navigate(`Sleep`)}>
                <Text style={styles.text}>Sleep</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
              <TouchableOpacity key={4} style={styles.block} onPress={() => navigation.navigate(`HeartBeat`)}>
                <Text style={styles.text}>HeartBeat</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
              <TouchableOpacity key={5} style={styles.block} onPress={() => navigation.navigate(`Temperature`)}>
                <Text style={styles.text}>Temperature</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
            
          </View>
          <View style={styles.column}>
            
              <TouchableOpacity key={6} style={styles.block} onPress={() => navigation.navigate(`Sports`)}>
                <Text style={styles.text}>Sports</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
              <TouchableOpacity key={7} style={styles.block} onPress={() => navigation.navigate(`Weight`)}>
                <Text style={styles.text}>Weight</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
              <TouchableOpacity key={8} style={styles.block} onPress={() => navigation.navigate(`Diary`)}>
                <Text style={styles.text}>Diary</Text>
                <Ionicons name="bar-chart-outline" size={80} color="#006600" />
              </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  ConstantBlock: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    left: '2.5%',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    width: '90%',
  },
  text: {
    fontSize: 20,
  },
  toolbar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#a5a8a5',
    borderRadius: 25, // Make the toolbar oval
    height: 35,
    width: '50%', // Adjust the width
    position: 'absolute',
    bottom: 10, // Adjust the bottom
  },
  toolbarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  toolbarButtonText: {
    fontSize: 16,
    color: '#006600',
  },
  
});

export default withNavigation(DashBoard);
