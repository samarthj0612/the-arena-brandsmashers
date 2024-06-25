import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

interface DotProps {
  color?: string;
}

const Dot: React.FC<DotProps> = ({ color = "#EB5409" }) => {
  return <View style={[styles.container, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 4,
    width: 4,
    borderRadius: 2, // Corrected to 2 for better border radius
  }
});

export default Dot;
