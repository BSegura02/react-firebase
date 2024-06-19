import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import Svg, {SvgProps, Path, Defs, Pattern, Use, Image, } from "react-native-svg"
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

//import firebase
import appFirebase from '../accesoFirebase'
import {addDoc, collection, getFirestore } from "firebase/firestore"

const db =getFirestore(appFirebase)

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Navegacion from "../navegacion";

export default function Login(props) {
    const navigation = useNavigation();

    const inicioEstado = {
        nombreCompleto: '',
        email: '',
        clave: '',
    }

    const [estado, setEstado] =useState (inicioEstado)

    const HandleChangeText = (value, name) => {
        setEstado({...estado, [name]: value })
    }

    // const RegistrarUsuario = () => {
    //     console.log(estado)
    // }

    const RegistrarUsuario = async ()=>{
        console.log(estado)
        try{
            await addDoc(collection(db, 'usuarios'), {...estado})
            alert ('El usuario se registró con éxito')

            props.navigation.navigate('ListaUser')
        } catch {
            console.log(error)
        }
    }

    return (

        <View style={styles.container}>
            <Image style={styles.imgfondo}
                source={require("../Imagenes/figma.jpeg")} />

            <Text style={styles.txtTitulo}>Crear Cuenta</Text>
            <Text style={styles.txtSubtitulo}>Ingresa los datos solicitados:</Text>
           
            <TextInput placeholder='Nombre completo'
                style={styles.txtInput}
                onChangeText={(value) => HandleChangeText(value, 'nombreCompleto')}
                value={estado.nombreCompleto}
            ></TextInput>

            <TextInput placeholder='Correo electrónico'
                style={styles.txtInput}
                onChangeText={(value) => HandleChangeText(value, 'email')}
                value={estado.email}
            ></TextInput>
            
            <TextInput placeholder='Contraseña'
                secureTextEntry={true}
                style={styles.txtInput}
                onChangeText={(value) => HandleChangeText(value, 'clave')}
                value={estado.clave}
            ></TextInput>

            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.txtPass}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                // onPress={() => navigation.navigate("Login")}
                onPress={RegistrarUsuario}
            >
                <LinearGradient
                    colors={['#00C1BB', '#005B58']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtLogin} >Registrate</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* <Button title='Iniciar Sesion' style={styles.btnLogin} /> */}

            <Text style={styles.txtCuenta}>Ya tienes cuenta</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Recuperar")}
            >
                <Text style={styles.txtRegistrarse}>¿Has olvidado tu contraseña?</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />

            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
    },

    containerSvg: {
        alignItems: 'center',
    },

    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'left',
        marginRight: 130,
        marginBottom: 0,
        width: "auto",
    },

    // txtTituloc: {
    //     fontSize: 50,
    //     fontWeight: 'bold',
    //     color: '#34434D',
    //     textAlign: 'left',
    //     marginRight: 245,
    //     marginTop: 0,
    // },

    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'light',
        color: 'gray',
        textAlign: 'left',
        marginTop: 20,
        marginRight: 130,
        width: "auto",
    },

    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        alignItems:"center",
    },

    txtPass: {
        textAlign: 'right',
        paddingTop: 20,
        // marginRight: 50,
        marginLeft: 300,
        color: '#00C1BB',
        fontSize: 15,
    },

    btnLogin: {
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        // marginLeft: "auto",
        paddingTop: 10,
        justifyContent:"center",
        alignItems:"center",
        marginLeft: "auto",
        marginRight: "auto",
    },

    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },

    txtCuenta: {
        textAlign: 'center',
        paddingTop: 10,
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
    },

    txtRegistrarse: {
        textAlign: 'center',
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
    },

    imgfondo: {
        width: "100%",
        marginBottom: 20,
    }
});