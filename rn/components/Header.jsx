import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Logo from '../assets/images/justlogo.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
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
