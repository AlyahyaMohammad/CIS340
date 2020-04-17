import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {
  
  function getFullName (fName, mName, lName){
  return fName + " " + mName + " " + lName;
  }  
  
  
  const pet= "Dog";
  return (
     <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am Mohammad from CIS340 {"\n"}
        My Full Name is {getFullName ("Mohammad", "Ibrahim", "Alyahya")} {"\n"}
        I have a {pet}!
      </Text>
      
    
  );
}

