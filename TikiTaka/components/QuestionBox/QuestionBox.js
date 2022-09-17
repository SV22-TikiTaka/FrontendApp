import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const DATA = [
    {
        key:0,
        challenge: '시키는거 다 할게!'
    },
    {
        key:1,
        challenge: '살면서 가장 쪽팔렸던 경험?'
    },{
        key:2,
        challenge: '🔞가장 아찔했던 순간은🔞?'
    },{
        key:3,
        challenge: '아주 사소한 물건이라도 도둑질해본 적 있다/없다?'
    },{
        key:4,
        challenge: '하루아침에 성별이 바뀌었다면 제일 먼저 나는…'
    },{
        key:5,
        challenge: '가장 좋은 관계 타이밍 (아침,점심,저녁)'
    },
]
const QuestionBox = ({QuestionBoxTitle, QuestionBoxColor}) =>{
    const[text, onChangeText] =useState(null);
    const[random, setRandom] = useState(0);
    return (
        <View style= {[styles.component, styles.shadow , {borderColor:QuestionBoxColor, borderWidth:1}]}>
        <View style = {[styles.componentTop, {backgroundColor: QuestionBoxColor}]}>
            <Image source={QuestionBoxTitle} style = {styles.image} ></Image>
        </View>
        <View style={styles.componentBottom}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            multiline = {true}
            placeholder="Type In Here..."
            keyboardType="alphabetic"
          />
        </View>
      </View>
    );
};
export default QuestionBox;

const styles = StyleSheet.create({
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 1.5,
            height: 1.5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        },
        android: {
          elevation: 8,
        },
      }),
    },
    component:{
      height: 180,
      width: 290,
      borderRadius:15,
      marginTop: 10,
      marginHorizontal: 20,
    },
    componentTop:{
      flex:4,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      alignItems:'center'
      
    },
    componentBottom:{
      flex:5,
      backgroundColor:'white',
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
    input: {
      padding: 10,
      fontFamily: 'SB 어그로 M'
    },
    image:{
        flex:1,
        width: 250,
        height: null,
        resizeMode: 'contain',
    }
  })
  