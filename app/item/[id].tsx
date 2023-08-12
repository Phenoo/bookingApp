import { StyleSheet, ScrollView,Platform, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, View,  } from '@/components/Themed'
import { Link, Stack, router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Page = () => {
    const { id, image, name, price, description, category, features  } = useLocalSearchParams();
    
  return (
    <ScrollView>
        <View  style={{ position: "relative", borderRadius: 10 }}>
            <Image
                style={{width : "100%", height: 300, marginVertical: 10, borderRadius: 5 }}
                source={{ uri: image }}
             />
             <View style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)",
                    position: "absolute", top: 10,padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity style={{marginVertical: 30}} 
                    onPress={() => router.back()}>
                    <View style={{ borderRadius: 25, height: 50, width: 50, padding: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text>
                            <Entypo name="chevron-thin-left" size={24}  />
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginVertical: 30}}>
                    <View style={{ borderRadius: 25, height: 50, width: 50, padding: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text>
                            <MaterialCommunityIcons name="bookmark-minus" size={24} color='red' />
                        </Text>
                    </View>
                </TouchableOpacity>

                
             </View>
                <Pressable style={{position: "absolute", bottom: 20, backgroundColor: "rgba(255,0, 0, 0.8)", width: 80, marginTop: 10, borderRadius: 10, paddingVertical: 5, marginHorizontal: 10}}>
                    <Text style={{textAlign: "center"}}>{category}</Text>
                </Pressable>
        </View>

        <View style={{ borderRadius: 20, padding: 20}}>
           <View style={{ flexDirection: "row", gap: 10,  justifyContent: "space-between" }}>

            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
                <Text style={{ color: "grey", marginTop: 5, fontSize: 16}}>Panaroma, Italy</Text>
                
            </View>

                <View>
                    <Pressable style={{ backgroundColor: "#0080ff", paddingVertical: 10,paddingHorizontal: 15,  borderRadius: 20 }}>
                    <Link href="/availability" asChild>
                    <Text style={{fontSize: 12}}>Check Availability</Text>
                    </Link>
                    </Pressable>
                </View>
            </View>

            <View style={{ marginTop: 30}}>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>About</Text>
                    <Text style={{ fontSize: 13, marginTop: 10, opacity: 0.8 }}>
                        {description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Autem doloremque sapiente quo mollitia quia, suscipit ipsum velit aliquid molestiae 
                        repudiandae adipisci fugit atque perspiciatis. Dolor laudantium repellendus reiciendis enim eius
                        {description}
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 30}}>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>What's included</Text>
                    <View>
                        <Text style={{marginTop: 5}}>
                            {features}.
                        </Text>
                    </View>
                </View>
            </View>

        </View>

        <View style={{backgroundColor: "gray", height: 70, width: "100%", position: "fixed", bottom: -70, padding: 10,  
                borderRadius: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
            }}>
            <Pressable>
                <Text>Total cost</Text>
                <Text style={{ fontSize: 24, fontWeight: "bold"}}>${price}</Text>
            </Pressable>
            <TouchableOpacity style={{ backgroundColor: "#0080ff", paddingVertical: 10,paddingHorizontal: 15,  borderRadius: 20 }}>
               <Text>
               Book Now
               </Text>
            </TouchableOpacity>
        </View>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView>
  )
}

export default Page

const styles = StyleSheet.create({})