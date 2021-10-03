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
  
export default class CoursesScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/course1.jpg')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
        <Text style={styles.titleText}>Courses</Text>
        </View>
        <View style={{flex:0.25}}>
        <Text style={{fontSize:25,fontStyle:'bold',textAlign:'center'}}>Class: 9th</Text>
        <Text style={{fontSize:20,fontStyle:'bold',textAlign:'center'}} >Subjects:Mathematics, Physics and Chemistry</Text>
        </View>
        <View style={{flex:0.25}}>
        <Text style={{fontSize:25,fontStyle:'bold',textAlign:'center'}}>Class: 10th</Text>
        <Text style={{fontSize:20,fontStyle:'bold',textAlign:'center'}} >Subjects:Mathematics, Physics and Chemistry</Text>
        </View>
        <View style={{flex:0.25}}>
        <Text style={{fontSize:25,fontStyle:'bold',textAlign:'center'}}>Class: 11th</Text>
        <Text style={{fontSize:20,fontStyle:'bold',textAlign:'center'}} >Subjects:Mathematics, Applied Mathematics</Text>
        </View>
        <View style={{flex:0.25}}>
        <Text style={{fontSize:25,fontStyle:'bold',textAlign:'center'}}>Class: 12th</Text>
        <Text style={{fontSize:20,fontStyle:'bold',textAlign:'center'}} >Subjects:Mathematics, Applied Mathematics</Text>
        </View>
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
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textAlign:'center'
    },
    iconImage: {
        position: "absolute",
        height: 50,
        width: 50,
        resizeMode: "contain",
        right: 300,
        top: 180
    },
    mage: {
        position: "absolute",
        height:50,
        width: 50,
        resizeMode: "contain",
        right: 300,
        top: 270
    },
     image: {
        position: "absolute",
        height: 50,
        width: 50,
        resizeMode: "contain",
        right: 300,
        top: 328
    },
});