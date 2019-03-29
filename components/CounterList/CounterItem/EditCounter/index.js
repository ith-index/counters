import React from 'react';
import { Button, Text, View } from 'react-native';
import Style from './stylesheet.js';

export default (props) =>
  <View style={Style.editCounter}>
    <Text style={Style.currentValue}>
      {props.currentValue}
    </Text>
    <View>
      <Button
        color='#D11A2A'
        title='Delete'
        onPress={props.deleteCounter}
      />
    </View>
  </View>
  ;
