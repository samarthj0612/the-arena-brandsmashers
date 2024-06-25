import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './rn/main';
import { BottomSheetProvider } from './rn/utils/BottomSheetContext';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={'#020202'} />
        <BottomSheetProvider>
          <Main />
        </BottomSheetProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
