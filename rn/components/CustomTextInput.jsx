import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomTextInput = ({ placeholder, placeholderStyle, style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChangeText = text => setValue(text);

  return (
    <View style={[styles.container, style]}>
      {!isFocused && value === '' && (
        <Text style={[styles.placeholder, placeholderStyle]}>{placeholder}</Text>
      )}
      <TextInput
        style={[styles.textInput, isFocused && styles.focusedInput]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        multiline
        value={value}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 18,
    color: '#888',
  },
  textInput: {
    color: 'white',
    paddingHorizontal: 10,
    width: '100%',
  },
  focusedInput: {
    borderColor: '#808080',
  },
});

export default CustomTextInput;
