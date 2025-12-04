import Header from '@/components/Organisms/HeaderInternal';
import { getFontFamily } from '@/hooks/useFonts';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { Text } from 'react-native';
import { Row } from '../../EntryScreen/style';
import { MainContainer } from './styles';

// import { Container } from './styles';

const TVehicles: React.FC = () => {
    const [hour, minute, second] = new Date().toLocaleTimeString().split(':');
  return <>
    <Header title={"Veículos"} subtitle={`Atualizado em: ${new Date().toLocaleDateString()} - ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.split(" ")[0].padStart(2, '0')}`} />
    <MainContainer>
        <Text style={{
            fontSize: 22,
            color: '#242424',
            textAlign: 'center',
            marginBottom: 20,
            fontFamily: getFontFamily("600"),
        }}>
            Você não possui veículos
        </Text>
        <Row style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
        }}>
            <FontAwesome5 name="sync-alt" size={24} color={"#3C80EB"} />
            <Text style={{
                fontSize: 16,
                color: '#242424',
                textAlign: 'center',
                fontFamily: getFontFamily("300"),
            }}>
                Toque para atualizar
            </Text>
        </Row>
    </MainContainer>
  </>;
}

export default TVehicles;