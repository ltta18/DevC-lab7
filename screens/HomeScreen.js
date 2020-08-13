import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const Home = ({ navigation }) => {
  const [ input, setInput ] = useState('')

  const handleInputChange = (newInput) => {
    setInput(newInput);
  }

  const pressJoin = () => {
    navigation.navigate("Chat", { name: input });
  }

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput 
        placeholder="Type username" 
        onChangeText={handleInputChange}
      />
      <Button title="Join" onPress={pressJoin}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default Home;