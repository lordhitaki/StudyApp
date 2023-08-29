import React, {createContext, useEffect, useState, useContext} from 'react';
import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native';
import RNFetchBlob from 'rn-fetch-blob';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dark from './dark';
import light from './light';
import i18n from '../utils/i18n';

const DownloadContext = createContext();

export const useDownloadContext = () => useContext(DownloadContext);

export function DownloadProvider({children}) {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [downloadedMovies, setDownloadedMovies] = useState([]);

  useEffect(() => {
    async function fetchDownloadedMovies() {
      try {
        const downloadedMoviesString = await AsyncStorage.getItem(
          'downloadedMovies',
        );
        if (downloadedMoviesString) {
          const downloadedMoviesData = JSON.parse(downloadedMoviesString);
          setDownloadedMovies(downloadedMoviesData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchDownloadedMovies();
  }, []);

  const startDownload = movie => {
    setSelectedMovie(movie);

    const fileUrl = `http://192.168.1.105:1337${movie?.attributes?.trailler.data[0].attributes.url}`;
    const path = `${RNFetchBlob.fs.dirs.DownloadDir}/${movie?.attributes.name}.mp4`;

    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path,
      },
      progress: (received, total) => {
        const progress = (received / total) * 100;
        setDownloadProgress(progress);
      },
    })
      .fetch('GET', fileUrl)
      .then(() => {
        setDownloadProgress(100);
      })
      .catch(error => {
        console.error(error);
        setDownloadProgress(0);
      });
    const newDownloadedMovie = {
      movie,
      progress: 0,
    };

    setDownloadedMovies([...downloadedMovies, newDownloadedMovie]);
  };

  return (
    <DownloadContext.Provider
      value={{
        downloadProgress,
        selectedMovie,
        startDownload,
        downloadedMovies,
      }}>
      {children}
    </DownloadContext.Provider>
  );
}

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  dark: dark,
  light: light,
};

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function getTheme() {
      const asyncIdioma = await AsyncStorage.getItem('Idioma');
      if (asyncIdioma) {
        i18n.changeLanguage(asyncIdioma);
      }
      const asyncTheme = await AsyncStorage.getItem('Theme');
      if (asyncTheme) {
        setTheme(asyncTheme);
      }
    }
    getTheme();
  }, []);

  function toggleTheme() {
    if (theme == ThemeType.light) {
      setTheme(ThemeType.dark);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('transparent');
      AsyncStorage.setItem('Theme', ThemeType.dark);
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
      setTheme(ThemeType.light);
      AsyncStorage.setItem('Theme', ThemeType.light);
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
