import React from 'react';
import { FlatList, View } from 'react-native';
import CounterItem from './CounterItem';
import ItemSeparator from './ItemSeparator';

export default (props) =>
  <View>
    <FlatList
      data={props.counters}
      renderItem={
        ({item, index}) => 
          <CounterItem
            currentValue={item} 
            isEditing={props.isEditing}
            decrement={_ => props.decrement(index)}
            increment={_ => props.increment(index)}
            deleteCounter={_ => props.deleteCounter(index)}
          />
      }
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={_ => <ItemSeparator/>}
    />
  </View>
  ;
