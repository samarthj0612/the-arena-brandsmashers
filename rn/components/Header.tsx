import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Logo from '../assets/images/justlogo.png';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo as ImageSourcePropType} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020202',
  },
  logo: {
    height: 40,
    width: 40,
  },
});

export default Header;
