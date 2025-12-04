import { Colors } from "@/constants/Colors";
import { getFontFamily } from "@/hooks/useFonts";
import storage from "@/utils/storage";
import { Href, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { DrawerItems } from "./DrawerItems";
import { Divider, SectionContainer } from "./styles";


const DrawerContent = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const setup = async () => {
    const storedUserName = await storage.getItem("user_data");
    const user = JSON.parse(storedUserName as any).dados_pessoais;
    setUser(user || null);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <View>
        <SectionContainer col>
      <Image
        source={require("@/assets/images/images_cdt/cdt_logo_sem_nome.png")}
        style={{
          width: 70,
          height: 70,
        }}
      />
      {user && (
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: Colors.primary,
              fontFamily: getFontFamily("400"),
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {user.nome_completo.toUpperCase()}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "gray",
              fontFamily: getFontFamily("400"),
            }}
          >
            {user.cpf}
          </Text>
        </View>
      )}
      </SectionContainer>
      <Divider />
      {DrawerItems.map((item, index) => (
        item.label === 'divider' ? (
          <Divider key={index} />
        ) : (
          <SectionContainer
            key={index}
            onPress={() => {
                if (item?.onPress) {
                    item?.onPress();
                    return;
                }
                if (!item.screen) {
                    return;
                }
                router.replace(item.screen as Href);
            }}
          >
            <View style={{ width: 40 }}>
              {item.icon}
            </View>
            <Text
              style={{
                fontSize: 16,
                color: Colors.secondary,
                fontFamily: getFontFamily("400"),
              }}
            >
              {item.label}
            </Text>
          </SectionContainer>
        )
      ))}
    </View>
    );
};

export default DrawerContent;
