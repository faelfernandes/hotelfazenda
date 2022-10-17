import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppBar from "./components/AppBar";
import Apresentation from "./components/Apresentation";
import Photos from "./components/Photos";
import Pricing from "./components/Pricing";
import { ScrollView, View } from "react-native";
import Footer from "./components/Footer";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,

  });

  if (!loadedFont) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: '#000' }}>
        <ScrollView>
          <View>
            <AppBar />
            <View>
              <Apresentation />
              <Photos />
              <Pricing />
              <Footer />
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider >
  );
}
