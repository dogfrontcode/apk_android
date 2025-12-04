import { getFontFamily } from '@/hooks/useFonts';
import storage from '@/utils/storage';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { IHeaderInternalProps } from './interface';
import { BackIconWrapper, Col, HeaderContainer } from './styles';


const Header: FC<IHeaderInternalProps> = ({
    title,
    subtitle,
    HeaderRight
}) => {
    const router = useRouter();
    const [userName, setUserName] = React.useState<string | null>(null);

    const setup = async () => {
        const storedUserName = await storage.getItem('user_data');
        const full_name = JSON.parse(storedUserName as any).dados_pessoais?.nome_completo;
        const first_name = full_name?.split(' ')[0];
        setUserName(first_name || null);
    }


    useEffect(() => {setup()}, []);
  return <HeaderContainer>
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <BackIconWrapper onPress={() => {
                router.back();
            }}>
                <Feather name="chevron-left" size={24} color="white" />
            </BackIconWrapper>
            <Col>
                {title && <Text style={{
                    fontSize: 14,
                    color: 'white',
                    fontFamily: getFontFamily("500"),
                    lineHeight: 20,
                }}>{title.toUpperCase()}</Text>}
                {subtitle && <Text style={{
                    fontSize: 10,
                    color: 'gray',
                    fontFamily: getFontFamily("500"),
                    lineHeight: 10,
                }}>{subtitle}</Text>}
            </Col>
        </View>

        {(!!HeaderRight) && <View style={{ marginLeft: 'auto' }}>
            {HeaderRight}
        </View>}
    </View>
    </HeaderContainer>;
}

export default Header;