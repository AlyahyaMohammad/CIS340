import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://images-na.ssl-images-amazon.com/images/I/61A-%2BSkohUL._AC_SX425_.jpg",
    
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.image}>
      
        <Text style={styles.text}> CSU Logo</Text>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
   },

   image: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center"

   },

   text: {
    color: "red",
    fontSize: 40,
    fontWeight: 'bold',
   }
});
