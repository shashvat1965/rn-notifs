import {View, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';
import BackSVGComponent from '../../assets/svgs/back';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {useEffect, useState} from 'react';

const ContactListScreen = ({route, navigation}) => {
  const contacts = route.params.contacts;
  const [contactsList, setContactsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tempContactsList = [];
    for (let i = 0; i < contacts.length; i++) {
      tempContactsList[i] = {
        displayName: contacts[i].displayName,
        phoneNumbers: [],
      };
      for (let j = 0; j < contacts[i].phoneNumbers.length; j++) {
        const onPlatform = Math.random() < 0.5; // checkPhoneNumber or whatever here
        tempContactsList[i].phoneNumbers[j] = {
          number: contacts[i].phoneNumbers[j].number,
          onPlatform: onPlatform,
        };
      }
    }
    setContactsList(tempContactsList);
    setIsLoading(false);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#252525'}}>
      <View style={styles.iconHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <Text
          style={{
            color: 'white',
            fontSize: moderateScale(40),
            fontFamily: 'Nunito-Regular',
            marginBottom: verticalScale(20),
          }}>
          Contacts:
        </Text>
        {isLoading ? (
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(40),
              fontFamily: 'Nunito-Regular',
              marginBottom: verticalScale(20),
            }}>
            Loading...
          </Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={contactsList}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: moderateScale(20),
                    marginBottom: verticalScale(20),
                    paddingHorizontal: horizontalScale(20),
                    paddingVertical: verticalScale(10),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: moderateScale(30),
                      fontFamily: 'Nunito-Regular',
                      marginBottom: verticalScale(20),
                    }}>
                    {item.displayName}
                  </Text>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={item.phoneNumbers}
                    renderItem={({item}) => {
                      return (
                        <View>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: moderateScale(20),
                              fontFamily: 'Nunito-Regular',
                              marginBottom: verticalScale(20),
                            }}>
                            '{item.number} {item.onPlatform ? '✅' : '❌'}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    paddingTop: verticalScale(50),
    paddingHorizontal: horizontalScale(25),
    marginBottom: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noteHeading: {
    color: 'white',
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-SemiBold',
  },
  noteContent: {
    flex: 1,
    paddingTop: verticalScale(20),
    color: 'white',
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-Regular',
  },
  textArea: {
    flex: 1,
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(20),
  },
});

export default ContactListScreen;
