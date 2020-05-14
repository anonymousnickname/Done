import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'

import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'
import { ScreenState } from './src/context/screen/ScreenState'

async function loadApplication() {
  await Font.loadAsync({
    'font-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'font-regular': require('./assets/fonts/Roboto-Regular.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  
  if (!isReady) {
    return ( 
      <AppLoading
            startAsync={loadApplication}
            onError={(err) => console.log(err)}
            onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
  <ScreenState>
    <TodoState>
      <MainLayout />
    </TodoState>  
  </ScreenState>
  )
}