import { Stack } from "expo-router";
import {useFonts} from "expo-font"

//applying custom fonts
useFonts({
  'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
  'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
  'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
})
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
  )
}
