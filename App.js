import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Main from './components/Main';
import Navigate from './navigate';
const fonts = () => Font.loadAsync({
  'nt-bold': require('./assets/fonts/NoticiaText-Bold.ttf'),
  'nt-regular':require('./assets/fonts/NoticiaText-Regular.ttf')
})


export default function App() {
  const [font,setFont] = useState(false)
  if(font){
    return (
      <View style={styles.main}>
        <Navigate/>
        <StatusBar style="auto" />
      </View>
    );
  }
  else{
    return(
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn}/>
    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  text:{
    textAlign:'center',
    marginVertical:300,
    fontFamily:'nt-bold'
  }
});
