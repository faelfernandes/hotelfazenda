import React from 'react';
import { View } from 'react-native';
import { PricingCard, lightColors } from '@rneui/themed';

const Pricing = () => {
  return (
    <View>
      <PricingCard
        color={lightColors.primary}
        title="Diária"
        price="R$150"
        info={['1 pessoas', '(check-in: 16h - check-out: 14h)']}
        button={{ title: 'Ver mais' }}
      />
      <PricingCard
        color={lightColors.secondary}
        title="Diária Casal"
        price="R$300"
        info={['2 pessoas', '(check-in: 16h - check-out: 14h)']}
        button={{ title: 'Ver mais' }}
      />
      <PricingCard
        color={lightColors.secondary2}
        title="Diária Casal Premium"
        price="R$399"
        info={['2 pessoas', 'Comida e bebida inclusa', '(check-in: 16h - check-out: 14h)']}
        button={{ title: 'Ver mais' }}
      />
    </View>
  );
};

export default Pricing;