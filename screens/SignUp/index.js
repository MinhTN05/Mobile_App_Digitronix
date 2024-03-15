import React, { useState } from 'react'
import { View , Text , Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import { IMAGES } from '../../contains'
import { InputStyle } from '../../components'
import { useNavigation } from '@react-navigation/native';
import backgroundLogin from '../../assets/images/backgroup.png'


const SignUpScreen = () => {
    const navigation = useNavigation()

    const goLogin = () => {
        navigation.goBack()
    }

    // Trạng thái cho giá trị đầu vào
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignUp = () => {
    // Xử lý logic đăng ký tại đây
    };
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid={true}
        extraScrollHeight={20}
        resetScrollToCoords={{ x: 0, y: 0 }} // Điều chỉnh vị trí cuộn lại
      >
        <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image source={IMAGES.logo} style={styles.logo1} />
          </View>
          <View style={styles.body}>
            <View style={styles.form}>
              <Text style={styles.formTitle}>SIGN UP</Text>
              <Text style={styles.formTitle1}>Create your account</Text>
              <ScrollView>
              <View style={styles.formInput}>
                <InputStyle
                  name={'Full Name'}
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
              <View style={styles.formInput}>
                <InputStyle
                  name={'Email'}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.formInput}>
                <InputStyle
                  name={'Password'}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <View style={styles.formInput}>
                <InputStyle
                  name={'Confirm Password'}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
              <View style={styles.formInput}>
                <InputStyle
                  name={'Phone Number'}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.footer}>
            <Text onPress={() => navigation.goBack()} style={styles.register}>Already have an account? Sign In</Text>
            <TouchableOpacity
              style={styles.footerSubmit}
              onPress={handleSignUp}
            >
              <Text style={styles.footerSubmitText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
}

export default SignUpScreen
