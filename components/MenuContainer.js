import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MenuContainer = ({title, imageSrc, type, setType}) => {
    const handlePress = ()=>{
        setType(title.toLowerCase());
    }
    return (
        <TouchableOpacity  onPress={handlePress} className="items-center justify-center space-y-2">
            <View className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center
             ${type === title.toLowerCase() ? "bg-gray-200" : "" }
             `}>
                {/* Icon */}
                <MaterialIcons name="attractions" size={60} color="#00BCC9" />
                {/* <Image  className="w-full h-full object-contain bg-red-200" source={imageSrc} /> */}
                <Text className="text-{#00BCC9}  font-semibold">{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default MenuContainer
