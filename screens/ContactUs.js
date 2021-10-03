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
  
export default class ContactUsScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg1.jpg')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
        <Text style={styles.titleText}>Contact Us</Text>
        <Text>For more imformation contact us!!</Text>
        </View>
        <Image
          style={styles.iconImage}
          source={{
            uri:
              'https://i.pinimg.com/originals/cb/dc/54/cbdc54feb9a9d3b062b99fd0b400ba5b.jpg',
          }}
        />
        <View style={{right:-100,top:180}}>
        <Text>+91 9406091996</Text>
        <Text>+91 8770737065</Text>
</View>
<Image
          style={styles.mage}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmASDI2owztr5BCb9BtLi3D4gs1HL6sxtnOw&usqp=CAU',
          }}
        />
        <View style={{right:-100,top:45}}>
        <Text>Main Road Torwa,</Text>
        <Text>Opposite Deep Light Decorators</Text>
        <Text>Bilaspur(C.G.)</Text>
</View>

<Image
          style={styles.image}
          source={{
            uri:
              'https://seeklogo.com/images/M/mail-envelope-symbol-logo-4AB011B4E0-seeklogo.com.png',
          }}
        />
        <View style={{right:-100,top:160,fontSize:30}}>
        <Text>sanjaykusupur@gmail.com</Text>
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