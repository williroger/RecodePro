import { StyleSheet,Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        width: "100%",
        backgroundColor: '#292F36'
    },
    titulo: {
        color: "white",
        fontSize: 32,
        textAlign: 'center',
        marginTop: 30
    },
    btn:{
        backgroundColor: "#FF6B6B",
        marginTop: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "40%",
        padding: 10,
        borderRadius: 4,
        fontSize: 18,
        textAlign: 'center', 
    },
    texto:{
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    },
    produtos: {
       marginTop:20,
       padding:20
    },
    btn_frutas:{
        backgroundColor: "#FFD23F",
        marginTop: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "80%",
        padding: 10,
        borderRadius: 4,
        fontSize: 18,
        textAlign: 'center',
    },   
})

export default styles;