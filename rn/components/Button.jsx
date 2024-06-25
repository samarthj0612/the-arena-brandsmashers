import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ title = 'Click Here', onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EB540A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 44,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Button;
