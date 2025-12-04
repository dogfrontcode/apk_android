import Header from '@/components/Organisms/HeaderInternal';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Text, View } from 'react-native';
import { Row } from '../../EntryScreen/style';
import { MainContainer } from '../TMenuScreen/styles';

// import { Container } from './styles';

const TSettings: React.FC = () => {
  return <>
    <Header title={"Preferências"} />
    <MainContainer>
        <View style={{
            marginTop: 30,
            width: '100%',
            padding: 15,
            backgroundColor: 'white',
            borderBottomWidth: 1, borderBottomColor: '#CECECE',
        }}>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{
                    fontFamily: getFontFamily("400"),
                    fontSize: 14,
                    color: '#333',
                    lineHeight: 20,
                }}>
                    Sistema de Notificação Elêtronica - SNE
                </Text>
                <FontAwesome6 name="chevron-right" size={10} color={Colors.icons_blue}  />
            </Row>
        </View>
    </MainContainer>
  </>;
}

export default TSettings;