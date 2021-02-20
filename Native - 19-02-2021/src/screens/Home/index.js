import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import styles from './styles';

function Home({navigation}) {

    function produtos() {
            navigation.navigate("Produtos");
    }
    function login() {
             navigation.navigate("Login");
}
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/frutas.png')} />
            <Text style={styles.titulo}>Frutaria</Text>
            <View>
            <TouchableOpacity style={styles.btn} onPress={produtos} >
                <Text style={styles.texto}>
                <MaterialIcons name="category" size={22} color="black" /> PRODUTOS 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={login} >
                <Text style={styles.texto}>
                    LOGIN 
                    <AntDesign name="unlock" size={24} color="#27233A" />
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;