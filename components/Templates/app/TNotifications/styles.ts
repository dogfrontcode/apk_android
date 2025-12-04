import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LeftButton = styled.TouchableOpacity`
    padding: 10px 40px;
    background-color: ${Colors.primary};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const RightButton = styled.TouchableOpacity`
    padding: 10px 40px;
    background-color: #9E9E9E;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const NotificationContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #E7E7E7;
`;