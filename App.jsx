import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/stackRoutes';
import {ThemeProvider, DownloadProvider} from './src/theme/theme';
import i18n from './src/utils/i18n';

function App() {
  return (
    <ThemeProvider>
      <StatusBar backgroundColor={'black'} />
      <NavigationContainer>
        <DownloadProvider>
          <Routes />
        </DownloadProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
