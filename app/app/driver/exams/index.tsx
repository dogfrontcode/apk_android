import Header from '@/components/Organisms/HeaderInternal';
import { InfoContainer, InfoTitle, InfoValue } from '@/components/Templates/app/driver/TDriver/style';
import { MainContainer } from '@/components/Templates/app/TMenuScreen/styles';
import { Colors } from '@/constants/Colors';
import React from 'react';

// import { Container } from './styles';

const courses: React.FC = () => {
  return <>
    <Header title="Exames Toxicológicos" />
    <MainContainer>
    <InfoContainer>
        <InfoTitle>Informações sobre Exames Toxicológicos</InfoTitle>

        <InfoTitle style={{
            borderBottomWidth: 0,
            fontSize: 12,
            marginTop: 10,
        }}>
            Prazo para realização de novo exame
        </InfoTitle>
        <InfoValue style={{
            fontSize: 12,
        }}>
            Não se aplica à categoria da sua CNH.
        </InfoValue>
        <InfoTitle style={{
            borderBottomWidth: 0,
            fontSize: 12,
            marginTop: 10,
        }}>
            Amostra para novo exame coletada em:
        </InfoTitle>
        <InfoValue style={{
            fontSize: 12,
        }}>
            Não se aplica à categoria da sua CNH:
        </InfoValue>
                <InfoTitle style={{
            borderBottomWidth: 0,
            fontSize: 12,
            marginTop: 10,
        }}>
            Laboratórios credenciados pela Senatram:
        </InfoTitle>
        <InfoValue style={{
            fontSize: 12,
            color: Colors.govBtn,
            textDecorationLine: 'underline',
        }}>
            Link para acesso
        </InfoValue>
        <InfoTitle style={{
            borderBottomWidth: 0,
            fontSize: 12,
            marginTop: 10,
        }}>
            Observações:
        </InfoTitle>
        <InfoValue style={{
            fontSize: 12,
        }}>
            Sem observações
        </InfoValue>
    </InfoContainer>
    </MainContainer>
  </>;
}

export default courses;