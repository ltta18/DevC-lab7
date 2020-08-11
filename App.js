import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import firebase from 'firebase';

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessage = async() => {
      const firebaseConfig = {
        apiKey: "AIzaSyAdUfkPv_2iXYiaJPjaSO-fpDiH9JjxUEg",
        authDomain: "chatapp-5af29.firebaseapp.com",
        databaseURL: "https://chatapp-5af29.firebaseio.com",
        projectId: "chatapp-5af29",
        storageBucket: "chatapp-5af29.appspot.com",
        messagingSenderId: "55398463712",
        appId: "1:55398463712:web:4115eb4c44bde633253885",
        measurementId: "G-634RPCXBKK"
      };
      
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      const database = firebase.database();
  
      const snapshot = await database.ref('/messages').once('value')
        console.log(snapshot.val())
    }
    getMessage()
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <SafeAreaView>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
