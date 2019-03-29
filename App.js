import React, {Component} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CounterList from './components/CounterList';
import Controls from './components/Controls';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [],
      isEditing: false,
    };
    this.loadCounters();
  }

  render() {
      return (
        <View style={styles.app}>
          <Controls
            isEditing={this.state.isEditing}
            add={_ => this.addCounter()}
            edit={_ => this.edit()}
            done={_ => this.done()}
          />
          <CounterList
            counters={this.state.counters}
            isEditing={this.state.isEditing}
            decrement={index => this.decrement(index)}
            increment={index => this.increment(index)}
            deleteCounter={index => this.deleteCounter(index)}
          />
        </View>
      );
  }

  addCounter() {
    const counters = this.state.counters.slice();
    counters.splice(0, 0, 0);
    this.saveCounters(counters)
    this.setState({
      counters: counters,
    });
  }

  deleteCounter(index) {
    const counters = this.state.counters.slice();
    counters.splice(index, 1);
    this.saveCounters(counters)
    this.setState({
      counters: counters,
    });
  }

  edit() {
    this.setState({
      isEditing: true,
    })
  }
  
  done() {
    this.setState({
      isEditing: false,
    })
  }

  decrement(index) {
    const counters = this.state.counters.slice();
    counters[index] = Math.max(0, counters[index] - 1);
    this.saveCounters(counters)
    this.setState({
      counters: counters,
    });
  }

  increment(index) {
    const counters = this.state.counters.slice();
    counters[index] = counters[index] + 1;
    this.saveCounters(counters)
    this.setState({
      counters: counters,
    });
  }

  async loadCounters() {
    try {
      const countersJSON = await AsyncStorage.getItem('counters');
      if (countersJSON !== null) { 
        this.setState({
          counters: JSON.parse(countersJSON),
        });
      } 
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  
  async saveCounters(counters) {
    try {
      await AsyncStorage.setItem('counters', JSON.stringify(counters))
    } catch (error) {
      console.log("Error:" + error);
    }
  }
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    padding: 8,
    backgroundColor: '#F5F5F5',
  },
});
