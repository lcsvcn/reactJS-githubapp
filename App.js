/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';

export default class App extends Component<{}> {
state = {
  modalVisible: false,

  repos : [
  ],  
};

async componentDidMount() {
  const repos = JSON.parse(await AsyncStorage.getItem('reposMem')) || [];

  this.setState({repos});
}


_addRepository = async (newRepoText) => {
  const repoCall = await fetch('https://api.github.com/repos/' + newRepoText);
  const response = await repoCall.json();


if(response.message === "Not Found") {
  console.log("INVALID REPO NAME...");
} else {
  const str = response.updated_at;
    const repository = {
      id : response.id,
      thumbnail : response.owner.avatar_url,
      title : response.name,
      author : response.owner.login,
      watch : response.watchers,
      updated_day : str.substring(8, 10) + '/' + str.substring(5, 7) + '/' + str.substring(0, 4),
      updated_time : str.substring(11, 16),
    };

    this.setState({
      modalVisible : false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });
  }
  await AsyncStorage.setItem('reposMem', JSON.stringify(this.state.repos));
};

  render() {  
    if(Platform.OS === 'ios') {   // codigo para ios
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Minicurso Gonative</Text>
            <TouchableOpacity onPress={() => this.setState({modalVisible : true})}>
              <Text style={styles.headerButton}>+</Text> 
              
            </TouchableOpacity>

          </View>

          <ScrollView contentContainerStyle ={styles.repoList}>
            { this.state.repos.map( repo => <Repo key={repo.id} data={repo} />) }
          </ScrollView>    
          <NewRepoModal 
            visible={this.state.modalVisible}
            onCancel={() => this.setState({modalVisible: false})}
            onAdd = {this._addRepository}
          />
        </View>
        
      );
    } else {    // codigo para android -- material design
            return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Minicurso Gonative</Text>
            <TouchableOpacity onPress={() => this.setState({modalVisible : true})}>
              <Text style={styles.headerButton}>+</Text>  
            </TouchableOpacity>

          </View>

          <ScrollView contentContainerStyle ={styles.repoList}>
            { this.state.repos.map( repo => <Repo key={repo.id} data={repo} />) }
          </ScrollView>    
          <NewRepoModal 
            visible={this.state.modalVisible}
            onCancel={() => this.setState({modalVisible: false})}
            onAdd = {this._addRepository}
          />
        </View>
        
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

 header:{
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor:'#FFF',
    justifyContent:'center',  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 20,
  },

  headerButton: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },


  headerText:{
    fontSize: 18,
    color: '#000',
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',  
  },

  repoList: {
    padding: 20,
  },

 

});
