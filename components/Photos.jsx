import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';

const images = [
  { name: require('../assets/images/0.jpg') },
  { name: require('../assets/images/1.jpg') },
  { name: require('../assets/images/2.jpg') },
  { name: require('../assets/images/3.jpg') },
  { name: require('../assets/images/4.jpg') },
  { name: require('../assets/images/5.jpg') },
  { name: require('../assets/images/6.jpg') },
  { name: require('../assets/images/7.jpg') },
  { name: require('../assets/images/8.jpg') },
  { name: require('../assets/images/9.jpg') }
];

const Photos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Fotos do local
      </Text>
      <FlatList
        horizontal
        data={images}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Image
              source={item.name}
              style={styles.itemPhoto}
              resizeMode="cover"
            />
          </View>}
        showsHorizontalScrollIndicator={false}
        style={styles.photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2A',
  },
  title: {
    color: '#C7C7C7',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 24,
    paddingLeft: 24,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  photo: {
    padding: 10,
    marginBottom: 10
  }
});

export default Photos;