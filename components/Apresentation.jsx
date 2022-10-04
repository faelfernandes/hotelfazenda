import React from 'react';
import { View, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { Text, Tile } from '@rneui/themed';

const Apresentation = () => {
  const window = useWindowDimensions();
  return (
    <Tile
      imageSrc={{
        uri:
          'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
      }}
      title="Toda a saúde e segurança para viver de perto o melhor da vida."
      titleStyle={{ fontSize: 15 }}
      featured
      caption="Hotel Fazenda"
      activeOpacity={1}
      width={window.width}
    />
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10
  }
});

export default Apresentation;