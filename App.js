import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";

import DashBoardScreen from "./Screens/DashBoardScreen";
import FriendCircleScreen from "./Screens/FriendCircleScreen";
import MapScreen from "./Screens/MapScreen";
import MessageScreen from "./Screens/MessageScreen";
import UserScreen from "./Screens/UserScreen";

import SleepScreen from "./DashBoard/Sleep";
import HearBeatScreen from "./DashBoard/HeartBeat";
import TemperatureScreen from "./DashBoard/Temperature";
import SportsScreen from "./DashBoard/Sports";
import WeightScreen from "./DashBoard/Weight";
import DiaryScreen from "./DashBoard/Diary";

import MyDeviceScreen from "./User/MyDevice";
import MyPetScreen from "./User/MyPet";
import SettingScreen from "./User/Setting";
import SpaceScreen from "./User/Space";
import HelpScreen from "./User/HelpCenter";
import PrivacyScreen from "./User/Privacy";
import TaskScreen from "./User/Task";

import UserProtocol from "./protocol/UserProtocol";
import PrivacyProtocol from "./protocol/PrivacyProtocol";
import UserBehavior from "./protocol/UserBehavior";


import DashboardActive from "./TabBar/DashboardActive";
import DashboardInactive from "./TabBar/DashboardInactive";
import FrienCircleActive from "./TabBar/FriendCircleActive";
import FrienCircleInactive from "./TabBar/FriendCircleInactive";
import MapActive from "./TabBar/MapActive";
import MapInactive from "./TabBar/MapInactive";
import UserActive from "./TabBar/UserActive";
import UserInactive from "./TabBar/UserInactive";
import MessageActive from "./TabBar/MessageActive";
import MessageInactive from "./TabBar/MessageInactive";

const RootStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const DashBoardStack = createStackNavigator();
const UserStack = createStackNavigator();




function DashBoardStackScreen() {

  return (
    <DashBoardStack.Navigator screenOptions={{ headerShown: false }}>
      <DashBoardStack.Screen name="DashBoardMain" component={DashBoardScreen} />
      <DashBoardStack.Screen name="Sleep" component={SleepScreen} />
      <DashBoardStack.Screen name="HeartBeat" component={HearBeatScreen} />
      <DashBoardStack.Screen name="Temperature" component={TemperatureScreen} />
      <DashBoardStack.Screen name="Sports" component={SportsScreen} />
      <DashBoardStack.Screen name="Weight" component={WeightScreen} />
      <DashBoardStack.Screen name="Diary" component={DiaryScreen} />


    </DashBoardStack.Navigator>


  );

}

function UserStackScreen() {

  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="UserMain" component={UserScreen} />
      <UserStack.Screen name="MyDevice" component={MyDeviceScreen} />
      <UserStack.Screen name="MyPet" component={MyPetScreen} />
      <UserStack.Screen name="Setting" component={SettingScreen} />
      <UserStack.Screen name="Space" component={SpaceScreen} />
      <UserStack.Screen name="Privacy" component={PrivacyScreen}/>
      <UserStack.Screen name="Help" component={HelpScreen} />
      <UserStack.Screen name="Task" component={TaskScreen} />
      


    </UserStack.Navigator>


  );

}


  
function MainApp() {
  return (
    
      <Tab.Navigator initialRouteName="Map" barStyle={{ backgroundColor: "#FFFFFF", paddingBottom: 25, }}>
        <Tab.Screen 
          name="DashBoard" 
          component={DashBoardStackScreen} 
          options={{
            tabBarLabel: () => null, 
            tabBarIcon: ({ focused }) => (
              focused ? <DashboardActive width={45} height={45} /> : <DashboardInactive width={45} height={45} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: event => {
              
              event.preventDefault();
        
              
              navigation.navigate('DashBoard', { screen: 'DashBoardMain' });
            },
          })}
        />
      <Tab.Screen 
          name="FriendCircle" 
          component={FriendCircleScreen} 
          options={{
            tabBarLabel: () => null, 
            tabBarIcon: ({ focused }) => (
              focused ? <FrienCircleActive width={45} height={45} /> : <FrienCircleInactive width={45} height={45} />
            ),
          }}
        />
        <Tab.Screen 
          name="Map" 
          component={MapScreen} 
          options={{
            tabBarLabel: () => null, 
            tabBarIcon: ({ focused }) => (
              focused ? <MapActive width={45} height={45} /> : <MapInactive width={45} height={45} />
            ),
          }}
        />
        <Tab.Screen 
          name="Message" 
          component={MessageScreen} 
          options={{
            tabBarLabel: () => null, 
            tabBarIcon: ({ focused }) => (
              focused ? <MessageActive width={45} height={45} /> : <MessageInactive width={45} height={45} />
            ),
          }}
        />
        <Tab.Screen 
          name="User" 
          component={UserStackScreen} 
          options={{
            tabBarLabel: () => null, 
            tabBarIcon: ({ focused }) => (
              focused ? <UserActive width={45} height={45} /> : <UserInactive width={45} height={45} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: event => {
              
              event.preventDefault();
        
              
              navigation.navigate('User', { screen: 'UserMain' });
            },
          })}
        />
      </Tab.Navigator>
    
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
      <RootStack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }}/>
        <RootStack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <RootStack.Screen 
            name="UserProtocol" 
            component={UserProtocol} 
            options={{ 
                title: '用户协议',
                headerBackTitleVisible: false 
            }} 
        />
        <RootStack.Screen 
            name="PrivacyProtocol" 
            component={PrivacyProtocol} 
            options={{ 
                title: '隐私政策',
                headerBackTitleVisible: false 
            }} 
        />
        <RootStack.Screen 
            name="UserBehavior" 
            component={UserBehavior} 
            options={{ 
                title: '宠友圈行为规范',
                headerBackTitleVisible: false 
            }} 
        />
        <RootStack.Screen name="MainApp" component={MainApp}  options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}