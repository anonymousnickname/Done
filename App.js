import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Header } from './src/Header'
import { AddForm } from './src/AddForm'

export default function App() {
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <AddForm/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }
})
