import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(bottom)" options={{ headerShown: false }} />
      <Stack.Screen name="note/detail" options={{ headerShown: true, title: "A note detail", headerBackTitleVisible: false }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})