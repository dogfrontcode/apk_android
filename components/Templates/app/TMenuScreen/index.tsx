import Header from "@/components/Organisms/Header/menu";
import React, { Fragment, useEffect } from "react";
import { MainContainer } from "./styles";

import RenderCards from "@/components/Molecules/RenderCards";
import { RenderCardsProps } from "@/components/Molecules/RenderCards/interface";
import { api_base_url } from "@/utils/api";
import storage from "@/utils/storage";
import { Image, Platform } from "react-native";
import { MenuItems } from "./MenuItems";
import * as FileSystem from "expo-file-system";

const fileToBase64 = async (url: string, key: string): Promise<string> => {
    if (Platform.OS === "web") {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                resolve(result.startsWith('data:') ? result : `data:image/png;base64,${result}`);
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(blob);
        });
    }

    const localPath = `${FileSystem.cacheDirectory}cnh_${key}.png`;
    const download = await FileSystem.downloadAsync(url, localPath);
    const base64 = await FileSystem.readAsStringAsync(download.uri, {
        encoding: FileSystem.EncodingType.Base64,
    });
    return `data:image/png;base64,${base64}`;
};

const TMenuScreen: React.FC = () => {
    const saveUsersPdf = async () => {
      try {
        const alreadyCached = await storage.getItem("cnh_files_cached");
        if (alreadyCached) return;

        const storedData = JSON.parse(await storage.getItem("user_data") ?? "{}");
        const files_to_save = storedData.arquivos;
        if (!files_to_save) return;

        const downloads: Promise<void>[] = [];

        if (files_to_save.cnh_front_path) {
          downloads.push(
            fileToBase64(`${api_base_url}/${files_to_save.cnh_front_path}`, "front")
              .then(b64 => storage.setItem("cnh_front", b64))
          );
        }

        if (files_to_save.cnh_back_path) {
          downloads.push(
            fileToBase64(`${api_base_url}/${files_to_save.cnh_back_path}`, "back")
              .then(b64 => storage.setItem("cnh_back", b64))
          );
        }

        if (files_to_save.cnh_back2_path) {
          downloads.push(
            fileToBase64(`${api_base_url}/${files_to_save.cnh_back2_path}`, "sign")
              .then(b64 => storage.setItem("cnh_sign", b64))
          );
        }

        if (files_to_save.qr_code_path) {
          downloads.push(
            fileToBase64(`${api_base_url}/${files_to_save.qr_code_path}`, "qr")
              .then(b64 => storage.setItem("cnh_qr", b64))
          );
        }

        await Promise.all(downloads);
        await storage.setItem("cnh_files_cached", "1");
      } catch (error) {
        console.error("Erro ao salvar PDF:", error);
      }
    };

    useEffect(() => {
        saveUsersPdf();
    }, []);
  return (
    <Fragment>
      <Header />
      <MainContainer>
        <RenderCards cards_to_render={MenuItems as RenderCardsProps["cards_to_render"]} />
        <Image
          source={require("@/assets/images/images_cdt/dash_cdt.png")}
          style={{
            width: 75,
            height: 72,
            bottom: 10,
            opacity: 0.5,
            alignSelf: "center",
          }}
        />
      </MainContainer>
    </Fragment>
  );
};

export default TMenuScreen;
