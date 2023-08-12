import { StyleSheet, ScrollView, FlatList ,Pressable, Text} from 'react-native';

import {  View } from '@/components/Themed';
import Header from '@/components/tabOne/Header';
import { Image } from 'react-native';
import ItemCard from '@/components/ItemCard';

import { Entypo } from '@expo/vector-icons';


export default function TabOneScreen() {
  const items = [
    { id: 1, text: 'Packages', color: false },
    { id: 2, text: 'Flights' },
    { id: 3, text: 'Food' },
    { id: 4, text: 'Hotels' },
    { id: 5, text: 'Cars' },
    { id: 6, text: 'Events', },
  ];
  const data = [
    {
      id: 1,
      name: 'Tropical Paradise Resort',
      description: 'Experience luxury and relaxation on a pristine tropical island.',
      image: 'https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 1200,
      category: 'Places',
      features: ['Private beach', 'Infinity pool', 'Spa'],
    },
    {
      id: 2,
      name: 'Mountain Chalet Retreat',
      description: 'Cozy up in a charming chalet surrounded by breathtaking mountain views.',
      image: 'https://images.pexels.com/photos/1831545/pexels-photo-1831545.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 800,
      category: 'Places',
      features: ['Fireplace', 'Hiking trails', 'Panoramic windows'],
    },
    {
      id: 3,
      name: 'City View Loft',
      description: 'Stay in a modern loft with stunning city skyline views.',
      image: 'https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 950,
      category: 'Places',
      features: ['Urban location', 'Open-concept design', 'Rooftop terrace'],
    },
    {
      id: 4,
      name: 'Classic Convertible',
      description: 'Cruise along scenic routes in a vintage convertible.',
      image: 'https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 350,
      category: 'Cars',
      features: ['Convertible top', 'Leather seats', 'Retro design'],
    },
    {
      id: 5,
      name: 'Luxury Yacht Rental',
      description: 'Set sail on a private yacht and explore crystal-clear waters.',
      image: 'https://images.pexels.com/photos/17647018/pexels-photo-17647018/free-photo-of-sea-landscape-beach-vacation.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2800,
      category: 'Flights',
      features: ['Sailing experience', 'Captain included', 'Sun deck'],
    },
    {
      id: 6,
      name: 'Mystical Forest Cabin',
      description: 'Escape to a cozy cabin hidden deep within an enchanting forest.',
      image: 'https://images.pexels.com/photos/2253921/pexels-photo-2253921.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 600,
      category: 'Places',
      features: ['Secluded location', 'Nature trails', 'Bonfire pit'],
    },
    {
      id: 7,
      name: 'Luxury Sports Car',
      description: 'Feel the thrill of speed in a top-of-the-line sports car.',
      image: 'https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 550,
      category: 'Cars',
      features: ['High-performance engine', 'Sleek design', 'Sports seats'],
    },
    {
      id: 8,
      name: 'Skydiving Adventure',
      description: 'Experience the ultimate adrenaline rush with a tandem skydive.',
      image: 'https://images.pexels.com/photos/914381/pexels-photo-914381.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 300,
      category: 'Flights',
      features: ['Certified instructor', 'Breath-taking views', 'Safety equipment'],
    },
    {
      id: 9,
      name: 'Beachfront Villa',
      description: 'Indulge in a luxurious beachfront villa with stunning ocean views.',
      image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 1800,
      category: 'Places',
      features: ['Private pool', 'Beach access', 'Butler service'],
    },
    {
      id: 10,
      name: 'Vintage Campervan',
      description: 'Embark on a road trip adventure in a retro campervan.',
      image: 'https://images.pexels.com/photos/2652945/pexels-photo-2652945.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 200,
      category: 'Cars',
      features: ['Kitchenette', 'Sleeping area', 'Classic camper design'],
    },
    {
      id: 11,
      name: 'Hot Air Balloon Ride',
      description: 'Float above the clouds and witness breathtaking landscapes.',
      image: 'https://images.pexels.com/photos/90286/pexels-photo-90286.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 400,
      category: 'Flights',
      features: ['Sunrise flight', 'Champagne toast', 'Panoramic views'],
    },
    {
      id: 12,
      name: 'Seaside Retreat',
      description: 'Relax at a peaceful seaside retreat with soothing ocean waves.',
      image: 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 750,
      category: 'Places',
      features: ['Private balcony', 'Beachfront access', 'Hammocks'],
    },
    {
      id: 13,
      name: 'Luxury Sedan',
      description: 'Travel in elegance with a luxurious and comfortable sedan.',
      image: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 400,
      category: 'Cars',
      features: ['Leather upholstery', 'Advanced infotainment', 'Smooth ride'],
    },
    {
      id: 14,
      name: 'Private Jet Charter',
      description: 'Experience VIP travel with a private jet charter service.',
      image: 'https://images.pexels.com/photos/206881/pexels-photo-206881.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 10000,
      category: 'Flights',
      features: ['Exclusive service', 'Custom itinerary', 'Luxury amenities'],
    },
    {
      id: 15,
      name: 'Countryside Farmhouse',
      description: 'Escape to a charming farmhouse nestled in picturesque countryside.',
      image: 'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 500,
      category: 'Places',
      features: ['Farm-to-table dining', 'Scenic views', 'Tranquil setting'],
    },
  ];
  
  
  
  return (
   <ScrollView>
     <View style={styles.container}>
      <Header />
      <ScrollView horizontal style={{ marginVertical: 16, marginHorizontal: 10 }} >
        {items.map((item) => (
          <View key={item.id} 
            style={{ marginRight: 15, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, 
            backgroundColor: item.text === 'Packages' ? "#0080ff" : "grey" }}>
            <Text style={{ fontSize: 16, color: "white",
            
               
           }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ marginVertical: 16, marginHorizontal: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "500",  color: "grey" }}>Popular Places</Text>
          <Text style={{ fontSize: 18, fontWeight: "500", color:  "#0080ff" }}> See All</Text>

        </View>
        <ScrollView horizontal style={{ marginVertical: 5 }} >
        {data.map((item) => (
          <Pressable key={item.id} style={{ marginRight: 20}}>
            <Image
                style={{width : 200, height: 150, marginVertical: 10, borderRadius: 10 }}
                source={{ uri: item.image }} />
                {/* <Text>j</Text> */}
                <View style={{width: "100%", height: 150, borderRadius: 10, 
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        position: "absolute", padding: 10, top: 10 }}
                        >
                   <Pressable style={{ flexDirection: "column", justifyContent: "flex-end", height: "100%", paddingVertical: 10}}>

                    <Pressable style={{ flexDirection: "row", gap: 4, marginVertical: 5, alignItems: "center" }}>
                        <Entypo name="star" size={12} color="orange" />
                        <Entypo name="star" size={12} color="orange" />
                        <Entypo name="star" size={12} color="orange" />
                        <Entypo name="star" size={12} color="orange" />
                        <Entypo name="star-outlined" size={12} color="white" />
                        <Text style={{ fontSize: 14, color: "white" }}>4.5</Text>
                    </Pressable>
                    <Text style={{ fontSize: 14, color: "white", fontWeight: '600'}}>{item.name}</Text>
                    
                    </Pressable>
                        </View>
          </Pressable>
        ))}
      </ScrollView>
      </View>

      <View style={{  marginVertical: 20, marginHorizontal: 10}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontWeight: "500",  color: "grey" }}>{data.length} Packages</Text>
          <Text style={{ fontSize: 18, fontWeight: "500", color:  "#0080ff" }}> See All</Text>

        </View>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemCard key={item.id} {...item} item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
