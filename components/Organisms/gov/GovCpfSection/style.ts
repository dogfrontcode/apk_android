import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const GovButton = styled.Pressable`
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${Colors.govBtn};
  border-radius: 20px;
  margin-top: 20px;
`;

export const GovButtonOutline = styled(GovButton)`
  background-color: transparent;
  border: 1px solid ${Colors.govBtn};
  color: ${Colors.govBtn};
`;
