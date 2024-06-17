import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";

import Recuperarcuenta from "./Navegacion/Recuperarcuenta"
import Recuperar from "./Navegacion/Recuperar";
import Crearcuenta from "./Navegacion/Crearcuenta";
import Login from "./Navegacion/Login";
import ListaUser from "./Navegacion/ListaUser";
import Home from "./Navegacion/Home";
import Home2 from "./Navegacion/Home2";
import HomeBtn from "./Navegacion/HomeBtn";


const Stack = createStackNavigator();

function Stacks(){
    return(
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen
            name="Login"
            component={Login}
            />

            <Stack.Screen
            name="ListaUser"
            component={ListaUser}
            />
            
            <Stack.Screen
            name="Crearcuenta"
            component={Crearcuenta}
            />
            
            <Stack.Screen
            name="Recuperar"
            component={Recuperar}
            />

            <Stack.Screen
            name="Recuperarcuenta"
            component={Recuperarcuenta}
            />


            {/* <Stack.Screen
            name="HomeStack"
            component={Home}
            />


            <Stack.Screen
            name="HomeBtn"
            component={HomeBtn}
            options={{
                //headerBackTitleVisible:false;
            }} */}
            {/* /> */}
        </Stack.Navigator>
    );
}



const TabNav = createBottomTabNavigator();

function Tabs () {
    return (
        <TabNav.Navigator
            // initialRouteName="Login"
            // screenOptions={{
            //     tabBarActiveTintColor: 'green',
            // }} 
            >

            

            <TabNav.Screen 
            name="Home" 
            
            component={Stacks}
            //component={Home}
            options={{
                tabBarLabel: 'HomE', //se utiliza para asignar nombre a la opción del botón
                tabBarIcon:  ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/> //se utiliza renderizar el icon
                ),
                tabBarBadge: 4, //se utiliza para las notificaciones
                headerShown: false, //oculta el header
            }}/>

            {/* <TabNav.Screen name="Home2" component={Home2}/>  */}
            {/* <TabNav.Screen name="Crear" component={Stacks}/>  */}
            
        </TabNav.Navigator>
    )
};

export default function Navegacion() {
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}