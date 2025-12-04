import { getFontFamily } from "@/hooks/useFonts";
import styled from "styled-components/native";

export const FilterSubtitle = styled.View`
    width: 100%;
    background-color: #23447A;
    padding: 10px;
    margin-top: 10px;
`

export const TextFilterSubtitle = styled.Text`
    color: white;
    font-size: 11px;
    font-family: ${getFontFamily("400")};
    line-height: 20px;
    padding: 0 10px;
    font-weight: 400;
`;