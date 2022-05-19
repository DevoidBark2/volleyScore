import React,{useState} from 'react'
import { StyleSheet, Text, View,Modal,SafeAreaView,TextInput} from 'react-native';

export default function ScoreScreen() {

    const [modal,setModal] = useState(true)
    const [firstTeam,setFirstTeam] = useState('')
    const [secondTeam,SetSecondTeam] = useState('')
    const [firstScore,setFirstScore] = useState(0)
    const [secondScore,setSecondScore] = useState(0)
    const [firstGame,setFirstGame] = useState(0)
    const [secondGame,setSecondGame] = useState(0)

    const handleFirstScore = () => {
        // if(firstScore === 24 & secondScore < 23){
        //     setFirstGame(firstGame + 1)
        //     setFirstScore(0)
        //     setSecondScore(0)
        // }
        // else if(firstScore === 24 & secondScore === 24)
        // {
        //     while(firstScore - secondScore !== 1)
        //     {
        //         setFirstScore(firstScore + 1)
        //     }
        //     setFirstGame(firstGame + 1)
        //     setFirstScore(0)
        //     setSecondScore(0)
        // }

        // }
        // if(firstScore === 24 & secondScore === 24){
        //     if(firstScore - secondScore > 1){
        //         setFirstGame(firstGame + 1)
        //         setFirstScore(0)
        //         setSecondScore(0)
        //     }
        //     else{
        //         setFirstScore(firstScore + 1)
        //     }
        // }
        // else{
        //       setFirstScore(firstScore + 1)
        // }
        if(firstScore == 24 && secondScore < 24){
            setFirstGame(firstGame + 1)
            setFirstScore(0)
            setSecondScore(0)
        }else if(firstScore == 23 && secondScore == 23){
            while(firstScore - secondScore != 1){
                setFirstScore(firstScore + 1)
            }
            setFirstGame(firstGame + 1)
            setFirstScore(0)
            setSecondScore(0)
        }else{
            setFirstScore(firstScore + 1)
        }


        // if((firstScore === 24 & (secondScore > 23 & firstScore - secondScore === 1)) || ( firstScore > 23 & firstScore - secondScore === 1) || (firstScore === 24 &&  firstScore - secondScore === 1 )){
        //     setFirstGame(firstGame + 1)
        //     setFirstScore(0)
        //     setSecondScore(0)
        // }else{
        //     setFirstScore(firstScore + 1)
        // }
    }
    const handleSecondScore = () => {
        if(secondScore == 24 && firstScore < 24){
            setSecondGame(secondGame + 1)
            setFirstScore(0)
            setSecondScore(0)
        }else if(firstScore == 23 && secondScore == 23){
            while(secondScore - firstScore != 1){
                setSecondScore(secondScore + 1)
            }
            setSecondGame(secondGame + 1)
            setFirstScore(0)
            setSecondScore(0)
        }
        else{
            setSecondScore(secondScore + 1)
        }


        // if((secondScore === 24 & (firstScore > 23 & secondScore - firstScore === 1)) || (secondScore > 23 & secondScore - firstScore === 1) || (secondScore === 24 && secondScore - firstScore === 1)){
        //     setSecondGame(secondGame + 1)
        //     setSecondScore(0)
        //     setFirstScore(0)
        // }
        // else{
        //     setSecondScore(secondScore + 1)
        // }
    }
    const handleFirstGame = () =>{
        if(firstGame === 2){
            alert('haaa')
        }
    }

    const handleSecondGame = () =>{
        if(secondGame === 2){
            alert('dfsdfsf')
        }
    }
  return (
    <View>
        <Modal visible={modal}>
            <SafeAreaView style={styles.content}>
                <Text style={styles.text}>Команда 1</Text>
                <TextInput  style={styles.input} onChangeText={text => setFirstTeam(text)}/>
                <Text style={styles.text}>Команда 2</Text>
                <TextInput style={styles.input} onChangeText={text => SetSecondTeam(text)}/>
                <Text style={styles.btn} onPress={() => setModal(false)}>Подвердить</Text>
            </SafeAreaView>
        </Modal>
        <View>
            <View style={styles.teams}>
                <Text style={styles.teamName}>{firstTeam}</Text>
                <Text style={styles.teamName}>{secondTeam}</Text>
            </View>
            <View style={styles.scoreBlock}>
                <Text style={styles.score}>{firstScore}</Text>
                <Text style={styles.score}>:</Text>
                <Text style={styles.score}>{secondScore}</Text>
            </View>
            <View style={styles.gameCount}>
                <Text style={styles.scoreGame} onChangeText={handleFirstGame}>{firstGame}</Text>
                <Text style={styles.scoreGame}>:</Text>
                <Text style={styles.scoreGame} onChangeText={handleSecondGame}>{secondGame}</Text>
            </View>
            <View style={styles.incDecBlock}>
                <View style={styles.incDec}>
                    <Text style={styles.incLeft} onPress={handleFirstScore}>+1</Text>
                    <Text style={styles.decLeft} onPress={() => setFirstScore(firstScore - 1)}>-1</Text>
                </View>
                <View style={styles.incDec}>
                    <Text style={styles.incRight} onPress={handleSecondScore}>+1</Text>
                    <Text style={styles.decRight} onPress={() => setSecondScore(secondScore - 1)}>-1</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        marginTop:20
    },
    btn:{
        marginTop:30,
        backgroundColor:'#888d94',
        padding:20,
        borderWidth:1,
        borderRadius:20
    },
    input:{
        borderWidth:1,
        width:300,
        height:50,
        fontSize:25,
        textAlign:'center',
        marginTop:10
    },
    content:{
        alignItems:'center'
    },
    teams:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
    },
    teamName:{
        fontSize:30,
        fontFamily:'nt-bold',
        fontWeight:'900'
    },
    score:{
        textAlign:'center',
        marginTop:30,
        fontSize:40
    },
    scoreGame:{
        marginTop:30,
        fontSize:30
    },
    scoreBlock:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    incDecBlock:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:50
    },
    incDec:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
    },
    incLeft:{
        marginRight:60,
        fontSize:40
    },
    decLeft:{
        fontSize: 40
    },
    incRight:{
        marginRight:60,
        fontSize:40
    },
    decRight:{
        fontSize:40
    },
    gameCount:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    }
})
