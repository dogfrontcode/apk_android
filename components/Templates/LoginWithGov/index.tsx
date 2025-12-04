import GovCpfSection from "@/components/Organisms/gov/GovCpfSection";
import GovNavbar from "@/components/Organisms/gov/GovNavbar";
import { GovContainer } from "@/components/Organisms/gov/GovNavbar/styles";
import GovPasswordSection from "@/components/Organisms/gov/GovPasswordSection";
import { Api } from "@/utils/api";
import storage from '@/utils/storage';
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Container } from './styles';

const LoginWithGov: React.FC = () => {
  const [form, setForm] = useState({
    cpf: "",
    password: "",
  });

  const [formStep, setFormStep] = useState("cpf");

    const submitForm = async () => {
        try {
            const {data} = await Api.post("/cnh/consultar/login", {
                cpf: form.cpf,
                senha: form.password,
            });
            await storage.setItem('user_data', data.cnh);

            router.push("/app/menu");
        } catch (error) {
            // Handle error appropriately, e.g., show a message to the user
        }
    };

  const handleLogin = (submit: boolean) => {
    if (formStep === "cpf") {
        setFormStep("password");
        return;
    }
    if (formStep === "password" && submit) {
        submitForm();
        return;
    }
    setFormStep("cpf");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <GovNavbar />
      <GovContainer
        style={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          elevation: 4,
        }}
      >
        {formStep === "cpf" && (
          <GovCpfSection formState={[form, setForm]} onSubmit={handleLogin} />
        )}
        {formStep === "password" && (
          <GovPasswordSection formState={[form, setForm]} onSubmit={handleLogin} />
        )}
      </GovContainer>
      <View style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default LoginWithGov;
