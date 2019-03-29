import React from 'react';
import { Button, Text, View } from 'react-native';
import Style from './stylesheet.js';

export default (props) =>
  <View style={Style.counter}>
    <View style={Style.decrement}>
      <Button
        onPress={props.decrement}
        title='--'
        disabled={props.currentValue == 0}
      />
    </View>
    <Text style={Style.currentValue}>
      {props.currentValue}
    </Text> 
    <View style={Style.increment}>
      <Button
        onPress={props.increment}
        title='++'
      />
    </View>
  </View>
  ;
