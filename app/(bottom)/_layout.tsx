import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const BottomNavigationLayout = () => {
    return (
        <>
            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen name="notes" options={{ headerShown: false }} />
                <Tabs.Screen name="settings" />
            </Tabs>
        </>
    )
}

export default BottomNavigationLayout

const styles = StyleSheet.create({})