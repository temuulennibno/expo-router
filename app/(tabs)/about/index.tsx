import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About page</Text>
      <Link href={"/"}>Go to index page</Link>
    </View>
  );
}
