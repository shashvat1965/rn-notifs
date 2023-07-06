import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {useState} from 'react';

const ListItem = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsExpanded(!isExpanded);
      }}>
      <View style={styles.container}>
        {isExpanded ? (
          <Text style={styles.text}>{props.name}</Text>
        ) : (
          <Text numberOfLines={1} style={styles.text}>
            {props.name}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#969292',
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(25),
  },
  text: {
    color: 'black',
    fontSize: moderateScale(22),
    paddingLeft: horizontalScale(30),
    paddingVertical: verticalScale(35),
    paddingRight: horizontalScale(50),
    textAlign: 'left',
    fontFamily: 'Nunito-Regular',
  },
});

export default ListItem;
