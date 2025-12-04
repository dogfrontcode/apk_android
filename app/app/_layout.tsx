import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView mode="margin" style={{ flex: 1 }} edges={["top", "bottom"]}>
      {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              borderTopEndRadius: 0,
              width: '70%',
            },
          }}
          drawerContent={DrawerContent}
        />
      </GestureHandlerRootView> */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
        />
    </SafeAreaView>
  );
}
