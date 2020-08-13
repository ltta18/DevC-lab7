import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from 'react-native-gifted-chat'
import firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAdUfkPv_2iXYiaJPjaSO-fpDiH9JjxUEg",
  authDomain: "chatapp-5af29.firebaseapp.com",
  databaseURL: "https://chatapp-5af29.firebaseio.com",
  projectId: "chatapp-5af29",
  storageBucket: "chatapp-5af29.appspot.com",
  messagingSenderId: "55398463712",
  appId: "1:55398463712:web:4115eb4c44bde633253885",
  measurementId: "G-634RPCXBKK"
};


export default function App({ name }) {
  const [messages, setMessages] = useState([]);

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  const database = firebase.database().ref('/messages');

  useEffect(() => {
    (async() => {
      try {
        const snapshot = await database.limitToLast(20).once('value');
        const result = [];
        Object.keys(snapshot.val()).map((key) => {
          console.log(snapshot[key], snapshot.val()[key])
					result.push(snapshot.val()[key]);
				});
				setMessages(result);
      }
      catch (e) {
        console.log(e)
      }
    })
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: name,
        avatar: 'https://www.google.com/search?q=facebook+profile+picture&tbm=isch&ved=2ahUKEwj0ve-GpJjrAhUOfZQKHWH9C-IQ2-cCegQIABAA&oq=facebook+pro&gs_lcp=CgNpbWcQARgAMgQIABBDMgQIABBDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAELEDOgcIABCxAxBDUN0PWIMcYIcraABwAHgAgAFjiAHOB5IBAjEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=iz81X7TMFI760QTh-q-QDg&bih=578&biw=1280&rlz=1C1CHBF_enUS842US842#imgrc=uRxR-rrxCU1aWM'
      }}
      showUserAvatar={true}
      showAvatarForEveryMessage={true}
    />
  )
}