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

export const BackIconWrapper = styled.Pressable`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.19);
    justify-content: center;
    align-items: center;
`;

export const Col = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`;

export const SearchCard = styled.View`
    width: 90%;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    box-shadow: 0 3px 6px #00000029;
`;
