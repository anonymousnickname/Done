import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { theme } from '../../theme'
import { EditModal } from '../components/EditModal'
import { AppCard } from './../components/ui/AppCard'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'



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
            <AppTextBold style={styles.title}>
                {data.title}
            </AppTextBold>
            <AppButton  onPress={() => setModal(true)} color={theme.EDIT_COLOR}>
                <FontAwesome name='edit' size={theme.ICON_SIZE} />
            </AppButton>
            </AppCard>
            <View style={styles.buttonsWrap}>
                <View style={styles.button}>
                    <AppButton onPress={goBack} color={theme.BACK_COLOR} size={theme.ICON_SIZE}>
                    <AntDesign name='back' size={theme.ICON_SIZE}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => onRemove(data.id)} color={theme.DELETE_COLOR}>
                        <FontAwesome name='trash' size={theme.ICON_SIZE}/>
                    </AppButton>
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
        width: '35%'
    },
    title: {
        fontSize: 20
    }
})