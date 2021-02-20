import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: Platform.OS === "web" ? "100vh" : "100%"
    //web 100vh
    },
    background: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: "white",
        fontSize: 32
    },
    inputs: {
        width: "90%",
        padding: 8,
    },
    input: {
        backgroundColor: "#F3FCF0",
        width: "100%",
        padding: 8,
        height: 40,
        marginTop: 12,
        borderRadius: 8,
        fontSize: 16, 
    },
    btn:{
        backgroundColor: "#FFD23F",
        marginTop: 12,
        padding: 10,
        borderRadius: 4,
        marginLeft:50,
        marginRight:50,      
    },
    lottie:{
        height:150,
    },
    text_bt:{
        fontSize: 18,
        fontWeight: '700',
        color: "#27233A",
        textAlign: 'center',
        justifyContent: 'center',
    }
})

export default styles;