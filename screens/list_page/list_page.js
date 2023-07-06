import {
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MoreSVGComponent from '../../assets/svgs/more';
import {
  horizontalScale,
  moderateScale,
  screenWidth,
  verticalScale,
} from '../../utils/metrics';
import ListItem from './list_item';
import {useEffect, useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Contacts from 'react-native-contacts';

export default function ListPage({navigation}) {
  const [notes, setNotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNotes([
        'Note 1',
        '84yr84rt89yf34943hf93498t97843t8934',
        'skjdbvsjbfsjebgjseb',
        'eeeeeeeeeeeeeeeeeeeeeee',
      ]);
      getContacts();
    }, 2000);
  }, []);

  const getContacts = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await Contacts.getAll().then(contacts => {
          setContacts(contacts);
          setIsLoading(false);
        });
      } else {
        console.log('Contacts permission denied');
        setIsLoading(false);
      }
    } catch (err) {
      console.warn(err);
      setIsLoading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#252525'}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>Lazy Loading</Text>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ContactsListScreen', {contacts: contacts});
            }}
            hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
            <MoreSVGComponent />
          </TouchableOpacity>
        </View>
      </View>
      {!isLoading ? (
        <View style={styles.listStyle}>
          <FlatList
            data={notes}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <ListItem name={item} />
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.listStyle}>
          <FlatList
            scrollEnabled={false}
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <SkeletonPlaceholder
                backgroundColor={'#343232'}
                highlightColor={'#4f4c4c'}>
                <View style={styles.skeleton}>
                  This is the largest possible text
                </View>
              </SkeletonPlaceholder>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    color: 'black',
    height: moderateScale(92),
    borderRadius: moderateScale(10),
    width: screenWidth - horizontalScale(50),
    marginBottom: verticalScale(25),
    fontFamily: 'Nunito-Regular',
  },
  header: {
    paddingTop: verticalScale(50),
    paddingHorizontal: horizontalScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(45),
  },
  iconRow: {
    flexDirection: 'row',
    gap: horizontalScale(20),
  },
  listStyle: {
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: verticalScale(40),
    paddingHorizontal: horizontalScale(25),
    paddingBottom: verticalScale(20),
  },
});
