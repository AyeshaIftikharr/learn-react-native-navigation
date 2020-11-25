import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsList from '../screens/ContactsList';
import ContactDetails from '../screens/ContactDetails';
import ActionsList from '../screens/ActionsList';
import ActionDetails from '../screens/ActionDetails';
import Settings from '../screens/Settings';

const StackNavigator = createStackNavigator();

const ContactsStack = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      name="ContactsList"
      component={ContactsList}
      options={{
        headerTitle: 'Contacts',
      }}
    />
    <StackNavigator.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ navigation, route }) => ({
        headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
      })}
    />
  </StackNavigator.Navigator>
);

const ActionsStack = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen name="Actions" component={ActionsList} />
    <StackNavigator.Screen name="ActionsDetails" component={ActionDetails} />
  </StackNavigator.Navigator>
);

const TabsNavigator = createBottomTabNavigator();
const AppBootomTabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: 'red',
    }}>
    <TabsNavigator.Screen
      name="Contacts"
      component={ContactsStack}
      options={{
        tabBarIcon: ({ size, color }) => <Icon name="home" size={size} color={color} />,
      }}
    />
    <TabsNavigator.Screen
      name="Actions"
      component={ActionsStack}
      options={{
        tabBarIcon: ({ size, color }) => <Icon name="account" size={size} color={color} />,
      }}
    />
  </TabsNavigator.Navigator>
);

const DrawerNavigator = createDrawerNavigator();
const AppDrawer = () => (
  <DrawerNavigator.Navigator drawerType="slide">
    <DrawerNavigator.Screen
      name="Tabs"
      component={AppBootomTabs}
      options={{
        drawerLabel: 'Home',
      }}
    />
    <DrawerNavigator.Screen name="Settings" component={Settings} />
  </DrawerNavigator.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppDrawer />
  </NavigationContainer>
);
