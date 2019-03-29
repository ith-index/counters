import React from 'react';
import { Button, View } from 'react-native';
import Style from './stylesheet.js';

export default (props) =>
  <View style={Style.controls}>
    <View style={Style.add}>
      <Button
        title='Add'
        onPress={props.add}
      />
    </View>
    <View style={Style.splitter}/>
    <View style={Style.edit}>
      <Button
        title={props.isEditing ? 'Done' : 'Edit'}
        onPress={props.isEditing ? props.done : props.edit}
      />
    </View>
  </View>
  ;
