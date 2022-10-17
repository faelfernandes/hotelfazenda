import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text style={styles.footer}>© 2022 Hotel Fazenda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10
  }
});

export default Footer;