import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppBar from "./components/AppBar";
import Apresentation from "./components/Apresentation";
import Photos from "./components/Photos";
import Pricing from "./components/Pricing";
import { ScrollView, View } from "react-native";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider >
  );
}
