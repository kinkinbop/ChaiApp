import React, { useState } from 'react';
import { View, TouchableOpacity,Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 23.3535,
    longitude: 116.6822,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mapKey, setMapKey] = useState(0); // Add a key state for the MapView

  const zoomInOnCurrentLocation = async () => {
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      setIsLoading(false);
      return;
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    setMapKey(prevKey => prevKey + 1); // Update the key to force re-render
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <MapView
        key={mapKey} // Use the key here
        style={styles.map}
        region={region}
      >
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title={"Pet's Location"}
          description={'Here is my pet!'}
        />
      </MapView>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <TouchableOpacity style={styles.buttonContainer} onPress={zoomInOnCurrentLocation}>
          <Text style={styles.buttonText}>获取定位</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60, // Adjust this value as needed to position above the bottom tab bar
    right: 20, // Adjust the distance from the right
    backgroundColor: 'white',
    padding: 10, // Adjust the padding as needed for size
    borderRadius: 0, // Set to 0 for square shape
    elevation: 3, // This adds a shadow on Android
    shadowOpacity: 0.3, // Below lines add shadow on iOS
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
  },
  buttonText: {
    color: 'black', // Set the text color
    fontSize: 16, // Adjust the font size as needed
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default MapScreen;