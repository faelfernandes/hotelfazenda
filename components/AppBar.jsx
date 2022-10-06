import React from 'react';
import { StyleSheet } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';

const AppBar = () => {
  return (
    <HeaderRNE
      rightComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      leftComponent={{
        icon: 'home',
        color: '#fff',
      }}
      centerComponent={{ text: 'Hotel Fazenda', style: styles.heading }}
      backgroundColor="#000"
      containerStyle={{
        borderBottomColor: "transparent",
        paddingHorizontal: 20,
        paddingVertical:20,
      }}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default AppBar;