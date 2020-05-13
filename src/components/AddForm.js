import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, TextInput, Keyboard, Alert, View } from 'react-native'


import { theme } from '../../theme'
import { AppButton } from '../components/ui/AppButton'

export const AddForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const handlerDoings = () => {
        if(title.trim()) {
            onSubmit(title);
            setTitle('');
            Keyboard.dismiss();
        } else {
            Alert.alert(
                'Advice',
                "It can't be empty",
              );
            setTitle('');
        }
      
    }
    return (
        <View style={styles.container}>
            <TextInput 
                    maxLength={20}
                    value={title}
                    autoCorrect={false}
                    onChangeText={setTitle}
                    placeholder="Add your todo..."
                    style={styles.container__input}/>
                    
            <AppButton onPress={handlerDoings} color={theme.DARK_COLOR}>
                <FontAwesome name='plus-circle' size={theme.ICON_SIZE}/>
            </AppButton>
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
        padding: 8,
        fontSize: 22,
        width: '75%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: theme.DARK_COLOR
    }
})