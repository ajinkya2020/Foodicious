import { View, Image, ScrollView, Text } from 'react-native'
import React from 'react'

export default function CategoriesComponent() {
  const items = [
    {
      image: require('../assets/images/shopping-bag.png'),
      text: 'Pick-up'
    },
    {
      image: require('../assets/images/bread.png'),
      text: 'Bakery'
    },
    {
      image: require('../assets/images/coffee.png'),
      text: 'Coffee'
    },
    {
      image: require('../assets/images/deals.png'),
      text: 'Deals'
    },
    {
      image: require('../assets/images/desserts.png'),
      text: 'Desserts'
    },
    {
      image: require('../assets/images/fast-food.png'),
      text: 'Fast Food'
    },
    {
      image: require('../assets/images/soft-drink.png'),
      text: 'Soft Drinks'
    },
  ]
  return (
    <View style={{ padding: 10, backgroundColor: '#fff' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, itemIndex) => {
          return <View key={itemIndex} style={{ alignItems: 'center', marginRight: 25 }}>
            <Image source={item.image} style={{ width: 50, height: 40, resizeMode: 'contain'}}/>
            <Text style={{ fontSize: 10, fontWeight: 500 }}>{item.text}</Text>
          </View>
        })}
      </ScrollView>
    </View>
  )
}