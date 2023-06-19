import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {
  const [type, setType] = useState("resturants");

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown: false,
    backgroundColor: 'red',
    shadowColor: '#f9fafd'
  })
}, []);

  return (
   <SafeAreaView className="bg-white relative flex-1">
    {/* First Section */}
    <View className="flex-row px-6 mt-12 items-center space-x-2">
      <View className="w-16 h-16 rounded-full bg-black items-center justify-center">
        {/* Added Animation the text 'GO' */}
        <Animatable.Text animation="rubberBand" iterationCount="infinite" direction="alternate"
        className="text-[#4DABB7] text-3xl font-semibold"
        >Go</Animatable.Text>
      </View>
      {/* Added Animation the App Logo */}
      <Animatable.Image source={require("../assets/logo.jpg")} className="w-[60px] h-[50px] object-cover mt-1 "  
        animation="pulse" easing="ease-in-out" iterationCount="infinite" direction="alternate"
      />
      
    </View>

    {/* Section Section */}
    <View className="px-6 space-y-3 mt-1">
      <View className="top-1">
        <Text className="text-[#3C6072] text-[60px]">Enjoy the </Text>
      </View>
      <View className="flex-row top-[-10px]">
        <Text className="text-[#3C6072] text-[50px]">Trip </Text>
        <Animatable.Image source={require("../assets/rocket.png")} animation="rubberBand" iterationCount="infinite" direction="alternate"
          className="w-[50px] h-[40px] object-cover right-3 -bottom-5 "/>
      </View>
      <Text className="text-[#3C6072] top-[-20px] text-[25px] font-bold">with</Text>
      <Text className="text-[#00BCC9] top-[-40px] text-[40px] bottom-3 font-bold" >Good Moments</Text>
   

      <Text className="text-{#3C6072} top-[-45px] text-base bottom-10 font-bold">
        Explore around the World... Find the best Restaurances, Attraction places and Hotels.
      </Text>
    </View>

    {/*Circle Section */}
    {/* Added two full rounded circle on Homepage. Should be behind the Hero Image */}
    <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute left-5 right-1 -bottom-10"></View>
    {/* <View className="w-[250px] h-[250px] bg-[#E99265] rounded-full absolute -bottom-10 -right-36"></View> */}
    {/* Image container */}
    <View className="flex-1 relative items-center justify-center">
      <Animatable.Image source={require("../assets/hero.png")} className="w-[300px] h-[380px] object-cover left-1 bottom-20"  
        animation="fadeIn"
        easing="ease-in-out"
      />

    {/* Button which serve as navigation the the Discover Screen */}
    <TouchableOpacity onPress={() => navigation.navigate("Discover")}
     className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] 
    rounded-full items-center justify-center">
      <Animatable.View animation="pulse" easing="ease-in-out" iterationCount={'infinite'}
       className="w-20 h-20 items-center justify-center rounded-full bg-[#fff]">
        <Text className="text-[#00BCC9] text-[36px] font-semibold">Go</Text>
      </Animatable.View>
   
    </TouchableOpacity>

    </View>
    <StatusBar style="auto" color="grey" />
   </SafeAreaView>
  )
}

export default HomeScreen