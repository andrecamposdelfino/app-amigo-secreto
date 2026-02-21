import { Stack } from "expo-router";

export default function Layout() {
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="/sorteio/index" />
    <Stack.Screen name="/participantes/index" />
  </Stack>;
}
