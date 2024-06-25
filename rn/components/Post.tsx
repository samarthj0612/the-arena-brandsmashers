import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useBottomSheet } from '../utils/BottomSheetContext';
import PostFooter from './PostFooter';
import Dot from './Dot';

import { posts } from '../assets/data';
import { users } from '../assets/data';

const grey = '#808080';
const bottomSheetHeight = 130;

interface PostProps {
  id: string;
  isReposted?: boolean;
}

const Post: React.FC<PostProps> = ({ id, isReposted }) => {
  const { openBottomSheet } = useBottomSheet();
  const navigation = useNavigation();
  const [postData, setPostData] = useState<any | null>(null); // Adjust type as per your data structure

  useEffect(() => {
    const data = posts.filter((post) => post.id === id);
    if (data.length > 0) {
      setPostData(data[0]);
    }
  }, [id]);

  const sheetContent = (
    <View style={styles.sheetContentWrapper}>
      <TouchableOpacity
        style={styles.menuOption}
        onPress={() => navigation.navigate('Repost', { postId: id })}
      >
        <EvilIcons name="retweet" size={28} color={grey} />
        <Text style={styles.menuText}>Repost</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuOption}>
        <MaterialIcons name="text" size={24} color={grey} />
        <Text style={styles.menuText}> Quote</Text>
      </TouchableOpacity>
    </View>
  );

  const bottomSheet = () => {
    openBottomSheet(sheetContent, bottomSheetHeight);
  };

  return (
    <>
      {postData ? (
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.postHeader}>
              <Image style={styles.profilePic} source={{ uri: users[1].profile }} height={45} width={45} />
              <Text style={styles.text}>{users[postData.createdBy].name}</Text>
              <Dot color={'#878787'} />
              <Text style={styles.textSecondary}>@{users[postData.createdBy].username}</Text>
              <Dot color={'#878787'} />
              <Text style={styles.textSecondary}>1 day</Text>
              <TouchableOpacity style={styles.options} onPress={bottomSheet}>
                <SimpleLineIcons name="options" size={16} color={'#ffffff'} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 10, marginLeft: !isReposted ? 55 : 0 }}>
              <Text style={{ ...styles.text }}>{postData.text}</Text>
              {postData.media && postData.media.type === 'image' && (
                <Image style={styles.postMedia} source={{ uri: postData.media.source }} height={300} width={300} />
              )}
              <PostFooter />
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 0.6,
    borderBottomColor: '#808080',
  },
  profilePic: {
    borderRadius: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'column',
    gap: 6,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  options: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    color: '#ffffff',
  },
  textSecondary: {
    color: '#878787',
  },
  postMedia: {
    width: '100%',
    borderRadius: 6,
  },
  sheetContentWrapper: {
    gap: 10,
  },
  menuOption: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Post;
