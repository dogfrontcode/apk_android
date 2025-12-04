import Header from "@/components/Organisms/HeaderInternal";
import { Colors } from "@/constants/Colors";
import { B } from "@/utils/dom_utils";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MainContainer } from "../../TMenuScreen/styles";
import {
    Card,
    CardsContainer,
    CardText,
    Icon,
    InfoContainer,
    InfoContent,
    InfoRow,
    InfoTitle,
    InfoValue
} from "./style";

const TParkCredentials: React.FC = () => {
    const router = useRouter();
  const todayDate = new Date();
  const formattedTodayDate = todayDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <Header title="Credencial de Estacionamento" />
      <MainContainer>
        <InfoContainer>
          <InfoTitle>Oque é a Credencial de Estacionamento?</InfoTitle>
          <InfoContent>
            <InfoRow style={{ width: "100%", marginBottom: 10 }}>
              <View>
                <InfoValue>A Credencial de Estacionamento é um documento obrigatório para utilizar as vagas de estacionamento destinadas a pessoas idosas ou com deficiência, conforme a Resolução Contran nº 965, de 17 de maio de 2</InfoValue>
              </View>
            </InfoRow>
          </InfoContent>
        </InfoContainer>
            <InfoRow style={{
                width: "100%",
                marginBottom: 10,
                padding: 10,
                paddingHorizontal: 20,

                }}>
                <View>
                    <InfoValue style={{
                        textAlign: 'center'
                    }}><B>ATENÇÃO:</B> Para a utilização desse serviço você deve possuir conta GOV.BR nível prata ou ouro. Para saber mais detalhes sobre os níveis da conta GOV.BR toque aqui</InfoValue>
                </View>
            </InfoRow>

        <CardsContainer>
          <Card
            onPress={() => {}}
            style={styles.cardShadow}
          >
            <FontAwesome6 name="accessible-icon" size={20} color={Colors.primary} />
            <CardText>Credencial de idoso</CardText>
          </Card>
          <Card
            onPress={() => {}}
            style={styles.cardShadow}
          >
            <MaterialIcons name="accessible" size={24} color="black" />
            <CardText>Credencial de pessoa com deficiência</CardText>
          </Card>
          <Card
            onPress={() => {}}
            style={styles.cardShadow}
          >
            <Icon source={require("@/assets/images/images_cdt/icon_credencial.png")} style={{
              width: 20,
              height: 20,
            }} />
            <CardText>Histórico de emissões</CardText>
          </Card>
        </CardsContainer>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default TParkCredentials;
