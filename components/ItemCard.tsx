import { StyleSheet, Image, Pressable, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


import {  View } from './Themed'
import { Link } from 'expo-router';


const ItemCard = ({item} : any) => {
  return (
    <View style={{ marginVertical: 10, borderRadius: 10 }}>
        <View style={{ position: "relative", borderRadius: 10 }}>
            
            <Image
                style={{width : "100%", height: 250, marginVertical: 10, borderRadius: 10 }}
                source={{ uri: item.image }} />
                <View style={{width: "100%", height: 250, 
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        position: "absolute", top: 10, padding: 10, borderRadius: 10 }}
                        >
                            <Pressable style={{position: "absolute", top: 20, right: 10 }}>
                               <Ionicons name="ios-bookmark-outline" size={24} color="white" style={{textAlign: "right",}} />
                            </Pressable>
                <Link 
                  href={{
                    pathname: `/item/${item.id}`,
                    params: { 
                        id: item.id, 
                        image: item.image,
                        price: item.price,
                        category:item.category,
                        description: item.description,
                        features: item.features,
                        name: item.name
                    }
                  }}
                >
                    <Pressable style={{ flexDirection: "column", justifyContent: "flex-end", height: "100%", paddingVertical: 10}}>
                    <Pressable style={{ backgroundColor: "rgba(255,0, 0, 0.8)", width: 80, marginTop: 10, borderRadius: 10, paddingVertical: 5}}>
                        <Text style={{ textAlign:"center", color: "white"}}>{item.category}</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: "row", gap: 4, marginVertical: 5, alignItems: "center" }}>
                        <Entypo name="star" size={16} color="orange" />
                        <Entypo name="star" size={16} color="orange" />
                        <Entypo name="star" size={16} color="orange" />
                        <Entypo name="star" size={16} color="orange" />
                        <Entypo name="star-outlined" size={16} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>4.5</Text>
                    </Pressable>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "white"}}>{item.name}</Text>
                    
                    </Pressable>
                </Link>
                </View>
       </View>
       
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({})