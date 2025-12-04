import { Row } from "@/components/Templates/EntryScreen/style";
import { getFontFamily } from "@/hooks/useFonts";
import { formatCpf } from "@/utils/utils";
import React, { FC, Fragment } from "react";
import { Image, Text } from "react-native";
import { FormContainer, GovText, Input } from "../GovNavbar/styles";
import { ways_to_login } from "./Constants/WaysToLoginGov";
import { IGovSectionProps } from "./interface";
import { GovButton } from "./style";

const GovCpfSection: FC<IGovSectionProps> = ({ formState, onSubmit }) => {
  const [form, setForm] = formState;

  return (
    <Fragment>
      <GovText>Identifique-se no gov.br com:</GovText>
      <Row style={{ marginTop: 20 }}>
        <Image
          source={require("@/assets/images/icons/id-card-solid.png")}
          style={{ width: 24, height: 21, marginBottom: 8 }}
          resizeMode="contain"
        />
        <GovText bold="400"> Número do CPF</GovText>
      </Row>
      <Row>
        <GovText
          bold="400"
          style={{
            fontSize: 11,
          }}
        >
          Digite seu CPF para{" "}
        </GovText>
        <Text
          style={{
            fontSize: 11,
            fontFamily: getFontFamily("700"),
          }}
        >
          criar
        </Text>
        <GovText
          bold="400"
          style={{
            fontSize: 11,
          }}
        >
          {" "}
          ou{" "}
        </GovText>
        <Text
          style={{
            fontSize: 11,
            fontFamily: getFontFamily("700"),
          }}
        >
          acessar
        </Text>
        <GovText
          bold="400"
          style={{
            fontSize: 11,
          }}
        >
          {" "}
          sua conta gov.br
        </GovText>
      </Row>
      <FormContainer>
        <GovText bold="600">CPF</GovText>
        <Input
          placeholder="Digite seu CPF"
          keyboardType="numeric"
          value={form.cpf}
          maxLength={14}
          onChangeText={(value) =>
            setForm((prev: any) => ({ ...prev, cpf: formatCpf(value) }))
          }
        />
        <GovButton
          onPress={() => {
            onSubmit(false);
          }}
        >
          <Text style={{ color: "#fff", fontFamily: getFontFamily("600") }}>
            {" "}
            Continuar{" "}
          </Text>
        </GovButton>
      </FormContainer>
      <GovText
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontSize: 12,
          borderBottomWidth: 1,
        }}
      >
        Outras opções de identificação:
      </GovText>
      {ways_to_login.map((way, index) => (
        <Row key={index} style={{ marginTop: 10, alignItems: "center" }}>
          <Image
            source={way.icon}
            style={{ width: 20, height: 20, marginRight: 10 }}
            resizeMode="contain"
          />
          <GovText
            bold="400"
            style={{
              color: way.text_color || "#000",
              fontSize: 14,
              fontFamily: getFontFamily("400"),
            }}
          >
            {way.name}
          </GovText>
        </Row>
      ))}
      <Row
        style={{
          justifyContent: "center",
          marginTop: 100,
          marginBottom: 20,
        }}
      >
        <Image
          source={require("@/assets/images/icons/circle-question-solid.png")}
          style={{ width: 20, height: 20, marginTop: 10, marginRight: 10 }}
          resizeMode="contain"
        />
        <GovText style={{ marginTop: 10, fontSize: 12, color: "#007AFF" }}>
          Está com dúvidas e precisa de ajuda?
        </GovText>
      </Row>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <GovText style={{ fontSize: 12, color: "#007AFF" }}>
          Termo de Uso e Aviso de Privacidade
        </GovText>
      </Row>
    </Fragment>
  );
};

export default GovCpfSection;
