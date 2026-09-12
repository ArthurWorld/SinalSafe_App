import { View, Image, StyleSheet , Text } from 'react-native'
import { useEffect } from 'react'
import React from 'react'

const SplashScreen = ({ navigation }) => {
  useEffect(() =>{
        const timer = setTimeout(()=>{
            navigation.replace('LoginScreen')
        },1000)
        return () => clearTimeout(timer)
    },[navigation])

    return (
        <View style = {styles.container}>
            <Image source={require('../../assets/logoSignalSafe.png')} style ={styles.Image}/>
            <Text style ={styles.Text}>SignalSafe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    Image:{
        width:'75%',
        height:'30%',
    },
    Text:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20
    }
    
})

export default SplashScreen