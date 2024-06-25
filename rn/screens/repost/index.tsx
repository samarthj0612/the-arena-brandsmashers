import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import { useBottomSheet } from '../../utils/BottomSheetContext';
import CustomTextInput from '../../components/CustomTextInput';
import Post from '../../components/Post';
import { users } from '../../assets/data';

const userData = Object.values(users);

interface RepostInterface {
  route: {
    params: {
      postId: string
    }
  }
}

const Repost = ({ route } : RepostInterface) => {
  const [postId, setPostId] = useState<string>();
  const { closeBottomSheet } = useBottomSheet();

  useEffect(() => {
    const { postId:id } = route.params;
    setPostId(id);
    closeBottomSheet(); // Ensure bottom sheet is closed when postId changes
  }, [route.params.postId]);

  const handleRepost = () => {
    // Implement repost functionality
  };

  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={80}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Repost</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.profileImg} source={{ uri: userData[1].profile }} />

          <ScrollView style={styles.inputScroll} contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
            <CustomTextInput
              placeholder='What Happening?'
              placeholderStyle={styles.placeholderStyle}
              style={styles.textInput}
            />
            {postId && <Post id={postId} isReposted={true} />}
          </ScrollView>
        </View>

        <View style={styles.submit}>
          <View style={styles.medias}>
            <View style={styles.mediaIcons}>
              <TouchableOpacity>
                <View>
                  <Octicons name="image" color="white" size={30} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{ height: 30, width: 30, borderColor: "white", borderWidth: 2, justifyContent: "center" }}>
                  <MaterialIcons name="gif" color="white" size={30} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={{ width: '100%' }} onPress={handleRepost}>
            <View style={styles.postButton}>
              <Text style={styles.postNowText}>Repost</Text>
            </View>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#020202"
  },
  container: {
    flex: 1,
    backgroundColor: "#020202"
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20
  },
  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#3B3B3B",
    height: "8%",
    justifyContent: "center",
    marginBottom: 25
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  inputContainer: {
    flexDirection: "row",
    marginLeft: 20,
    gap: 10,
    flex: 1,
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  inputScroll: {
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 10,
    width: '80%',
    color: 'white', // Add color to text input to distinguish from placeholder
    marginBottom: 30
  },
  placeholderStyle: {
    color: '#808080',
    fontSize: 20, // Increase the placeholder font size
  },
  postButton: {
    backgroundColor: "#EB540A",
    height: 44,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  postNowText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white"
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 20
  },
  medias: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
  }
});

export default Repost;
