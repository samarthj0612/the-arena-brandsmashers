import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import Post from '../../components/Post';
import { posts, users } from '../../assets/data';
import Header from '../../components/Header';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('AddPost')}>
        <AntDesign name='plus' size={28} color={'white'} />
      </TouchableOpacity>
      <Header />
      <ScrollView>
        {posts.map((post, i) => (
          <Post
            key={i}
            id={post.id}
            name={users[post.createdBy].name}
            username={users[post.createdBy].username}
            text={post.text}
            media={post.media}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#020202',
    position: 'relative'
  },

  floatingButton: {
    width: 52,
    height: 52,
    borderRadius: 100,
    backgroundColor: '#EB540A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 1
  }
});
