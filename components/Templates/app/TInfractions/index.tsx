import Header from '@/components/Organisms/HeaderInternal';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { Row } from '../../EntryScreen/style';
import { InfractionContent, InfractionsContainer, MainContainer } from './styles';


const TInfractions: React.FC = () => {
    const router = useRouter();
  return <>
    <Header title={"Infrações"} />
    <MainContainer>
        <InfractionsContainer>
            <InfractionContent onPress={() => router.push("/app/infractions/by-infractor")}>
                <Row style={{ gap: 10, alignItems: 'center' }}>
                    <FontAwesome name="address-card" size={24} color={Colors.icons_blue} style={{
                        width: 35
                    }}/>
                    <Text style={{
                        fontFamily: getFontFamily("300"),
                    }}>Por Infrator</Text>
                </Row>
                <FontAwesome6 name="chevron-right" size={10} color={Colors.icons_blue}  />
            </InfractionContent>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'rgba(94, 92, 92, 0.1)',
                marginHorizontal: 20
            }} />
            <InfractionContent onPress={() => router.push("/app/vehicles")}>
                <Row style={{ gap: 10, alignItems: 'center' }}>
                    <FontAwesome5 name="car-alt" size={24} color={Colors.icons_blue} style={{
                        width: 35
                    }}/>
                    <Text style={{
                        fontFamily: getFontFamily("300"),
                    }}>Por Veículo</Text>
                </Row>
                <FontAwesome6 name="chevron-right" size={10} color={Colors.icons_blue}  />
            </InfractionContent>
        </InfractionsContainer>
    </MainContainer>
  </>;
}

export default TInfractions;