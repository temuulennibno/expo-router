import { Link, useFocusEffect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => {
        setData(products);
      });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {data.map((product) => {
        return (
          <Link href={`/product/${product.id}`}>
            <View>
              <Text>{product.title}</Text>
            </View>
          </Link>
        );
      })}
    </View>
  );
}
