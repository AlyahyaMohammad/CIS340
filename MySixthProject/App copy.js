import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://cdn.freebiesupply.com/logos/large/2x/csu-2-logo-png-transparent.png",
    
  };


  return (
    <View style={styles.container}>
      
      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.png')}
      />

      <Image
      
        style={styles.urlCSULogo}
        source={{
          url:"https://images-na.ssl-images-amazon.com/images/I/61A-%2BSkohUL._AC_SX425_.jpg"
        }}
      />

      <Image 
      style={styles.stretchLogo}
      source={csuLogo} />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
   },

   localCSULogo: {
     width: 55,
     height: 65,

   },

   urlCSULogo: {
     width:50,
     height: 50

   },

   stretchLogo: {
    
    height: 150,
    resizeMode: 'center',
   }
});
