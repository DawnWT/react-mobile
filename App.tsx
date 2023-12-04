import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { OnBoardingPage } from './src/pages/onBoarding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './src/pages/HomePage';
import { CategoriesPage } from './src/pages/CategoriesPage';
import { MorePage } from './src/pages/MorePage';
import { FavoritePage } from './src/pages/FavoritePage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconComponent;

        if (route.name === "Home") {
          iconComponent = (
            <Image
            style={{ width: 24, height: 24 }}
            source={require("./medias/icon/home.png")}
          />
          );
        } else if (route.name === "Categories") {
          iconComponent = (
            <Image 
              style={{ width: 24, height: 24 }} 
              source={require("./medias/icon/category.png")} />
          );
        } else if (route.name === "Favorite") {
          iconComponent = (
            <Image 
              style={{ width: 24, height: 24 }} 
              source={require("./medias/icon/heart.png")}
            />
          );
        } else if (route.name === "More") {
          iconComponent = (
            <Image 
              style={{ width: 24, height: 24 }} 
              source={require("./medias/icon/more-vertical.png")} 
            />
          );
        }

        return iconComponent;
      },
    })}
  >
   
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Categories" component={CategoriesPage} />
      <Tab.Screen name="Favorite" component={FavoritePage} />
      <Tab.Screen name="More" component={MorePage} />
      
    </Tab.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoardingPage}  />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A4BA0",
    alignItems: "center",
    justifyContent: "center",
  },
});


