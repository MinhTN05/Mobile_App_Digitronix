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

const LoginScreen = () => {
    const [showPass, setShowPass] = useState(true)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleLogin = () => {
        dispatch(fetchAsyncLogin(data))
        .then(res => {
            console.log(res)
            if( !res.error ) {
                navigation.navigate('MyTabs')
            } else {
                alert ('Đăng nhập thất bại');
            }
        })
    }

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
                                value={data.username}
                                onChangeText={(val) => setData({ ...data, username: val })}
                            />
                        </View>
                        <View style={styles.input} >
                            <TextInput
                                placeholder="Password..."
                                secureTextEntry={showPass}
                                value={data.password}
                                onChangeText={(val) => setData({ ...data, password: val })}
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

