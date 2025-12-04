import { Row } from '@/components/Templates/EntryScreen/style';
import { Colors } from '@/constants/Colors';
import React, { FC } from 'react';
import { View } from 'react-native';
import { IGovSectionProps } from '../GovCpfSection/interface';
import { GovButton, GovButtonOutline } from '../GovCpfSection/style';
import { GovText, Input } from '../GovNavbar/styles';

// import { Container } from './styles';

const GovPasswordSection: FC<IGovSectionProps> = ({ formState, onSubmit }) => {
    const [form, setFormState] = formState;

  return (
    <View>
        <GovText style={{
            marginBottom: 20
        }}>Digite sua senha</GovText>
        <GovText bold="400">CPF</GovText>
        {form.cpf && (
            <GovText style={{
            marginBottom: 20
        }}>{form.cpf.replace(/\D/g, '')}</GovText>
        )}

        <GovText bold="400">Senha</GovText>
        <Input
            secureTextEntry
            value={form.password}
            onChangeText={(text) => setFormState({ ...form, password: text })}
            placeholder="Digite sua senha"
            style={{ marginBottom: 20 }}
        />

        <Row style={{ justifyContent: "center", gap: 10, paddingHorizontal: 10 }}>
        <GovButtonOutline
            onPress={() => onSubmit(false)}
            style={{ marginTop: 20 }}
        >
            <GovText bold="600" style={{ color: `${Colors.govBtn}` }}>
                Voltar
            </GovText>
        </GovButtonOutline>
        <GovButton
            onPress={() => onSubmit(true)}
            style={{ marginTop: 20 }}
        >
            <GovText bold="600" style={{ color: "#fff" }}>
                Entrar
            </GovText>
        </GovButton>
        </Row>
    </View>
  );
}

export default GovPasswordSection;