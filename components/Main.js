import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function Main({navigation}) {

    const loadScene = () => {
        navigation.navigate('Table');
    }

  return (
    <View style={styles.main}>
        <Text style={styles.btn} onPress={loadScene}>Новая игра</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        alignItems:'center',
        
    },
    btn:{
        fontSize:54,
        borderWidth:5
    }
})