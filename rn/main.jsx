import { View } from 'react-native'
import React from 'react'
import MainStack from './navigations/StackNavigation'

const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#020202' }}>
      <MainStack />
    </View>
  )
}

export default Main