import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import AddNewPost from '../screens/addNewPost';
import Repost from '../screens/repost';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={BottomNavigation} />
      <Stack.Screen name='AddPost' component={AddNewPost} />
      <Stack.Screen name='Repost' component={Repost} />
    </Stack.Navigator>
  );
}

export default MainStack;