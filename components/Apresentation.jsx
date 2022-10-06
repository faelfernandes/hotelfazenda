import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Tile } from '@rneui/themed';

const Apresentation = () => {
  const window = useWindowDimensions();
  return (
    <Tile
      imageSrc={require('../assets/images/header.jpg')}
      title="Toda a saúde e segurança para viver de perto o melhor da vida."
      titleStyle={{ fontSize: 24, fontWeight: 'bold' }}
      featured
      caption="- Hotel Fazenda"
      activeOpacity={1}
      width={window.width}
      height={200}
    />
  );
};

export default Apresentation;