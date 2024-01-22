import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useGlobalSearchParams();
  const [basket, setBasket] = useState<string[]>([]);
  useEffect(() => {
    AsyncStorage.getItem("basket").then((res) => {
      if (res) {
        console.log("res:", res);
        setBasket(JSON.parse(res));
      }
    });
  }, []);

  useEffect(() => {
    const stringValue = JSON.stringify(basket);
    AsyncStorage.setItem("basket", stringValue);
  }, [basket]);

  const isSaved = basket.includes(id + "");

  const toggleBasket = async () => {
    if (!isSaved) {
      setBasket([...basket, id + ""]);
      return;
    }
    const newBasket = [...basket];
    const index = newBasket.findIndex((unitId) => unitId === id + "");
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"../"}>Go back</Link>
      <Text>Product detail page</Text>
      <Text>Product id is: {id}</Text>
      <Button onPress={toggleBasket} title={isSaved ? "Сагсалсан" : "Сагслах"} />
    </View>
  );
}
