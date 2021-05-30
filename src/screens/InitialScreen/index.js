import React from 'react';
import { View, Text, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import Container from '../../components/Container';
import Button from '../../components/Button';
import styles from './styles';

import { 
  FONTS,
  SIZES,
  COLORS,
  images,
} from '../../constants';

const InitialScreen = () => {
  return (
    <Container customStyle={styles.containerCustomStyle}>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image source={images.burgerIcon} style={styles.burgerImage} />
          <Text
            style={{
              ...FONTS.h2,
              ...styles.foodText,
            }}>
            Food
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              ...styles.ieText,
            }}>
            ie
          </Text>
        </View>
        <View style={styles.containerTitle}>
          <View style={SIZES.row}>
            <Text style={{...FONTS.largeTitle}}>Good</Text>
            <Text style={{...FONTS.largeTitle, marginLeft: 15, color: '#fff'}}>
              Food
            </Text>
          </View>
          <View style={SIZES.row}>
            <Text style={{...FONTS.largeTitle, color: '#fff'}}>Great</Text>
            <Text style={{...FONTS.largeTitle, marginLeft: 15}}>Life!</Text>
          </View>
        </View>
        <View style={styles.containerSvgImage}>
          <Svg height="100%" width="100%" viewBox="0 0 150 150" style={{ right: 20 }}>
            <Circle
              cx="50"
              cy="60"
              r="70"
              fill='rgba(255,255,255,0.2)'
            />
          </Svg>
          <Image source={images.chef} style={styles.imageChef} />
        </View>
        <View style={styles.buttonGetStarted}>
          <Button
            children="Get Started"
            iconName={'arrow-forward'}
            iconColor={COLORS.white}
            iconSize={22}
          />
        </View>
      </View>
    </Container>
  );
};

export default InitialScreen;