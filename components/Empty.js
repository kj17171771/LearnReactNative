import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Empty() {

    const source = { uri: 'https://via.placeholder.com/150' };

    return (
        <View style={styles.block}>
            <Image
                source={source}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.description}>야호! 할일이 없습니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e'
    },
    image: {
        width: 300,
        height: 200
    }
})

export default Empty;