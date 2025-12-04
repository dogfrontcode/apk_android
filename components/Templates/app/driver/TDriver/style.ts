import { Colors } from "@/constants/Colors";
import { getFontFamily } from "@/hooks/useFonts";
import styled from "styled-components/native";

export const Icon = styled.Image.attrs({
    resizeMode: "contain",
    })`
  width: 24px;
  height: 24px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const InfoContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  flex: 1;
  padding: 10px 20px 0 20px;
  margin: 30px 0 20px 0;
  width: 95%;
`;

export const InfoContent = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  font-family: ${getFontFamily("700")};
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding: 5px 0;
  color: #323232;
`;

export const InfoRow = styled.View`
  width: 50%;
  gap: 10px;
`;

export const InfoLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-family: ${getFontFamily("600")};
  color: #323232;
`;

export const InfoValue = styled.Text`
  font-size: 14px;
  font-family: ${getFontFamily("300")};
  color: #323232;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
  padding-bottom: 30px;
`;

export const Card = styled.Pressable`
  background-color: white;
  border-radius: 10px;
  width: 48%;
  padding: 30px 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  color: ${Colors.primary};
  font-family: ${getFontFamily("400")};
`;
