import Header from '@/components/Organisms/HeaderInternal';
import { InfoContainer, InfoTitle } from '@/components/Templates/app/driver/TDriver/style';
import { MainContainer } from '@/components/Templates/app/TMenuScreen/styles';
import React from 'react';

// import { Container } from './styles';

const courses: React.FC = () => {
  return <>
    <Header title="Cursos Especializados" />
    <MainContainer>
    <InfoContainer>
        <InfoTitle>Informações sobre Cursos Especializados</InfoTitle>

        <InfoTitle style={{
            borderBottomWidth: 0,
            fontSize: 12,
            marginTop: 10,
        }}>
            O condutor não possui registro{'\n'}de informações sobre a realização{'\n'}de cursos especializados.
        </InfoTitle>

    </InfoContainer>
    </MainContainer>
  </>;
}

export default courses;