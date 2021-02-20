import React from 'react';
import { ScrollView, Text,TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


const frutas = [
    {
        id:1,
        nome: 'Uva',
        preco: 5,
        img: 'fruit-grapes',
    },
    {
        id:2,
        nome: 'Abacaxi',
        preco: 4,
        img: 'fruit-pineapple',
    },
    {
        id:3,
        nome: 'Melancia',
        preco: 3,
        img: 'fruit-watermelon',
    },
    {
        id:4,
        nome: 'Lima',
        preco: 2,
        img: 'fruit-citrus',
    },   
]

function Produtos({navigation}) {
    function home() {
        navigation.navigate("Home");
}
    return (
        
        <ScrollView  style={styles.caixa}>
            <Text style={styles.titulo}>Produtos - Categorias</Text>
          

            {
                frutas.map((produto, index) => 
                    
                    <Text style={styles.btn_frutas} key={index}>
                        <MaterialCommunityIcons name={produto.img} size={24} color="white" />
                         {produto.nome}  R$: {produto.preco},00
                    </Text>
                    
                )
            }
            <TouchableOpacity style={styles.btn} onPress={home} >
                <Text style={styles.texto}><AntDesign name="back" size={24} color="white" /> Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Produtos;