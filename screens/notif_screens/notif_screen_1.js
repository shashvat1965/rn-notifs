import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import BackSVGComponent from '../../assets/svgs/back';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
const NotifScreen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Text style={styles.text}>Notif Screen 1</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
      </View>
      <View style={styles.aboutScreen}>
        <Text style={styles.screenText}>
          You came here from by pressing Screen 1 on the notification
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutScreen: {
    flex: 1,
    paddingTop: verticalScale(50),
  },
  screenText: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(22),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(25),
  },
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  headingRow: {
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(50),
  },
  text: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(45),
  },
});

export default NotifScreen1;
