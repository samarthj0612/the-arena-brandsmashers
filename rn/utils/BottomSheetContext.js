import React, { createContext, useContext, useRef, useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheetContext = createContext();

export const BottomSheetProvider = ({ children }) => {
  const refRBSheet = useRef();
  const [content, setContent] = useState(null);
  const [sheetHeight, setSheetHeight] = useState(150); // Default height

  const openBottomSheet = (content, height = 300) => {
    setContent(content);
    setSheetHeight(height);
    refRBSheet.current.open();
  };

  const closeBottomSheet = () => {
    refRBSheet.current.close();
  };

  return (
    <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
      {children}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        openDuration={250}
        height={sheetHeight}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderColor: '#3B3B3B80',
            borderWidth: 1,
            borderBottomWidth: 0,
            backgroundColor: '#0F0F0F',
            padding: 20,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0)',
          },
        }}>
        {content}
      </RBSheet>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => useContext(BottomSheetContext);
