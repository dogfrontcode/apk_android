import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Linking } from "react-native";


export const icon_size = 20;

export const DrawerItems = [
    {
        icon: <FontAwesome name="envelope" size={icon_size} color={Colors.secondary} />,
        label: 'Central de Mensagens',
        screen: '/app/notifications',
    },
    {
        icon: <FontAwesome name="user-secret" size={icon_size} color={Colors.secondary} />,
        label: 'Política de Privacidade',
        screen: '/app/eula/privacy-policy',
    },
    {
        icon: <FontAwesome6 name="id-badge" size={icon_size} color={Colors.secondary} />,
        label: 'Termo de Responsabilidade',
        screen: '/app/eula/terms-responsability',
    },
    {
        icon: <FontAwesome6 name="grin-stars" size={icon_size} color={Colors.secondary} />,
        label: 'Avaliar',
        onPress: () => {
            Linking.openURL(`https://avaliacao.servicos.gov.br/`);
        }
    },
    {
        label: 'divider'
    },
    {
        icon: <FontAwesome name="cog" size={icon_size} color={Colors.secondary} />,
        label: 'Preferências',
        screen: '/app/settings',
    },
    {
        label: 'Tutorial',
        icon: <FontAwesome6 name="book-open" size={icon_size} color={Colors.secondary} />,
        onPress: () => {
            Linking.openURL("https://portalservicos.senatran.serpro.gov.br/static/carteiradigital/tutoriais/html/");
        }
    },
    {
        icon: <FontAwesome name="question-circle" size={icon_size} color={Colors.secondary} />,
        label: 'Assistente Virtual',
        onPress: () => {
            Linking.openURL("https://kloe-widget.proatecnologia.com.br/test/670018097350abdff8b90067");
        }
    },
    {
        icon: <Ionicons name="alert-circle" size={icon_size} color={Colors.secondary} />,
        label: 'Sobre a CDT',
        screen: 'app/about',
    },
    {
        label: 'divider'
    },
    {
        icon: <FontAwesome name="sign-out" size={icon_size} color={Colors.secondary} />,
        label: 'Sair da Conta',
        screen: 'login/out',
    },
]