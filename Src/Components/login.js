import react, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nhập địa chỉ email'
                autoCapitalize='none'
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                value={email} />
            <TextInput
                placeholder='Nhập password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                value={password} />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => alert("Email là : " + email + "Password : " + password)}
            >
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            paddingTop: 30,
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: 'blue',
            borderWidth: 1
        },
        submitButton: {
            margin: 15,
            height: 40,
            backgroundColor: 'pink',
            alignItems: 'center',
        },
        submitText: {
            color: 'blue'
        }
    }
)

export default Login