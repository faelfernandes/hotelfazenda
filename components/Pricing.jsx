import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PricingCard } from '@rneui/themed';

const Pricing = () => {
  return (
    <View style={{ paddingHorizontal: 5, backgroundColor: "#121212" }}>
      <Text style={styles.title}>
        Confira os nossos preços
      </Text>
      <PricingCard
        color="#439946"
        title="Diária"
        price="R$150"
        pricingStyle={{ color: 'white' }}
        info={['- 1 pessoa', '- Check-in: 16h - Check-out: 14h']}
        button={{ title: 'Ver mais' }}
        containerStyle={{
          borderRadius: 10,
          backgroundColor: '#2A2A2A',
          borderColor: 'transparent',
        }}
        onButtonPress={() => alert('Não disponível')}
      />
      <PricingCard
        color="#439946"
        title="Diária Casal"
        pricingStyle={{ color: 'white' }}
        price="R$300"
        info={['- 2 pessoas', '- Check-in: 16h - Check-out: 14h']}
        button={{ title: 'Ver mais' }}
        containerStyle={{
          borderRadius: 10,
          backgroundColor: '#2A2A2A',
          borderColor: 'transparent',
        }}
        onButtonPress={() => alert('Não disponível')}
      />
      <PricingCard
        color="#aa49eb"
        pricingStyle={{ color: 'white' }}
        title="Diária Casal Premium"
        price="R$399"
        info={['- 2 pessoas', '- Comida e bebida inclusa', '- Check-in: 16h - Check-out: 14h']}
        button={{ title: 'Ver mais' }}
        containerStyle={{
          borderRadius: 10,
          backgroundColor: '#2A2A2A',
          borderColor: 'transparent',
          marginBottom: 100
        }}
        onButtonPress={() => alert('Não disponível')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    padding: 20
  }
});

export default Pricing;