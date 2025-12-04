import { CardsSection, MainCards } from '@/components/Templates/app/TMenuScreen/styles';
import { getFontFamily } from '@/hooks/useFonts';
import { useRouter } from 'expo-router';
import React, { FC } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { RenderCardsProps } from './interface';

const RenderCards: FC<RenderCardsProps> = ({ cards_to_render }) => {
    const router = useRouter();
  return <CardsSection>
            {cards_to_render.map((item, index) => (
                <MainCards key={index} color={item.card_color} style={{
                    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.2)`,
                    elevation: 2,
                }}
                    onPress={() => {
                        if (item.href) {
                            router.push(item.href);
                        }
                    }}
                >
                    <View style={{
                        marginLeft: 20,
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: item.card_text_color, fontFamily: getFontFamily("700") }}>
                            {item.title.toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: 12, color: item.card_text_color,fontFamily: getFontFamily("400") }}>{item.subtitle}</Text>
                    </View>
                    <View style={{ position: "relative" }}>
                        <ImageBackground
                            source={item.back_image}
                            style={{ width: 180, height: 200, position: "absolute", top: -100, right: 0, justifyContent: "center", alignItems: "center" }}
                            resizeMode="contain"
                        >
                            <Image
                                source={item.icon}
                                style={{ width: 70, height: 40, marginLeft: 60 }}
                                resizeMode="contain"
                            />
                    </ImageBackground>
                    </View>

                </MainCards>
            ))}
        </CardsSection>;
}

export default RenderCards;