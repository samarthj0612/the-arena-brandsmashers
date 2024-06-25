import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';

const icons = [
  { name: 'comments-o', component: FontAwesome },
  { name: 'retweet', component: AntDesign },
  { name: 'hearto', component: AntDesign },
  { name: 'bookmark', component: Feather },
];

const PostFooter = () => {
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.section}>
          <icon.component name={icon.name} size={22} color="#878787" />
          <Text style={styles.text}>20</Text>
        </View>
      ))}
      <View style={styles.dollar}>
        <Foundation name="dollar" size={22} color="#878787" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dollar: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#878787',
  },
  text: {
    color: '#878787',
  },
});

export default PostFooter;
