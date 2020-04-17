import React from 'react';
import {Text, TextImport, View } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hey, I am {props.name} From CIS340</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text> Welcome to CIS340</Text>
      <Student name="Mohammad Alyahya"/>
      <Student name="Yazeed Alnughaymishi"/>
      <Student name="Aziz Abohaimed"/>
      <Student name="Sami Aljaber"/>
    </View>
  );

}

