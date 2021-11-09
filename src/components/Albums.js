import React from "react";
import { View, Text, Pressable } from "react-native";


const Albums = ({navigation}) =>{
      return (
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <Text>Albums page!</Text>
               <Pressable onPress={()=>navigation.navigate("Shared Album")}>
                     <Text>Click me</Text>
               </Pressable>
         </View>   
      );
};

export default Albums;