import Header from "@/components/Organisms/HeaderInternal";
import { Colors } from "@/constants/Colors";
import { getFontFamily } from "@/hooks/useFonts";
import storage from "@/utils/storage";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MainContainer } from "../../TMenuScreen/styles";
import {
    Card,
    CardsContainer,
    CardText,
    InfoContainer,
    InfoContent,
    InfoLabel,
    InfoRow,
    InfoTitle,
    InfoValue,
} from "./style";

const TPositiveSign: React.FC = () => {
  const router = useRouter();

  const [driverInfo, setDriverInfo] = useState({
    name: "",
    cpf: "",
    gender: "",
    state: "",
    validityDate: "",
    emissionDate: "",
    licenseCategory: "",
  });

  useEffect(() => {
    const fetchDriverInfo = async () => {
      const storedData = await storage.getItem("user_data");
      const user_data = JSON.parse(storedData);
      const user_personal_data = user_data.dados_pessoais;
      const user_license_data = user_data.habilitacao;

      if (storedData) {
        setDriverInfo({
          name: user_personal_data.nome_completo || "",
          cpf: user_personal_data.cpf || "",
          gender: user_personal_data.sexo === "M" ? "MASCULINO" : "FEMININO",
          state: user_license_data.local_uf || "",
          licenseCategory: user_license_data.categoria || "",
          validityDate: user_license_data.validade || "",
          emissionDate: user_license_data.data_emissao || "",
        });
      }
    };
    fetchDriverInfo();
  }, []);

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
      <Header title="Cadastro Positivo" subtitle="Informações" />
      <MainContainer>
        {/* Driver Information Section */}
        <InfoContainer>
          <InfoTitle>Informações do Cadastro positivo</InfoTitle>
          <InfoContent>
            <InfoRow style={{ width: "100%", marginBottom: 10 }}>
              <View>
                <InfoLabel>Autorizado em</InfoLabel>
                <InfoValue>{formattedTodayDate}</InfoValue>
              </View>
            </InfoRow>
            <InfoRow>
              <View>
                <InfoLabel>Situação</InfoLabel>
                <InfoValue>Ativo</InfoValue>
              </View>
              <View>
                <InfoLabel>Canal</InfoLabel>
                <InfoValue>CDT</InfoValue>
              </View>
            </InfoRow>
            <InfoRow>
              <View>
                <InfoLabel>Canal</InfoLabel>
                <InfoValue>CDT</InfoValue>
              </View>
            </InfoRow>
          </InfoContent>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#eee",
              marginVertical: 10,
            }}
          />
        <View style={{
            gap: 20,
            padding: 20
        }}>
          <InfoValue
            style={{
              fontSize: 12,
              color: "#354C75",
              textAlign: "center",
              textDecorationLine: "underline",
              fontFamily: getFontFamily("500"),
            }}
          >
            Oque é o Cadastro Positivo de Condutores?
          </InfoValue>
          <InfoValue
            style={{
              fontSize: 12,
              color: "#354C75",
              textAlign: "center",
              textDecorationLine: "underline",
              fontFamily: getFontFamily("500"),
            }}
          >
            Termo de autorização
          </InfoValue>
          </View>
        </InfoContainer>

        {/* Action Cards Section */}
        <CardsContainer>
          <Card
            onPress={() => {}}
            style={styles.cardShadow}
          >
            <FontAwesome6 name="gift" size={20} color={Colors.primary} />
            <CardText>Parceiros do bom condutor</CardText>
          </Card>
          <Card
            onPress={() => {}}
            style={styles.cardShadow}
          >
            <FontAwesome6 name="file-export" size={20} color={Colors.primary} />
            <CardText>Excluir Autorização</CardText>
          </Card>
          <Card
            onPress={() => {}}
            style={styles.cardShadow}
          >
            <FontAwesome5 name="history" size={20} color={Colors.primary} />
            <CardText>Histórico</CardText>
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

export default TPositiveSign;
