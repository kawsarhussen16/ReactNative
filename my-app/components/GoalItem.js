import React from 'react'
import { StyleSheet, Text,View ,TouchableOpacity} from 'react-native';

const GoalItem = ({title, onDelete})=>  {
    return (
      <TouchableOpacity onPress ={onDelete} >
        <View  style={styles.listItem}> 
            <Text > {title}</Text> 
        </View>   
      </TouchableOpacity>     
    );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 1
  }
});


export default GoalItem;