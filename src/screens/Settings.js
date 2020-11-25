import React from 'react';
import { Button, SafeAreaView } from 'react-native';

export default ({ navigation }) => (
  <SafeAreaView>
    <Button title="Go to Actions" onPress={() => navigation.navigate('Tabs', { screen: 'bla' })} />
  </SafeAreaView>
);
