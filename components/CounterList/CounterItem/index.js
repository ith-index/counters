import React from 'react';
import { Button, Text, View } from 'react-native';
import Counter from './Counter';
import EditCounter from './EditCounter';

export default (props) =>
  props.isEditing ?
    <EditCounter
      currentValue={props.currentValue}
      deleteCounter={props.deleteCounter}
    />
    :
    <Counter
      currentValue={props.currentValue}
      decrement={props.decrement}
      increment={props.increment}
    />
  ;
