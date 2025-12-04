import Header from '@/components/Organisms/HeaderInternal';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import React from 'react';
import { Text, View } from 'react-native';
import { MainContainer } from '../TMenuScreen/styles';

// import { Container } from './styles';

export const Title: React.FC<{ children: React.ReactNode, style: any }> = ({ children, style }) => <Text style={{
    fontFamily: getFontFamily("700"),
    fontSize: 16,
    color: Colors.primary,
    ...style
}}>{children}</Text>

const TTems: React.FC = () => {
  return <>
    <Header title={"Termo de responsabilidade"} />
    <MainContainer>
        <View style={{
            marginTop: 30,
            width: '92%',
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
        }}>
            <Title style={{ marginBottom: 10, textAlign: 'center' }}>Termo de Responsabilidade</Title>
            <Text style={{
                fontFamily: getFontFamily("500"),
                fontSize: 13,
                color: Colors.secondary,
                lineHeight: 20,
            }}>
                Declaro, para os devidos fins e efeitos legais, serem pessoais e verdadeiras as informações inseridas no cadastro da Senatran, sobre as quais assumo todas as responsabilidades, sob pena de incorrer nas sanções previstas nos artigos 299 e 307 do Código Penal (falsidade ideológica e falsa identidade)
            </Text>
        </View>
    </MainContainer>
  </>;
}

export default TTems;