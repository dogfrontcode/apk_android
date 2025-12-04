import { Colors } from "@/constants/Colors";
import { getFontFamily } from "@/hooks/useFonts";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface WelcomeTitleProps {
  size?: string;
  isBold?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  flex: 0.54;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
`;

export const WelcomeTitle = styled.Text<WelcomeTitleProps>`
  font-size: ${({ size }) => (size ? `${size}` : "32px")};
  font-weight: ${({ isBold }) => (isBold ? isBold as unknown as "bold" : "normal")};
  font-family: ${({ isBold }) => getFontFamily(isBold ?? "400")};
  color: ${Colors.primary};
  margin-bottom: -10px;
`;

export const WelcomeBodyText = styled.Text`
  font-size: 18px;
  font-family: Poppins-Regular;
  color: #11181c;
  margin: 40px 0;
`;

export const WelcomeBox = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  min-height: ${Dimensions.get("window").height * 0.52}px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
`;

export const WelcomeContainer = styled.View`
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  font-family: Poppins-Bold;
  color: #11181c;
  text-align: center;
`;

export const GovButton = styled.Pressable`
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${Colors.govBtn};
  border-radius: 20px;
  margin: 0 10px;
`;
