import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import React from 'react'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-700"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <Text className="font-body text-5xl text-gray-50">se fude</Text>
      <Text className="font-alt text-5xl text-gray-50">Rocketseat</Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
