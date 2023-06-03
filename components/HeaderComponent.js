import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderComponent() {
  const [active, setActive] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf:"center" }}>
      <HeaderTab btnTxt="Delivery" active={active} setActive={setActive}/>
      <HeaderTab btnTxt="Pickup"  active={active} setActive={setActive}/>
    </View>
  )
}

const HeaderTab = (props) => (
  <TouchableOpacity 
    style={{
      backgroundColor: props.active === props.btnTxt ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30
    }}
    onPress={() => props.setActive(props.btnTxt)}
  >
    <Text 
      style={{
        color: props.active === props.btnTxt ? "white" : "black",
        fontSize: 15,
        fontWeight: 300
      }}
    >
      {props.btnTxt}
    </Text>
  </TouchableOpacity>
)