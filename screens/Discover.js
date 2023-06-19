import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {  Hotels, Restaurants, Attractions, NotFound } from '../index';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome5 } from '@expo/vector-icons';
import ItemsContainer from '../components/ItemsContainer';
import { getPlacesData } from '../api';


const Discover = ({navigation}) => {
    // Setting initial states
    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false)
    const [mainData, setMainData] = useState([])
    const [bl_lat, setBl_lat] = useState(null)
    const [bl_lng, setBl_lng] = useState(null)
    const [tr_lat, setTr_lat] = useState(null)
    const [tr_lng, setTr_lng] = useState(null)

    // Hidding header section of screen
    useLayoutEffect(() =>{
        navigation.setOptions({
          headerShown: false
        });
      }, []);

    useEffect(() =>{
        setIsLoading(true);
        getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data =>{
            setMainData(data);
            setInterval(() => {
                setIsLoading(false)
            }, 2000);
        })
    },[bl_lat, bl_lng, tr_lat, tr_lng, type]);

    return (
        <SafeAreaView className="flex-1 bg-white relative mt-10">
            {/* First Section */}
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[36px]">the beuty today</Text>
                </View>
                <View className="w-12 h-12 bg-grey-400 rounded-md items-center justify-center shadow">
                    <Image source={require("../assets/avata.jpg")} 
                    className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>
            {/* Search bar from Google Autocomplete API */}
            <View className="flex-row items-center bg-white mx-4 roundded-xl py-1 px-4 shadow-lg mt-4">
            <GooglePlacesAutocomplete
             GooglePlacesDetailsQuery={{fields: "geometry"}}
                placeholder='Search'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(details?.geometry?.viewport);
                    setBl_lat(details?.geometry?.viewport?.southwest?.lat)
                    setBl_lng(details?.geometry?.viewport?.southwest?.lng)
                    setTr_lat(details?.geometry?.viewport?.northeast?.lat)
                    setTr_lng(details?.geometry?.viewport?.northeast?.lng)
                }}
                query={{
                    // Google API key
                    key: "AIzaSyDbaHp1Z8K_to2ll0CRQ-RLR5lTcR63ilw",
                    language: "en",
                }}
                />
            </View>
            {/* Menu Container */}
          
                {isLoading ? (
                <View className="flex-1 items-center justify-center">
                     <ActivityIndicator size="small" color="#0000ff" />
                </View>
                ):(
                 <ScrollView>
                    <View className="flex-row items-center justify-between px-4 mt-8">
                    <MenuContainer 
                        key={"hotels"}
                        title="Hotels"
                        imageSrc={Hotels}
                        type={type}
                        setType={setType}
                    />

                    <MenuContainer 
                        key={"attractions"}
                        title="Attractions"
                        imageSrc={Attractions}
                        type={type}
                        setType={setType}
                    />

                    <MenuContainer 
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                        type={type}
                        setType={setType}
                    />
                </View>
                {/* Pictures box */}
                <View>
                    <View className="flex-row items-center justify-between px-4 mt-8">
                        <Text className="text-[#2C7279] text-[28px] font-bold">Top Tips</Text>
                        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                            <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                            <FontAwesome5 name="long-arrow-alt-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="p-2 mt-4 flex-row items-center justify-evenly flex-wrap">
                        {mainData?.length > 0 ? (
                        <>
                          {/* Mapping and displaying data list */}
                            {mainData?.map((data, i) =>(
                                <ItemsContainer 
                                    key={i}
                                    imageSrc={
                                        data?.photo?.images?.medium?.url ?
                                        data?.photo?.images?.medium?.url 
                                        :
                                        "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                                    }
                                    title={data?.name}
                                    location={data?.location_string}
                                    data={data}
                                />
                            ))}
                        </> 
                        ):( 
                        <>
                            <View className="w-full h-[400px] items-center space-y-8 justify-center">
                                <Image source={require("../assets/NotFound.png")}
                                    className="w-32 h-32 object-cover"
                                />
                            <Text className="text-[#2C7279] text-[28px] font-bold">Opps.... Omo, No Data Found</Text>
                        </View> 
                        </>
                        )}
                    </View>
                </View>
                 </ScrollView>
                 )}
         
         <StatusBar style="auto" color="grey" />
        </SafeAreaView>
    )
}

export default Discover
