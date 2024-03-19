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
        width: 25,
        height: 25,
        marginRight: 20,
        left: 40
      },
      username: {
        fontSize: 18,
        left: 40,
        color : COLORS.white,
        
      },
      logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 40
      },
      logoutIcon: {
        width: 25,
        height: 25,
        marginRight: 20,
        backgroundColor : COLORS.white,
      },
      logoutText: {
        fontSize: 18,
        color : COLORS.white,
      },
})

export default styles;