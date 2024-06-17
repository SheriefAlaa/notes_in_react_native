import { Link } from "expo-router";
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Start = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View style={styles.container}>
                    <Link href='/notes' >
                        <Text>Welcome to fun notes! Press me to enter the app.</Text>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Start

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    }
})