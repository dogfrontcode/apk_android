import { getFontFamily } from "@/hooks/useFonts";
import styled from "styled-components/native";

interface IGovTextProps {
  bold?: string;
}

export const NavBarContainer = styled.View`
  height: 60px;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px #00000029;
  padding: 0 11px;
  padding-right: 20px;
`;

export const AccessibilitySection = styled.View`
  flex-direction: row;
  gap: 22px;
  align-items: center;
`;

export const GovContainer = styled.View`
  background-color: white;
  width: 320px;
  margin: 20px 0;
  padding: 20px 10px;
`;

export const GovText = styled.Text<IGovTextProps>`
  font-size: 15px;
  color: #000;
  font-family: ${({ bold }) => getFontFamily(bold ? bold : "600")};
`;

export const FormContainer = styled.View`
    margin-top: 10px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #888888;
  border-radius: 4px;
  padding: 0 20px;
  font-size: 14px;
  color: #333;
`;
