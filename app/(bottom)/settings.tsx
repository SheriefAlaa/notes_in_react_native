import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const Settings = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View>
                    <Text>Settings Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({})