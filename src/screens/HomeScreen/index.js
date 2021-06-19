import React, { useState } from 'react'
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container';
import Location from '../../components/Location';
import MenuButton from '../../components/MenuButton';

import styles from './styles';
import { images, FONTS, COLORS } from '../../constants';
import typesFoodMock from '../../mocks/typesFood';

export const HomeScreen = () => {

  const [typeFood, setTypeFood] = useState(images.burgerIcon2)

  const handleSelectTypeFood = (typeFoodSelected) => {
    setTypeFood(typeFoodSelected)
  }

  return (
    <Container customStyle={styles.container}>
      <View style={styles.containerHeader}>
        <MenuButton />
        <Location />
        <Image 
          source={images.user}
          style={styles.userImage} 
        />
      </View>
      <View>
        <Text style={{...FONTS.h1}}>
          Online Food
        </Text>
        <View style={styles.containerTitle}>
          <Text style={{...FONTS.body1}}>
            Delivery!
          </Text>
          <Image 
            source={images.emojiTongue}
            style={styles.emojiTongue}
          />
        </View>
      </View>
      <View style={styles.containerSearch}>
        <View style={styles.containerSubSearch}>
          <Icon 
            name={'search'}
            size={30}
            style={styles.searchIcon}
          />
          <TextInput 
            placeholder={'Search your fav food'}
            placeholderTextColor={COLORS.light}
            style={styles.searchTextInput}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={typesFoodMock}
          horizontal
          keyExtractor={( item ) => String(item.name)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{...styles.containerChips, backgroundColor: item.icon === typeFood ? COLORS.primary : COLORS.white}}
              activeOpacity={0.5}
              onPress={() => handleSelectTypeFood(item.icon)}
            >
              <Image
                source={item.icon}
                style={{ height: 30, width: 30 }}
              />
              <View style={{width: 15}} />
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  )
}

export default HomeScreen;