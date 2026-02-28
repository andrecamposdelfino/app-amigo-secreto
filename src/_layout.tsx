import { Stack } from "expo-router";

export default function Layout() {
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#030303",
      },

      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen name="/index" options={{ title: "Sorteio" }} />
    <Stack.Screen
      name="/participantes/index"
      options={{ title: "Participantes" }}
    />
  </Stack>;
}
