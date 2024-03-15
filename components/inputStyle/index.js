import React , { useState } from 'react'
import { TextInput, Text , View } from 'react-native'
import  IconStyle  from '../../components/icon'

import styles from './styles'

const InputStyle = ({ name, style, editable = true }) => {
    const [showPass, setShowPass] = useState(true)

    // Xác định xem liệu đây là trường mật khẩu hay không
    const isPassword = name === 'Password' || name === 'ConfirmPassword';

    // Icon cho việc hiển thị hoặc ẩn mật khẩu
    const eyeIcon = <IconStyle name={showPass ? 'eye-slash' : 'eye'} onPress={() => setShowPass(!showPass)} />;

    return (
        <>
            <Text style={styles.textInputLabel}>{name}</Text>
            <TextInput
                placeholder={`${name}...`}
                autoCapitalize="none"
                style={[styles.textInput, style]}
                editable={editable}
                secureTextEntry={isPassword ? showPass : false} // Sử dụng secureTextEntry chỉ khi là mật khẩu
            />
            {/* Hiển thị icon chỉ khi là mật khẩu */}
            {isPassword && <View style={styles.iconShowPass}>{eyeIcon}</View>}
        </>
    )
}

export default InputStyle
