import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, Alert, View } from 'react-native'

import { theme } from '../../theme'

export const AddForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const handlerDoings = () => {
        if(title.trim()) {
            onSubmit(title);
            setTitle('');
        } else {
            Alert.alert(
                'Advice',
                "It can't be empty",
              );
        }
      
    }
    return (
        <View style={styles.container}>
            <TextInput 
                    value={title}
                    autoCorrect={false}
                    onChangeText={setTitle}
                    placeholder="New business"
                    style={styles.container__input}/>
                    
            <Button title="ADD NEW" 
                    onPress={handlerDoings}
                    color={theme.darkBackgroundColor}/>
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