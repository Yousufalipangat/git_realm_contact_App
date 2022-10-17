
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native'

import { getAllContact, addContact, deleteContact, deleteAllContact } from './realmF';

function App() {
  const [name, setname] = useState('');
  const [phoneNumber, setphonenumber] = useState('');
  const [contacts, setcontacts] = useState(getAllContact);
  const [counter, setcounter] = useState(1)
  return (
    <SafeAreaView style={{ alignItems: 'center' }} >
      <View style={styles.form}>
        <TextInput style={styles.textField} placeholder='Name' onChangeText={(text) => setname(text)} />
        <TextInput style={styles.textField} placeholder='Phone Number' keyboardType='number-pad' maxLength={10} onChangeText={(text) => setphonenumber(text)} />

        <Button title='Save' onPress={() => {
          if (name != "" && phoneNumber != "") {
            addContact(counter + '', name, phoneNumber)
            setcounter(counter + 1);
            setcontacts(getAllContact);
          }
        }} />

      </View>
      <View style={{width:350,justifyContent:'space-between',backgroundColor:'white',padding:10,flexDirection:'row',borderBottomWidth:2}}>
        <Text style={{flex:1,color:'black',fontSize:24,fontWeight:'bold',textAlign:'center'}}>Contacts</Text>
        <View style={{}} >
        <Button title='delete All' color={'maroon'} onPress={()=>{deleteAllContact();setcontacts(getAllContact)}}  />
        </View> 
      </View>
      <View>
         <FlatList data={contacts} style={{backgroundColor:'white',width:350}}
          keyExtractor={item => item.recordId}
          renderItem={(item) => (
            <View style={{backgroundColor:'white',flexDirection:'row',padding:10}}>
              <Text style={{flex:.3,color:'#666',fontSize:16}}>{item.index+1}</Text>
              <View style={{flex:1}}>
              <Text style={{flex:1,color:'#666',fontSize:16}}>Name : {item.item.givenName}</Text>
              <Text style={{flex:1,color:'#666',fontSize:16}}>PhNo  : {item.item.phoneNumber}</Text>
              </View>
              <View style={{ width: 80, height: 40 }}>
                <Button title='delete' color={'red'} onPress={() => {deleteContact(item.item.recordId) 
                setcontacts(getAllContact)}} />

              </View>

            </View>
          )
          }
        /> 
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    width: 300,
    height: 300,
    padding: 10

  },
  textField: {

    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10

  }
});

export default App;
