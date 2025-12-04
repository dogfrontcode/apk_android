import Carousel from "@/components/Organisms/Carousel";
import Header from "@/components/Organisms/HeaderInternal";
import { Colors } from "@/constants/Colors";
import { getFontFamily } from "@/hooks/useFonts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { MainContainer } from "../../TVehicles/styles";
import { Card, CardsContainer, CardText } from "../TParkCredentials/style";

// import { Container } from './styles';

const TLicense: React.FC = () => {
  const today = new Date();
  const formattedToday = today.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  const displayDate = formattedToday.replace(" ", " - ");

  return (
    <>
      <Header title="Habilitação" subtitle={`Atualizado em: ${displayDate}`} />
      <MainContainer>
    <ScrollView style={{ marginTop: 15  }} contentContainerStyle={{ alignItems: "center" }}>
        <Text style={{ fontSize: 10, marginBottom: -20, fontFamily: getFontFamily("400") }}>
          Verifique autenticidade do QR Code com o app{' '}
          <Text style={{
            fontWeight: "bold",
            color: '#6194B7',
            textDecorationLine: "underline",
            fontFamily: getFontFamily("400"),
            }}>Vio</Text>
        </Text>
        <Carousel />
        <CardsContainer>
          <Card onPress={() => {}} style={styles.cardShadow}>
            <FontAwesome name="address-card" size={20} color={Colors.primary} />
            <CardText>Histórico de emissões da CNH</CardText>
          </Card>
          <Card onPress={() => {}} style={styles.cardShadow}>
            <FontAwesome6 name="file-export" size={20} color={Colors.primary} />
            <CardText>Exportar</CardText>
          </Card>
          <Card onPress={() => {}} style={styles.cardShadow}>
            <FontAwesome6 name="trash" size={20} color={Colors.primary} />
            <CardText>Remover</CardText>
          </Card>
          <Card onPress={() => {}} style={styles.cardShadow}>
            <FontAwesome6 name="copy" size={20} color={Colors.primary} />
            <CardText>Copiar QR Code</CardText>
          </Card>
        </CardsContainer>
    </ScrollView>
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

export default TLicense;
