import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import GlobalStyles from '../GlobalStyles';
import SearchComponent from '../components/SearchComponent';
import CategoriesComponent from '../components/CategoriesComponent';
import RestaurantItemComponent from '../components/RestaurantItemComponent';

export default function HomePage() {
  return (
    <SafeAreaView  style={[GlobalStyles.droidSafeArea, {backgroundColor: "#eee", flex: 1 }]}>
      <View style={{ backgroundColor: "white", padding: 15}}>
        <HeaderComponent/>
        <SearchComponent/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesComponent/>
        <RestaurantItemComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}