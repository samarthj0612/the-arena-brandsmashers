import FilePicker from 'react-native-document-picker';

const selectImage = async () => {
  try {
    const res = await FilePicker.pick({
      type: [FilePicker.types.images],
    });
    return res;
  } catch (err) {
    if (FilePicker.isCancel(err)) {
      return null;
    } else {
      throw err;
    }
  }
};

export default selectImage;