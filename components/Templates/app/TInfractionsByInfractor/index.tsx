import Header from '@/components/Organisms/HeaderInternal';
import { getFontFamily } from '@/hooks/useFonts';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Text, View } from 'react-native';
import { Row } from '../../EntryScreen/style';
import { MainContainer } from '../TMenuScreen/styles';
import { FilterSubtitle, TextFilterSubtitle } from './style';


const TInfractionsByInfractor: React.FC = () => {
    let current_month = new Date().toLocaleString('pt-BR', { month: 'short' });
    current_month = current_month.replace('.', '')

    const current_year = new Date().getFullYear();
  return <>
    <Header title={"Infrações por Infrator"} HeaderRight={<FontAwesome6 name="filter" size={24} color="white" />}/>
    <MainContainer>
      <FilterSubtitle>
        <TextFilterSubtitle>Filtro ativo: Não Pagas (A vencer e vencidas)</TextFilterSubtitle>
        <TextFilterSubtitle>Período escolhido: {current_month}/{current_year - 2} - {current_month}/{current_year}</TextFilterSubtitle>
      </FilterSubtitle>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{
            fontSize: 22,
            color: '#242424',
            textAlign: 'center',
            marginBottom: 20,
            fontFamily: getFontFamily("600"),
        }}>
            Você não possui infrações{'\n'}registradas para o filtro{'\n'}informado
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
        </View>
    </MainContainer>
  </>;
}

export default TInfractionsByInfractor;