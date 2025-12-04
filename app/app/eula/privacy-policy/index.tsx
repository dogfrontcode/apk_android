import Header from '@/components/Organisms/HeaderInternal';
import { MainContainer } from '@/components/Templates/app/TMenuScreen/styles';
import { Title } from '@/components/Templates/app/TTems';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import { Container } from './styles';

const PrivacyPolicySection: React.FC<{
    title: string;
    text: string;
}> = ({
    title,
    text,
}) => {
    return <>
        <Title style={{ marginTop: 20, marginBottom: 5, lineHeight: 20, }}>{title}</Title>
        <Text style={{
            fontFamily: getFontFamily("500"),
            fontSize: 13,
            color: Colors.secondary,
            lineHeight: 20,
        }}>
            {text}
        </Text>

    </>
}

const PrivacyPolicy: React.FC = () => {
  return <>
    <Header title="Política de Privacidade" />
    <MainContainer>
            <ScrollView style={{
                marginTop: 30,
                width: '92%',
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 10,
            }}>
                <Title style={{ marginBottom: 10, textAlign: 'center' }}>Política de Privacidade</Title>
                <Text style={{
                    fontFamily: getFontFamily("500"),
                    fontSize: 13,
                    color: Colors.secondary,
                    lineHeight: 20,
                }}>
                    Declaro, para os devidos fins e efeitos legais, serem pessoais e verdadeiras as informações inseridas no cadastro da Senatran, sobre as quais assumo todas as responsabilidades, sob pena de incorrer nas sanções previstas nos artigos 299 e 307 do Código Penal (falsidade ideológica e falsa identidade)
                </Text>

                <PrivacyPolicySection
                    title="Considerações Iniciais"
                    text="Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nossos serviços."
                />
                <PrivacyPolicySection
                    title="Coleta de Informações"
                    text="Coletamos informações pessoais, como nome, e-mail e dados de contato, quando você se cadastra em nossos serviços. Também podemos coletar informações sobre seu dispositivo e uso dos serviços."
                />
                <PrivacyPolicySection
                    title="Uso de Informações"
                    text="Utilizamos suas informações para fornecer, manter e melhorar nossos serviços, personalizar sua experiência e comunicar novidades e atualizações."
                />

                <PrivacyPolicySection
                    title="Compartilhamento de Informações"
                    text="Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei."
                />

                <PrivacyPolicySection
                    title="Segurança"
                    text="Adotamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação."
                />

                <PrivacyPolicySection
                    title="Seus Direitos"
                    text="Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco."
                />
                <PrivacyPolicySection
                    title="Alterações na Política"
                    text="Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas."
                />

            </ScrollView>
        </MainContainer>
  </>;
}

export default PrivacyPolicy;