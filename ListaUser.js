import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import appFirebase from '../accesoFirebase';
import { addDoc, collection, getFirestore, getDocs, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore(appFirebase)

export default function ListaUser(props) {

    const navigation = useNavigation();

    const [listar, setListar] = useState([])

    useEffect(() => {
        const getListar = async () => {
            try {
                const qyCollection = await getDocs(collection(db, 'usuarios'))
                const usuarios = []
                qyCollection.forEach((user) => {
                    const { nombreCompleto, email, clave } = user.data()
                    usuarios.push({
                        id: user.id,
                        nombreCompleto,
                        email,
                        clave
                    })
                })
                setListar(usuarios);
            } catch (error) {
                console.log(error);
            }
        }
        getListar()
    }, [listar])

    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerSvg}>

                </View>
                <Text style={styles.txtTitulo}>Listado de Usuarios</Text>

                <View>
                    {
                        listar.map((lista) => (
                            <TouchableOpacity
                                key={lista.id} style={styles.txtSubtitulo}
                                onPress={() => props.navigation.navigate('MostrarUsuarios', { usuariosId: lista.id })}>
                                <Text > {lista.nombreCompleto} </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>


                {/* <TouchableOpacity onPress={() => navigation.navigate("RegisterApp")}>
        <Text style={styles.txtRegistrarse}>Registrar usuario</Text>
      </TouchableOpacity>
 */}
                <StatusBar style="auto" />

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 275,
    },

    containerSvg: {
        alignItems: 'center',
    },

    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'left',
        paddingLeft: 30,

    },
    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'light',
        color: 'gray',
        textAlign: 'left',
        paddingLeft: 30,
        marginTop: 20,
    },

    txtInput: {
        width: '80%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: 30,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
    },

    txtPass: {
        textAlign: 'right',
        paddingTop: 10,
        marginRight: 50,
        color: '#00C1BB',
        fontSize: 15,
    },

    btnLogin: {
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        marginLeft: 80,
        paddingTop: 10,
    },

    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',

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
    },

    imgfondo: {
        width: "100%",
        marginBottom: 20,
    }

});