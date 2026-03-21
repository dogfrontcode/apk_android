import GovCpfSection from "@/components/Organisms/gov/GovCpfSection";
import GovNavbar from "@/components/Organisms/gov/GovNavbar";
import { GovContainer } from "@/components/Organisms/gov/GovNavbar/styles";
import GovPasswordSection from "@/components/Organisms/gov/GovPasswordSection";
import { Api } from "@/utils/api";
import storage from '@/utils/storage';
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Alert, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Container } from './styles';

const LoginWithGov: React.FC = () => {
  const [form, setForm] = useState({
    cpf: "",
    password: "",
  });

  const [formStep, setFormStep] = useState("cpf");
  const [errorMessage, setErrorMessage] = useState("");

    const submitForm = async () => {
        try {
            const {data} = await Api.post("/cnh/consultar/login", {
                cpf: form.cpf,
                senha: form.password,
            });
            await Promise.all([
                storage.setItem('user_data', JSON.stringify(data.cnh)),
                storage.removeItem('cnh_files_cached'),
                storage.removeItem('cnh_front'),
                storage.removeItem('cnh_back'),
                storage.removeItem('cnh_sign'),
                storage.removeItem('cnh_qr'),
            ]);

            router.push("/app/menu");
        } catch (error: any) {
            console.error(error);
            const showAlert = (title: string, message: string) => {
                if (Platform.OS === 'web') {
                    window.alert(`${title}\n\n${message}`);
                } else {
                    Alert.alert(title, message);
                }
            };

            if (error.response?.data?.expired === true) {
                setErrorMessage("CNH expirada, necessário atualização");
            } else {
                showAlert(
                    "Erro no Login",
                    error.response?.data?.message || "Ocorreu um erro ao tentar fazer login. Verifique seus dados."
                );
            }
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
          <GovPasswordSection formState={[form, setForm]} onSubmit={handleLogin} errorMessage={errorMessage} />
        )}
      </GovContainer>
      <View style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default LoginWithGov;
