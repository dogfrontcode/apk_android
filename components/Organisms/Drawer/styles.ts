import styled from "styled-components/native";

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: black;
  margin: 10px 0;
`;

interface ISectionContainerProps {
  col?: boolean;
}

export const SectionContainer = styled.Pressable<ISectionContainerProps>`
  padding: 15px 10px;
  background-color: white;
    flex-direction: ${props => props.col ? 'column' : 'row'};
    align-items: ${props => props.col ? 'flex-start' : 'center'};
`;
