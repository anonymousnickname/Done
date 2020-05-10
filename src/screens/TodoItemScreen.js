import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

export const TodoItemScreen = ({goBack, data}) => {
    return (
        <View style={styles.container}>
            <Text>
                {data.title}
            </Text>
            <Button title="GO BACK" onPress={goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})