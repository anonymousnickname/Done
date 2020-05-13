import React, { useState } from 'react'
import { StyleSheet, TextInput, Modal, View, Alert } from 'react-native'

import { theme } from '../../theme.js'
import { AppButton } from '../components/ui/AppButton'

export const EditModal = ({visible, onBack, value, onSave}) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 1) {
            Alert.alert('Warning', `Should be at least 1 charachter. Now you have ${title.trim().length} charactes.`)
        } else {
            onSave(title)
        }
  
    }
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle} maxLength={20} autoCorrect={false}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <AppButton onPress={onBack} color={theme.DELETE_COLOR}>
                            CANCEL
                        </AppButton>
                    </View>
                    <View style={styles.button}>
                        <AppButton color={theme.SAVE_COLOR} onPress={saveHandler}>
                            SAVE
                        </AppButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        padding: 5,
        color: theme.DARK_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        fontSize: 20
    },
    buttons: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '30%'
    }
})