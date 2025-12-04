import Header from '@/components/Organisms/HeaderInternal';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Text, View } from 'react-native';
import { ButtonsContainer, LeftButton, NotificationContainer, RightButton } from './styles';

// import { Container } from './styles';

const TNotifications: React.FC = () => {
  return <>
    <Header title={"Central de Mensagens"} />
    <View style={{
        marginTop: 70,
        flex: 1,
    }}>
        <NotificationContainer>
            <FontAwesome name="envelope" size={30} color={Colors.icons_blue} />
            <View style={{
                marginLeft: 20,
                alignSelf: 'flex-start',
                flex: 1,
            }}>
                <Text style={{
                    fontFamily: getFontFamily("700"),
                    fontSize: 14,
                    color: Colors.secondary,
                }}>Aviso de inativação do Cadastro Positivo</Text>
                <Text style={{
                    fontFamily: getFontFamily("300"),
                    fontSize: 12,
                    color: Colors.secondary,
                }}>{new Date().toLocaleDateString().padStart(10, '0')}</Text>
            </View>
            <FontAwesome6 name="chevron-right" size={15} color={Colors.icons_blue}  />
        </NotificationContainer>
    </View>
    <ButtonsContainer>
      <LeftButton>
        <Text style={{
            color: 'white',
            fontFamily: getFontFamily("500"),
        }}>Ver todas (1)</Text>
      </LeftButton>
      <RightButton>
        <Text style={{
            fontFamily: getFontFamily("500"),
         }}>Não lidas (0)</Text>
      </RightButton>
    </ButtonsContainer>

  </>;
}

export default TNotifications;