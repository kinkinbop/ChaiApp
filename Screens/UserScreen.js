import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/dog.png')} style={styles.avatar} />
        <Text style={styles.username}>User Name</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('MyDevice')}>
          <Text>My Device</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('MyPet')}>
          <Text>My Pet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('Space')}>
          <Text>My Space</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('Setting')}>
          <Text>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('Privacy')}>
          <Text>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('Help')}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.module} onPress={() => navigation.navigate('Task')}>
          <Text>Task</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    width:'90%',
    height:'15%',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 30,
    marginLeft: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  module: {
    width: '9.33%',
    aspectRatio: 1,  // ensures height is the same as the width, creating a square
    margin: 12,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // aligns items to the start of the container
    flexWrap: 'wrap', // allows items to wrap onto the next line
    marginBottom: 10,
    width: '100%',
  },
  
});

export default User;