import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

import styles from './styles';
import {COLORS, FONTS, images} from '../../constants';

const RenderItemFoodList = ({item, index, refTranslateX}) => {

  const inputRange = [(index - 1) * 180, (index) * 180, (index + 1) * 180];

  const rFoodList = useAnimatedStyle(() => {

    const scale = interpolate(
      refTranslateX.value,
      inputRange,
      [0.85, 1.05, 1.05],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      refTranslateX.value,
      inputRange,
      [0.5, 1, 0.7],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
      opacity,
    };

  });

  return (
    <Animated.View style={rFoodList}>
      <TouchableOpacity 
      style={styles.containerFoodList} 
      activeOpacity={0.8}
      >
        <Image source={item.image} style={styles.imageFood} />
        <Text adjustsFontSizeToFit numberOfLines={2} style={styles.nameFood}>
          {item.name}
        </Text>
        <View style={styles.containerCalories}>
          <Image source={images.fireIcon} style={{height: 30, width: 30}} />
          <Text style={styles.caloriesText}>{`${item.calories} Calories`}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={{...FONTS.h5, color: COLORS.primary}}>$</Text>
          <Text style={{...FONTS.h2, color: COLORS.dark, marginLeft: 5}}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RenderItemFoodList;
