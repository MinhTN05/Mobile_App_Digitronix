import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.drawer,
        paddingTop: 50,
        paddingHorizontal: 20,
      },
      topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
      },
      accountIcon: {
        width: 50,
        height: 50,
        marginRight: 20,
      },
      username: {
        fontSize: 22,
        color : COLORS.white,
        
      },
      logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logoutIcon: {
        width: 50,
        height: 50,
        marginRight: 20,
        backgroundColor : COLORS.white,
      },
      logoutText: {
        fontSize: 22, // Màu chữ Logout
        color : COLORS.white,
      },
})

export default styles;