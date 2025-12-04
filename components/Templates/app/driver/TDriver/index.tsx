
import Header from "@/components/Organisms/HeaderInternal";
import storage from "@/utils/storage";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MainContainer } from "../../TMenuScreen/styles";
import { Card, CardsContainer, CardText, Icon, InfoContainer, InfoContent, InfoLabel, InfoRow, InfoTitle, InfoValue } from "./style";

const TDriver: React.FC = () => {

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
      const user_personal_data = user_data.controle;

      if (storedData) {
        setDriverInfo({
          name: user_personal_data.nome_completo || "",
          cpf: user_personal_data.cpf || "",
          gender: user_personal_data.sexo === "M" ? "MASCULINO" : "FEMININO",
          state: user_personal_data.local_uf || "",
          licenseCategory: user_personal_data.categoria || "",
          validityDate: user_personal_data.data_expiracao || "",
          emissionDate: user_personal_data.data_criada || "",
        });
      }
    };
    fetchDriverInfo();
  }, []);

  return (
    <>
      <Header title="Condutor" />
      <MainContainer>
        {/* Driver Information Section */}
        <InfoContainer>
          <InfoTitle>Informações do Condutor</InfoTitle>
          <InfoContent>
            <InfoRow style={{ width: "100%", marginBottom: 10 }}>
              <View>
                <InfoLabel>Nome</InfoLabel>
                <InfoValue>{driverInfo.name}</InfoValue>
              </View>
            </InfoRow>
            <InfoRow>
              <View>
                <InfoLabel>CPF</InfoLabel>
                <InfoValue>{driverInfo.cpf}</InfoValue>
              </View>
              <View>
                <InfoLabel>Categoria</InfoLabel>
                <InfoValue>{driverInfo.licenseCategory}</InfoValue>
              </View>
              <View>
                <InfoLabel>Data de Validade</InfoLabel>
                <InfoValue>{driverInfo.validityDate}</InfoValue>
              </View>
            </InfoRow>
            <InfoRow>
              <View>
                <InfoLabel>Sexo</InfoLabel>
                <InfoValue>{driverInfo.gender}</InfoValue>
              </View>
              <View>
                <InfoLabel>UF de Emissão</InfoLabel>
                <InfoValue>{driverInfo.state}</InfoValue>
              </View>
              <View>
                <InfoLabel>Data de Emissão</InfoLabel>
                <InfoValue>{driverInfo.emissionDate}</InfoValue>
              </View>
            </InfoRow>
          </InfoContent>
        </InfoContainer>

        {/* Action Cards Section */}
        <CardsContainer>
          <Card
            onPress={() => router.push("/app/driver/license")}
            style={styles.cardShadow}
          >
            <FontAwesome name="address-card" size={20} color="#112F76" />
            <CardText>HABILITAÇÃO</CardText>
          </Card>
          <Card
            onPress={() => router.push("/app/driver/cadastro-positivo")}
            style={styles.cardShadow}
          >
            <Icon source={require("@/assets/images/images_cdt/icon_cadastro_positivo.png")} />
            <CardText>CADASTRO POSITIVO</CardText>
          </Card>
          <Card
            onPress={() => router.push("/app/driver/exams")}
            style={styles.cardShadow}
          >
            <Icon source={require("@/assets/images/images_cdt/icon_exames_toxicologicos.png")} />
            <CardText>EXAMES TOXICOLÓGICOS</CardText>
          </Card>
          <Card
            onPress={() => router.push("/app/driver/courses")}
            style={styles.cardShadow}
          >
            <Icon source={require("@/assets/images/images_cdt/icon_cursos_especializados.png")} />
            <CardText>CURSOS ESPECIALIZADOS</CardText>
          </Card>
          <Card
            onPress={() => router.push("/app/driver/park-credentials")}
            style={styles.cardShadow}
          >
            <Icon source={require("@/assets/images/images_cdt/icon_credencial.png")} />
            <CardText>CREDENCIAL DE ESTACIONAMENTO</CardText>
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

export default TDriver;
