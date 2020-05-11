import React, { useState } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

import { theme } from '../../theme'
import { EditModal } from '../components/EditModal'
import { AppCard } from './../components/ui/AppCard'


export const TodoItemScreen = ({goBack, data, onRemove, onSave}) => {
    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        setModal(false)
        onSave(data.id, title)
      
    }
    return (
        <View style={styles.container}>
            <EditModal visible={modal} onBack={() => setModal(false)} value={data.title} onSave={saveHandler}/>
            <AppCard style={styles.card}>
            <Text style={styles.title}>
                {data.title}
            </Text>
            <Button title="EDIT" onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttonsWrap}>
                <View style={styles.button}>
                    <Button title="GO BACK" onPress={goBack} color={theme.darkBackgroundColor}/>
                </View>
                <View style={styles.button}>
                    <Button title="DELETE" onPress={() => onRemove(data.id)} color={theme.deleteButton}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 180
    },
    card: {
        marginBottom: 20
    },
    buttonsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})