import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import Container from '../../components/Container';
import Location from '../../components/Location';
import MenuButton from '../../components/MenuButton';
import RenderItemFoodList from '../../components/RenderItemFoodList';

import styles from './styles';
import {images, FONTS, COLORS} from '../../constants';
import typesFoodMock from '../../mocks/typesFood';
import foodMock from '../../mocks/FoodMock';

const { width } = Dimensions.get('window');

export const HomeScreen = ({ navigation }) => {
  const refTranslateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    refTranslateX.value = event.contentOffset.x;
  });

  const refScrollView = useRef();

  const [typeFood, setTypeFood] = useState({
    image: images.burgerIcon2,
    name: 'burguer'
  });

  const handleSelectTypeFood = typeFoodSelected => {
    setTypeFood(typeFoodSelected);
    refScrollView.current?.scrollTo({
      y : 0,
      animated : true
  });
  };

  let arrayData = foodMock.filter((food) => food.type === typeFood.name)

  arrayData = [...arrayData, { id: 'right-spacer' }]

  return (
    <Container customStyle={styles.container}>
      <View style={styles.containerHeader}>
        <MenuButton />
        <Location />
        <Image source={images.user} style={styles.userImage} />
      </View>
      <View>
        <Text style={{...FONTS.h1}}>Online Food</Text>
        <View style={styles.containerTitle}>
          <Text style={{...FONTS.body1}}>Delivery!</Text>
          <Image source={images.emojiTongue} style={styles.emojiTongue} />
        </View>
      </View>
      <TouchableOpacity style={styles.containerSearch} onPress={() => navigation.navigate('Search')}>
        <View style={styles.containerSubSearch}>
          <Icon name={'search'} size={30} style={styles.searchIcon} />
          {/* <TextInput
            placeholder={'Search your fav food'}
            placeholderTextColor={COLORS.light}
            style={styles.searchTextInput}
          /> */}
          <Text style={styles.searchTextInput}>Search your fav food</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        <FlatList
          data={typesFoodMock}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                ...styles.containerChips,
                backgroundColor:
                  item.icon === typeFood.image ? COLORS.primary : COLORS.white,
              }}
              activeOpacity={0.5}
              onPress={() => handleSelectTypeFood({
                image: item.icon,
                name: item.name,
              })}>
              <Image source={item.icon} style={{height: 30, width: 30}} />
              <View style={{width: 10}} />
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={{textTransform: 'capitalize'}}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{marginBottom: 75}}>
        <Animated.ScrollView
          ref={refScrollView}
          horizontal
          snapToInterval={195}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          contentContainerStyle={{height: 380, alignItems: 'center'}}
        >
          {arrayData.map((item, index) => {
            if (item.id.includes('spacer')) {
              return <View key={item.id} style={{width: width * 0.35}} />
            }
            return (
              <RenderItemFoodList
                key={item.id}
                item={item}
                index={index}
                refTranslateX={refTranslateX}
              />
            );
          })}
        </Animated.ScrollView>
      </View>
    </Container>
  );
};

export default HomeScreen;
