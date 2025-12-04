import Header from '@/components/Organisms/HeaderInternal';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { MainContainer } from '../TVehicles/styles';

// import { Container } from './styles';

const TAbout: React.FC = () => {
  return <>
    <Header title="Sobre a CDT" />
    <MainContainer>
                <View style={{
                    padding: 10,
                    width: '92%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                }}>
                    <Image
                        source={require("@/assets/images/images_cdt/cdt_logo.png")}
                        style={{
                            width: "100%",
                            height: 400,
                            alignSelf: 'center',
                            marginBottom: 20,
                        }}
                        resizeMode="contain"
                    />
                    <Text style={{
                        fontFamily: getFontFamily("700"),
                        fontSize: 13,
                        color: Colors.secondary,
                        lineHeight: 20,
                        textAlign: 'center',
                    }}>
                        Versão 6.10.13(2749727)
                    </Text>
                    <Text style={{
                        fontFamily: getFontFamily("500"),
                        fontSize: 13,
                        color: Colors.primary,
                        lineHeight: 20,
                        textAlign: 'center',
                    }}>
                        2017 - 2024{'\n'}
                        SERPRO - Serviço Federal de Processamento de Dados
                    </Text>
                </View>
        </MainContainer>
  </>;
}

export default TAbout;