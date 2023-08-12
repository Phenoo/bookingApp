import { StyleSheet, useColorScheme, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 


import { Text, View } from '../Themed'
import Colors from '@/constants/Colors';


const Header = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
        <View  style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
            <Text >
                <FontAwesome name="map-pin" size={24} />
            </Text>
            <Text style={{fontSize:18, fontWeight: "bold" }}>
                New York, USA
            </Text>
        </View>
        <View>
        <Image
            style={{ width: 50, height: 50, borderRadius: 25}}
            source={{
            uri: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
            }}
      />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})