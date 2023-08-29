import React, {useContext} from 'react';
import {BlurView} from '@react-native-community/blur';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {FontAwesomeIcon} from 'react-native-vector-icons/FontAwesome5';

import '../../src/utils/i18n';

import Home from '../pages/home/home';
import Categories from '../pages/home/categories';
import Downloads from '../pages/home/downloads';
import More from '../pages/home/more';

import HomeOn from '../assets/icons/homeON';
import HomeOff from '../assets/icons/homeOff';
import CategorisOn from '../assets/icons/categoriesOn';
import CategoriesOff from '../assets/icons/categoriesOff';
import DownOn from '../assets/icons/downloadOn';
import DownOff from '../assets/icons/downloadsOff';
import MoreOn from '../assets/icons/moreOn';
import MoreOff from '../assets/icons/moreOff';
import WatchList from '../pages/home/watchList';
import Robo from '../assets/icons/robo';

const Tab = createBottomTabNavigator();

export default function TabRoute() {
  const {t, i18n} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarInactiveBackgroundColor: 'rgba(0, 0, 0, 0.70)',
        tabBarActiveBackgroundColor: 'rgba(0, 0, 0, 0.70)',
        tabBarActiveTintColor: '#ED1B24',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <HomeOn />;
            }
            return <HomeOff />;
          },
        }}
      />
      <Tab.Screen
        name={t('Categorias')}
        component={Categories}
        options={{
          // headerShown: true,
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <CategorisOn />;
            }
            return <CategoriesOff />;
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* <Tab.Screen
        name="Lista"
        component={WatchList}
        options={{
          // headerShown: true,
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Robo />;
            }
            return <Robo />;
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      /> */}
      <Tab.Screen
        name={t('Downloads')}
        component={Downloads}
        options={{
          // headerShown: true,
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <DownOn />;
            }
            return <DownOff />;
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />

      <Tab.Screen
        name="Mais"
        component={More}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <MoreOn />;
            }
            return <MoreOff />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
