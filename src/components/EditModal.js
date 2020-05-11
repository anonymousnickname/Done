import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, Modal, View, Alert } from 'react-native'

import { theme } from '../../theme.js'

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
                <TextInput style={styles.input} value={title} onChangeText={setTitle} maxLength={15} autoCorrect={false}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={onBack} color={theme.deleteButton}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="SAVE" color={theme.saveColor} onPress={saveHandler}/>
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
        color: theme.darkBackgroundColor,
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