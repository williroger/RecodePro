import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27233A'
    },
    titulo: {
        color: "white",
        fontSize: 32,
        textAlign: 'center',
        marginTop:50
        
    },
    slogan: {
        color: "black",
        fontSize: 20,
        textAlign: 'center',
        marginTop:50
    },
    img: {
        width: "100%",
        height: 100,
        marginTop: 30,
        padding: 10,
        marginTop:50,
    },
    btn:{
        backgroundColor: "#FFD23F",
        width: 150,
        marginTop: 12,
        padding: 10,
        borderRadius: 4,
        marginLeft:50,
        marginRight:50,      
    },
    texto:{
        fontSize: 18,
        color: "#27233A",
        textAlign: 'center'
    }
  
 
})

export default styles;