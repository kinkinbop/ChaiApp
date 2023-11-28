import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  let ws;
  let heartbeatInterval;

  useEffect(() => {
    // Establish WebSocket connection
    ws = new WebSocket('ws://139.186.13.82:3003/terminal/realtime');

    ws.onopen = () => {
      console.log('WebSocket Connected');
      // Send initial subscription messages
      const subscriptionMessages = [
        {
          "RequestType":1,
          "Data":{
            "TerminalID": "10069095980", // 终端ID
            "Subscribe": true, // 是否订阅: false-取消订阅, true-订阅
            "WidthCurLocation": true
          }
        }
      ];
      ws.send(JSON.stringify(subscriptionMessages));

      // Send heartbeat every 20 seconds
      heartbeatInterval = setInterval(() => {
        ws.send(JSON.stringify([{ RequestType: 0, Data: true }]));
      }, 20000);
    };

    ws.onmessage = (e) => {
      console.log('Message from server:', e.data);
      try {
        const receivedData = JSON.parse(e.data);
        setMessages(prevMessages => [...prevMessages, ...receivedData]);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    ws.onerror = (e) => {
      console.error('WebSocket Error:', e.message);
    };

    ws.onclose = () => {
      console.log('WebSocket Disconnected');
    };

    return () => {
      if (ws) {
        ws.close();
      }
      clearInterval(heartbeatInterval);
    };
  }, []);

  return (
    <View style={styles.container}>
      {messages.map((message, index) => (
        <Text key={index} style={styles.text}>
           {`Terminal ID: ${message.Data.TerminalID}, Location: ${message.Data.Latitude}, ${message.Data.Longitude}`}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default MessageScreen;
