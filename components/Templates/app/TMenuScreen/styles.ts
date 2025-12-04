import styled from "styled-components/native";

export const MainContainer = styled.View`
    flex: 1;
    background-color: #F7F7F7;
    align-items: center;
    margin-top: 60px;
`;

export const CardsSection = styled.View`
    flex: 1;
    width: 100%;
    padding: 20px 0;
    margin: 10px;
    align-items: center;
    gap: 20px;
`;

interface MainCardProps {
    color: string;
}
export const MainCards = styled.Pressable<MainCardProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    background-color: ${({ color }) => color};
    height: 100px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;
