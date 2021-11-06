import * as React from "react";
import {
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    ImageBackground,
    View,
} from "react-native";

// import getImageForWeather from "./src/utils/getImageForWeather";

import SearchInput from "./searchInput";

export default function Weather() {
    const location = "San Francisco";

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ImageBackground
                // source={getImageForWeather("Clear")}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.detailsContainer}>
                    <Text style={[styles.largeText, styles.textStyle]}>
                        San Francisco
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
                    <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
                    <SearchInput placeholder="Search any city" />
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingHorizontal: 20,
    },

    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
    textStyle: {
        textAlign: "center",
        fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
        color: "white",
    },

    smallText: {
        fontSize: 18,
    },
    textInput: {
        backgroundColor: "#666",
        color: "white",
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: "center",
    },
});