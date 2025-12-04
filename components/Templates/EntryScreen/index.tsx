import { Link, router } from "expo-router";
import React, { Fragment } from "react";
import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
    BackgroundImage,
    Container,
    GovButton,
    Row,
    WelcomeBodyText,
    WelcomeBox,
    WelcomeContainer,
    WelcomeTitle,
} from "./style";


const EntryScreen: React.FC = () => {

    const insets = useSafeAreaInsets();

  return (
    <Fragment>
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(0, 0, 0)" }} edges={["bottom"]}>
        <Container>
          <BackgroundImage
            source={require("@/assets/images/images_cdt/login_background.jpg")}
          />
        <View style={{  backgroundColor: "rgba(0, 0, 0, 0.3)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: insets.top,
            opacity: 0.5,
            zIndex: 99
        }} />
          <WelcomeBox
            style={{
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
            }}
          >
            <WelcomeContainer>
              <Row>
                <WelcomeTitle>Bem-vindo à </WelcomeTitle>
                <WelcomeTitle isBold="900">CDT</WelcomeTitle>
              </Row>
              <WelcomeTitle size="24px" isBold="300">
                Carteira Digital de Trânsito
              </WelcomeTitle>
              <WelcomeBodyText>
                Ao entrar você concorda com nosso{" \n"}
                <Link
                  href="/terms"
                  numberOfLines={1}
                  style={{
                    color: "#1351b4",
                    textDecorationLine: "underline",
                  }}
                >
                  Termo de Responsabilidade
                </Link>
                {" e \n"}
                <Link
                  href="/terms"
                  numberOfLines={1}
                  style={{
                    color: "#1351b4",
                    textDecorationLine: "underline",
                  }}
                >
                  Política de Privacidade
                </Link>
              </WelcomeBodyText>

              <GovButton onPress={() => {
                router.push("/login/gov");
              }}>
                  <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" , fontSize: 16}}>ENTRAR COM </Text>
                  <Text style={{ color: "#fff", fontFamily: "Poppins-Bold", fontSize: 16 }}>
                    gov.br
                  </Text>
              </GovButton>
            </WelcomeContainer>
          </WelcomeBox>
        </Container>
        </SafeAreaView>
    </Fragment>
  );
};

export default EntryScreen;
