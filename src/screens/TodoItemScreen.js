import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { theme } from '../../theme'
import { EditModal } from '../components/EditModal'
import { AppCard } from './../components/ui/AppCard'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'



export const TodoItemScreen = () => {
    const {doings, updateTodo, removeTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = doings.find(item => item.id === todoId)

    const saveHandler = async title => {
        await updateTodo(todo.id, title)
        setModal(false)
    }
    return (
        <View style={styles.container}>
            <EditModal visible={modal} onBack={() => setModal(false)} value={todo.title} onSave={saveHandler}/>
            <AppCard style={styles.card}>
            <AppTextBold style={styles.title}>
                {todo.title}
            </AppTextBold>
            <AppButton  onPress={() => setModal(true)} color={theme.EDIT_COLOR}>
                <FontAwesome name='edit' size={theme.ICON_SIZE} />
            </AppButton>
            </AppCard>
            <View style={styles.buttonsWrap}>
                <View style={styles.button}>
                    <AppButton onPress={() => changeScreen(null)} color={theme.BACK_COLOR} size={theme.ICON_SIZE}>
                    <AntDesign name='back' size={theme.ICON_SIZE}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => removeTodo(todo.id)} color={theme.DELETE_COLOR}>
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