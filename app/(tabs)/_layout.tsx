import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }} />
      <Tabs.Screen name="about/index" />
    </Tabs>
  );
}
