import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket('ws://139.186.13.82:3003');
    setWs(websocket);

    websocket.onopen = () => {
      console.log('WebSocket connection opened.');

      // Send a subscription message for the terminal ID
      const subscriptionMessage = {
        type: 'subscribe',
        terminalId: '10069096012', // Your terminal ID
      };
      websocket.send(JSON.stringify(subscriptionMessage));

      // Send a heartbeat every 20 seconds
      const heartbeatInterval = setInterval(() => {
        websocket.send(JSON.stringify({ type: 'heartbeat' }));
      }, 20000);

      return () => clearInterval(heartbeatInterval);
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Assuming the server sends back messages that include the terminal ID
      // Filter messages for the specific terminal ID
      if (data.terminalId === '10069096012') {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    };

    websocket.onerror = (event) => {
      console.error('WebSocket error:', event.message);
    };

    websocket.onclose = (event) => {
      console.log('WebSocket connection closed:', event.reason);
    };

    return () => {
      websocket.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {messages.map((message, index) => (
          <Text key={index} style={styles.message}>
            {JSON.stringify(message)}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 10,
  },
  message: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
});

export default MessageScreen;
