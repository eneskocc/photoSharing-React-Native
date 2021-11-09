import React from "react";
import { createStackNavigator } from "react-native/Stack";
import Albums from "../components/Albums";
import ShareAlbum from "../components/ShareAlbum";


const Stack=createStackNavigator();


const Navigator =()=>{
      return(
            <Stack.Navigator>
                  <Stack.Screen name="Albums" component={Albums}></Stack.Screen>
                  <Stack.Screen name="Share Album" component={Albums}></Stack.Screen>
            </Stack.Navigator>
      );
};