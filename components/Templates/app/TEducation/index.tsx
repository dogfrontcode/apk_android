import Header from '@/components/Organisms/HeaderInternal';
import { SearchCard } from '@/components/Organisms/HeaderInternal/styles';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import Fontisto from '@expo/vector-icons/Fontisto';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { MainContainer } from '../TMenuScreen/styles';

// import { Container } from './styles';

const images_uris = [
    require('@/assets/images/education/1.png'),
    require('@/assets/images/education/2.png'),
]

const TEducation: React.FC = () => {
  return <>
    <Header title={"Educação"} subtitle={"Campanhas"} />
    <MainContainer style={{ flex:1 }}>
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
        }}>
            <ScrollView contentContainerStyle={{
                alignItems: 'center',
            }}>
                {images_uris.map((uri, index) => (
                        <Image
                            key={index}
                            source={uri}
                            style={{
                                maxWidth: Dimensions.get('window').width,
                                height: Dimensions.get('window').width * 1.5,
                                marginBottom: 20,
                                resizeMode: 'cover',
                            }}
                            resizeMode='contain'
                        />
                ))}
                </ScrollView>

        </View>
        <SearchCard style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            elevation: 4
        }}>
            <Fontisto name="search" size={24} color={Colors.primary} style={{
                marginRight: 10,
                marginLeft: 5
            }}/>
            <Text style={{
                fontFamily: getFontFamily('400'),
                color: Colors.primary,
                fontSize: 12
            }}>Consultar vínculo do veículo{"\n"}a credencial digital de estacionamento</Text>
        </SearchCard>
    </MainContainer>
  </>;
}

export default TEducation;