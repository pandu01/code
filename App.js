import React ,{component} from 'react';
import {TouchableOpactiy, View, Text, TextInput, Image} from 'react-native';

export default class App extends component{

  constructor(props){
    super(props)
    this.sate={

      username: "",
      password: ""

    }
  }

  validate_file=()=>{
const {username, password} = this.state
if (username == ""){

  alert("Username jangan dikosongi")
  return false

}else if (password == ""){

  alert("Password jangan dikosongi")
  return false

}
 return true


  }

  making_api_call=()=>{

    if(this.validate_field()){

      alert("berhasil login")

    }

  }

  render(){

    return(

      <View Style={{}}> 

      </View>
    )

  }

}