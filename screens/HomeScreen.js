import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { HeroImage, Logo } from '../index'
import * as Animatable from 'react-native-animatable';


const HomeScreen = ({navigation}) => {
  const [type, setType] = useState("resturants");

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown: false
  })
}, []);

  return (
   <SafeAreaView className="bg-white relative flex-1">
    {/* First Section */}
    <View className="flex-row px-6 mt-12 items-center space-x-2">
      <View className="w-16 h-16 rounded-full bg-black items-center justify-center">
        <Animatable.Text animation="rubberBand" iterationCount="infinite" direction="alternate"
        className="text-[#4DABB7] text-3xl font-semibold"
        >Go</Animatable.Text>
      </View>
      {/* <Text className="text-[#2A2B4B] font-semibold text-3xl">Travel</Text> */}
      <Animatable.Image source={Logo} className="w-20 h-[60px] object-cover mt-2 "  
        animation="lightSpeedIn" iterationCount="infinite" direction="alternate"
      />
    </View>

    {/* Section Section */}
    <View className="px-6 space-y-3 mt-3">
      <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
      <Text className="text-[#00BCC9] text-[34px] bottom-3 font-bold">Good Moments</Text>

      <Text className="text-{#3C6072} text-base bottom-6">
        Explore around Garu... Find the best Restaurances, Attraction places and Hotels.

      </Text>
    </View>
    {/*Circle Section */}
    <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 right-36"></View>
    <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -right-36"></View>
    {/* Image container */}
    <View className="flex-1 relative items-center justify-center">
      <Animatable.Image source={HeroImage} className="w-full h-full object-cover -mt-20"  
        animation="fadeIn"
        easing="ease-in-out"
      />

    <TouchableOpacity onPress={() => navigation.navigate("Discover")}
     className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] 
    rounded-full items-center justify-center">
      <Animatable.View animation="pulse" easing="ease-in-out" iterationCount={'infinite'}
       className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
        <Text className="text-grey-50 text-[36px] font-semibold">Go</Text>
      </Animatable.View>
   
    </TouchableOpacity>

    </View>

   </SafeAreaView>
  )
}

export default HomeScreen