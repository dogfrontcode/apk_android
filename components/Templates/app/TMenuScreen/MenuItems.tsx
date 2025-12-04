import { getFontFamily } from "@/hooks/useFonts";
import { B } from "@/utils/dom_utils";
import { Text } from "react-native";

export const MenuItems = [
    {
        title: "Condutor",
        subtitle: <>
            <Text>Gerencie sua {'\n'}<B>habilitação</B></Text>
        </>,
        icon: require("@/assets/images/images_cdt/icon_condutor.png"),
        back_image: require("@/assets/images/images_cdt/dash_condutor.png"),
        card_color: "#00A85A",
        card_text_color: "#FFFFFF",
        href: "/app/driver",
    },
    {
        title: "Veículos",
        subtitle: <>
            <Text style={{
                fontSize: 12,
                fontFamily: getFontFamily("300"),
            }}>Acesso ao <B>CRLV-e</B>, {'\n'}Venda digital</Text>
        </>,
        icon: require("@/assets/images/images_cdt/icon_veiculos.png"),
        back_image: require("@/assets/images/images_cdt/dash_veiculos.png"),
        card_color: "#FFCC2A",
        card_text_color: "#000",
        href: "/app/vehicles",
    },
    {
        title: "Infrações",
        subtitle: <>
            <Text style={{
                fontSize: 12,
                fontFamily: getFontFamily("300"),
            }}>Visualize e pague infrações {'\n'}com até <B>40% de desconto</B></Text>
        </>,
        icon: require("@/assets/images/images_cdt/icon_infracoes.png"),
        back_image: require("@/assets/images/images_cdt/dash_infracoes.png"),
        card_color: '#1A3493',
        card_text_color: "#FFFFFF",
        href: "/app/infractions",
    },
    {
        title: "Educação",
        subtitle: <>
            <Text style={{
                fontSize: 12,
                fontFamily: getFontFamily("300"),
            }}>Conheça nossas {'\n'}<B>Campanhas</B> e <B>Projetos</B></Text>
        </>,
        icon: require("@/assets/images/images_cdt/icon_educacao.png"),
        back_image: require("@/assets/images/images_cdt/dash_educacao.png"),
        card_color: "#64B4EF",
        card_text_color: "#000",
        href: "/app/education",
    },
];