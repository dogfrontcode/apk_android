import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    height: 70px;
    background-color: ${Colors.primary};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    z-index: 9999;
`;
