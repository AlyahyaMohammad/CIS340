import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyFirstApp() {
 return (
  <View>
     <Text>
        Hello, I am Mohammad from CIS340 {"\n"}
      </Text>
      </View>
 
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: "Center",
      alignItem: "Center"
      
    }}>
      <Text>  Welcome to My Class</Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}

