import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const Notes = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View>
                    <Text>Notes list screen</Text>
                    <Link href='/note/detail'>Note 1</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notes

const styles = StyleSheet.create({})