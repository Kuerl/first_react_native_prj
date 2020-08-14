import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fst: '',
      snd: '',
      rlt: 0,
    }
    this.handleFstV = (value) => {
      this.setState({fst: value});
    }
    this.handleSndV = (value) => {
      this.setState({snd: value});
    }
    this.handlePlus = () => {
       this.setState({rlt: Number(this.state.fst) + Number(this.state.snd)});
    }
    this.handleMinus = () => {
       this.setState({rlt: Number(this.state.fst) - Number(this.state.snd)});
    }
    this.handleMultiply = () => {
      this.setState({rlt: Number(this.state.fst) * Number(this.state.snd)});
   }
   this.handleDivision = () => {
      this.setState({rlt: (Number(this.state.fst) / Number(this.state.snd)).toFixed(2)});
   }
  }

   render() {
      return (
         <View style = {styles.container}>
           <TextInput style = {styles.input} keyboardType='numeric' placeholder={'First Value'} value = {this.state.fst} onChangeText={this.handleFstV} />
           <TextInput style = {styles.input} keyboardType='numeric' placeholder={'Second Value'} value = {this.state.snd} onChangeText={this.handleSndV} />
           <View style = {styles.btn_area}>
            <TouchableOpacity onPress = {this.handlePlus} style = {styles.btn_func}><Text style = {styles.txt_btn}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress = {this.handleMinus} style = {styles.btn_func_}><Text style = {styles.txt_btn}>-</Text></TouchableOpacity>
            <TouchableOpacity onPress = {this.handleMultiply} style = {styles.btn_func}><Text style = {styles.txt_btn}>x</Text></TouchableOpacity>
            <TouchableOpacity onPress = {this.handleDivision} style = {styles.btn_func}><Text style = {styles.txt_btn}>/</Text></TouchableOpacity>
           </View>
            <Text style = {styles.rlt_area}>{this.state.rlt}</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#99FFFF',
   },
   input: {
     borderBottomColor: 'black',
     borderBottomWidth: 0.2,
     width: '80%',
   },
   btn_area: {
    flexDirection: 'row',
   },
   btn_func: {
    margin: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderColor: '#FFCC33',
    borderWidth: 0.7,
    borderRadius: 50,
   },
   btn_func_: {
    margin: 8,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderColor: '#FFCC33',
    borderWidth: 0.7,
    borderRadius: 50,
   },
   txt_btn: {
    fontSize: 50,
    fontFamily: 'Arial',
   },
   rlt_area: {
   marginBottom: 100,
    fontSize: 150,
    color: 'pink',
   },
});