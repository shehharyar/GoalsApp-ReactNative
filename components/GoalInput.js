import { useState } from 'react';
import { 
  StyleSheet,
  TextInput, 
  View, 
  Button, 
  Modal,
  Image} from "react-native"

const GoalInput = (props) => {
    
    const [enteredGoalText, setEnteredGoalText]= useState('')
    const  goalInputHandler = (enteredText) =>{
        setEnteredGoalText(enteredText)
      }
    
      const addGoalHandler =() =>{
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
      }

return(
  <Modal visible={props.visible} animationType= 'slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal3.png')} />        
          <TextInput 
              style={styles.textInput} 
               placeholder='Enter your goals' 
               onChangeText={goalInputHandler}
                value={enteredGoalText}/>
                  
                  <View style={styles.buttonContainer}>
                      <View style={styles.button}>
                         <Button title='cancel' onPress={props.onCancel} color="#f31282"/>
                      </View>

                      <View style={styles.button}>
                         <Button  title='add goals' onPress={addGoalHandler} color="#b180f0"/>
                      </View>

                  </View>
      </View>
  </Modal>

    );

}

export default GoalInput;

const styles= StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:18,
        backgroundColor:'#311b6b'
     
      },
      textInput:{
        borderWidth: 1,
        borderColor:`#e4d0ff`,
        backgroundColor:'#e4d0ff',
        color:'#120438',
        width:'100%',
        borderRadius:6,
        padding:16
      },
      image:{
        width:100,
        height:100,
        margin:20
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal:8
      }
})