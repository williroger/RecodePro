import React, {useState} from 'react';
import { 
        View, 
        Text, 
        ImageBackground, 
        TextInput, 
        TouchableOpacity, 
        Alert,
    } from 'react-native';
import Bg from '../../../assets/bg.jpeg';
import styles from './styles';

// // import LottieView from 'react-native-web-lottie';
// import LottieView from 'lottie-react-native';

import { AntDesign } from '@expo/vector-icons'; 


const apiUsuario = {
    id: 1,
    email: "roger",
    senha: "123",
}

function Login({navigation}) {

    function autenticacao() {
        // fetch("")
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Home");
        }else {
            Alert.alert("Usuario inválido", "É necessário informar um usuário válido.")
        }
        // if (Platform.OS === "web") {
        //     alert("foi")
        // }else {
        //     Alert.alert(Platform.OS)
        // }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    // const [liked, setLikeState]

    return (
        <View style={styles.container}>
            <ImageBackground source={Bg} style={styles.background}>
                <View>
                    {/* <LottieView 
                    source={require('../../animations/avatar.json')} 
                    autoPlay loop 
                    style={styles.lottie}
                    /> */}
                </View>
                <View>
                    <Text style={styles.titulo}><strong>LOGIN</strong></Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput 
                        placeholder="email/usuário" 
                        style={styles.input}
                        value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                    />

                    <TextInput 
                        placeholder="senha" 
                        style={styles.input} 
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.text_bt}>
                            ENTRAR 
                        <AntDesign name="lock1" size={24} color="black" />
                        {/* <AntDesign name="unlock" size={24} color="black" /> */}
                        </Text>
                    </TouchableOpacity>

                </View>
                
            </ImageBackground>

        </View>
    )
}


export default Login;