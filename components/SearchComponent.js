import { View, Text } from 'react-native'
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchComponent() {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20
          },
          textInputContainer: {
            backgroundColor: '#eee',
            flexDirection: 'row',
            borderRadius: 50,
            alignItems: 'center'
          }
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons name='location-sharp' size={24} style={{ marginLeft: 10 }}/>
          </View>
        )}
        renderRightButton={() => (
          <View 
            style={{ 
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: "white",
              borderRadius: 20,
              marginRight: 10,
              padding: 5
            }}>
            <AntDesign name="clockcircle" size={15} style={{ marginRight: 3}}/>
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  )
}