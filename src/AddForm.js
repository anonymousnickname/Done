import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, Alert, View } from 'react-native'

import { theme } from '../theme'

export const AddForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const handlerDoings = () => {
        if(title.trim()) {
            onSubmit(title);
            setTitle('');
        } else {
            Alert.alert(
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdvice',
                "\t\t\t\t\t\t\t\t\t\t\t\tIt can't be empty",
              );
        }
      
    }
    return (
        <View style={styles.container}>
            <TextInput 
                    style={styles.container__input}
                    placeholder="New business"
                    onChangeText={setTitle}
                    value={title}/>
                    
            <Button title="ADD NEW" 
                    color={theme.darkBackgroundColor}
                    onPress={handlerDoings}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container__input: {
        padding: 4,
        fontSize: 20,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: theme.darkBackgroundColor
    }
})