import storage from "@/utils/storage";
import React, { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";

// import { Container } from './styles';

interface DocumentProps {}

const Document: React.FC<DocumentProps> & {
  Front: React.FC;
  Back: React.FC;
  Sign: React.FC;
  QRcode: React.FC;
} = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Document Component</Text>
    </View>
  );
};

Document.Front = () => {
  const { width } = Dimensions.get("window");
  // Imagem original: 673x496 (proporção 1.357:1)
  // Como a imagem está rotacionada 90°, a proporção fica 496:673 = 0.737
  const cnh_height = 800; // Altura proporcional baseada nas dimensões reais

  const [photo_base64, setPhotoBase64] = React.useState<string | null>(null);

  useEffect(() => {
    (async () => {
        const photo = await storage.getItem("cnh_front");
        setPhotoBase64(photo);
    })();
  }, []);

  return (
    photo_base64 ? <Image
      source={{ uri: photo_base64 ?? ""}}
      style={{
        width: width * 1.4,
        height: width,
        transform: [{ rotate: "90deg" }],
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
      }}
      resizeMode="contain"
    /> : <Text>NO IMAGE</Text>
  );
};
Document.Back = () => {
  const { width } = Dimensions.get("window");
  // Imagem original: 673x496 (proporção 1.357:1)
  // Como a imagem está rotacionada 90°, a proporção fica 496:673 = 0.737
  const cnh_height = 800; // Altura proporcional baseada nas dimensões reais

  const [photo_base64, setPhotoBase64] = React.useState<string | null>(null);

  useEffect(() => {
    (async () => {
        const photo = await storage.getItem("cnh_back");
        setPhotoBase64(photo);
    })();
  }, []);

  return (
    photo_base64 ? <Image
      source={{ uri: photo_base64 ?? ""}}
      style={{
        width: width * 1.4,
        height: width,
        transform: [{ rotate: "90deg" }],
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
      }}
      resizeMode="contain"
    /> : <Text>NO IMAGE</Text>
  );
};

Document.Sign = () => {
  const { width } = Dimensions.get("window");
  const [photo_base64, setPhotoBase64] = React.useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const photo = await storage.getItem("cnh_sign");
      setPhotoBase64(photo);
    })();
  }, []);

  return (
    photo_base64 ? <Image
      source={{ uri: photo_base64 ?? ""}}
      style={{
        width: width * 1.4,
        height: width,
        transform: [{ rotate: "90deg" }],
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 999
      }}
      resizeMode="contain"
    /> : <Text>NO IMAGE</Text>
  );
};

Document.QRcode = () => {
  const { width } = Dimensions.get("window");
  const [photo_base64, setPhotoBase64] = React.useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const photo = await storage.getItem("cnh_qr");
      setPhotoBase64(photo);
    })();
  }, []);

  return (
    photo_base64 ? <Image
      source={{ uri: photo_base64 ?? ""}}
      style={{
        width: width * 1,
        height: width,
        transform: [{ rotate: "180deg" }],
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: -1
      }}
      resizeMode="contain"
    /> : <Text>NO IMAGE</Text>
  );
};

export default Document;
