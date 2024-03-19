import React, { useEffect, useState } from 'react'
import { View, Keyboard, Platform, Image, Text, TextInput, ImageBackground, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native'
import { COLORS } from '../../contains'
import { FontAwesome } from '@expo/vector-icons';
import { IMAGES } from '../../contains';
import backgroundLogin from '../../assets/images/backgroup.png';
import styles from './styles'
import { fetchAsyncLogin } from '../../store/slices/auth'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SetUserName } from '../../store/slices/username';

const LoginScreen = () => {
    const [showPass, setShowPass] = useState(true)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const navigation = useNavigation()

    // const [data, setData] = useState({
    //     username: '',
    //     password: ''
    // })

    const handleLogin = async () => {

        console.log("Username:", username); // In ra giá trị của username
        console.log("Password:", password); // In ra giá trị của password

        try {
            const response = await dispatch(fetchAsyncLogin({ username, password }));
            const { token } = response.payload;
            await AsyncStorage.setItem('access_token', token);
            await dispatch(SetUserName(username)),

                navigation.navigate('MyTabs');
        } catch (error) {
            alert('Đăng nhập thất bại');
        }
    };

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const changeRegister = () => {
        navigation.navigate('SignUp');
    };

    const dismissKeyboard = () => {
        if (Platform.OS === 'web') {
            document.activeElement.blur();
        } else {
            Keyboard.dismiss();
        }
    };

    return (
        <>
            <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
                <View style={styles.header}>
                    <Image source={IMAGES.logo} style={styles.logo1} />
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismissKeyboard}>
                    <View style={styles.container} >
                        <View style={styles.input} >
                            <TextInput
                                placeholder="Username..."
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={styles.input} >
                            <TextInput
                                placeholder="Password..."
                                secureTextEntry={showPass}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={handleShowPass} style={styles.icon}>
                                <FontAwesome name={!showPass ? 'eye' : "eye-slash"} size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                        <TouchableHighlight
                            activeOpacity={0.5}
                            underlayColor={COLORS.black}
                            style={styles.button} onPress={handleLogin}
                        >
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableHighlight>
                        <Text onPress={changeRegister} style={styles.register}>Do not have account?
                            <Text
                                style={styles.registerClick}
                            > Sign Up</Text>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </>
    )
}

export default LoginScreen