import React, { Component } from 'react';
import { 
 Text,
 View,
 StyleSheet,
 SafeAreaView,
 TouchableOpacity,
 Platform,
 StatusBar,
 ImageBackground,
 Image
  } from 'react-native';
  

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
           <ImageBackground source={require('../assets/mat.gif')} style={styles.backgroundImage}>
        <View style={styles.titleBar}>
        <Text style={styles.titleText}>Mathematics Study Center, Bilaspur(C.G)</Text>
        </View>
        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Courses")
                    }>
                        <Image source={require('../assets/courses.png')} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("ContactUs")
                    }>
                      <Image source={require('../assets/contact.jpg')} style={styles.mage}></Image>
                        
                    </TouchableOpacity>
</ImageBackground>
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:20
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.2,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign:'center'
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 25,
        top: -50
    },
    mage: {
        position: "absolute",
        height:97,
        width: 200,
        resizeMode: "contain",
        right: 32,
        top: 1
    }
});