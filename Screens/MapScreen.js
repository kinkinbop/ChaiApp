import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Modal, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import DogIcon from '../icon/dogIcon';
import ManIcon from '../icon/manIcon';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showWebSocketLocation, setShowWebSocketLocation] = useState(true);
  const [websocketLocation, setWebsocketLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  const [circleRadius, setCircleRadius] = useState(1000); // in meters
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mapKey, setMapKey] = useState(0);
  const wsRef = useRef(null); 
  let heartbeatInterval

  useEffect(() => {

    const getCurrentLocation = async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    
    };


    // Function to establish WebSocket connection
    const connectWebSocket = () => {
      wsRef.current = new WebSocket('ws://139.186.13.82:3003/terminal/realtime');

      wsRef.current.onopen = () => {
        console.log('WebSocket Connected');
        heartbeatInterval = setInterval(() => {
          wsRef.current.send(JSON.stringify([{ RequestType: 0, Data: true }]));
        }, 20000);
      };

      wsRef.current.onclose = () => {
        console.log('WebSocket Disconnected');
        //clearInterval(heartbeatInterval);
        // Optionally try to reconnect or handle the disconnection
      };

      wsRef.current.onerror = (error) => {
        console.error('WebSocket Error:', error);
        // Optionally handle the error, like attempting to reconnect
      };

      wsRef.current.onmessage = (e) => {
        console.log('Message from server:', e.data);
        try {
          const receivedData = JSON.parse(e.data);
          // The server response is an array, and we need the first element's Data object
          if (receivedData.length > 0 && receivedData[0].Data) {
            const { Latitude, Longitude } = receivedData[0].Data;
            if (Latitude && Longitude) {
              const newLocation =({
                latitude: Latitude,
                longitude: Longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              });
              setWebsocketLocation(newLocation);
              setRegion(newLocation);
            }
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
    };
    getCurrentLocation();
    // Establish the connection
    connectWebSocket();
    // Clean up
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      clearInterval(heartbeatInterval);
    };

    
  }, []);

  const handleLocationRequest = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      setIsLoading(true);
      const request = {
        RequestType: 1,
        Data: {
          TerminalID: "10069095980",
          Subscribe: true,
          WidthCurLocation: true
        }
      };
      console.log('Sending request:', request);
      wsRef.current.send(JSON.stringify([request]));
      setIsLoading(false);
      setMapKey(prevKey => prevKey + 1);
    } else {
      console.log('WebSocket is not connected. Attempting to reconnect...');
      // Optionally reconnect or handle the disconnection
    }
  };

  const toggleWebSocketLocationVisibility = () => {
    setShowWebSocketLocation(!showWebSocketLocation);
  };

  const toggleCircleVisibility = () => {
    setIsCircleVisible(!isCircleVisible);
  };

  const handleRadiusChange = (radius) => {
    setCircleRadius(Number(radius));
  };

  return (
    <View style={styles.container}>
      <MapView
        key={mapKey}
        style={styles.map}
        region={region}
      >
        
        {isCircleVisible && currentLocation && (
          <Circle
            center={currentLocation}
            radius={circleRadius}
            strokeColor={"rgba(158,158,255,1.0)"}
            fillColor={"rgba(158,158,255,0.3)"}
          />
        )}
        {currentLocation && (
          <Marker
            coordinate={currentLocation}
            title={"Current Location"}
            description={`Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}`}
          >
            <ManIcon width="30" height="30" />
          </Marker>
        )}
        {showWebSocketLocation && websocketLocation && (
          <Marker
            coordinate={websocketLocation}
            title={"WebSocket Location"}
            description={`Latitude: ${websocketLocation.latitude}, Longitude: ${websocketLocation.longitude}`}
            >
              <DogIcon width="30" height="30" />
          </Marker>
          
        )}
      </MapView>
      
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLocationRequest}>
          <Text style={styles.buttonText}>获取定位</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.toggleButtonPet} onPress={toggleWebSocketLocationVisibility}>
        <Text style={styles.buttonText}>{showWebSocketLocation ? '隐藏宠物位置' : '显示宠物位置'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleCircleVisibility}>
        <Text style={styles.buttonText}>{isCircleVisible ? '隐藏围栏' : '显示围栏'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.radiusButton} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.buttonText}>设置围栏半径</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOuterContainer}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                onChangeText={handleRadiusChange}
                value={String(circleRadius)}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={[styles.buttonContainer, styles.modalButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    bottom: 80, 
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    zIndex: 10,
  },

  toggleButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
  },

  toggleButtonPet: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
  },

  radiusButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: -1, width: 0 },
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalOuterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  
});

export default MapScreen;