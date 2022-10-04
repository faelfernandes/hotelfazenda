import React from 'react';
import { StyleSheet } from 'react-native';
import { Header as HeaderRNE, lightColors } from '@rneui/themed';

const AppBar = (props) => {
  return (
    <HeaderRNE
      centerComponent={{ text: 'Hotel Fazenda', style: styles.heading }}
      backgroundColor="#007159"
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007159',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppBar;