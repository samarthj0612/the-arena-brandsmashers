import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title = 'Click Here', onPress, style }) => {
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
