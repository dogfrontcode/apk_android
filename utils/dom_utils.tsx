import { getFontFamily } from "@/hooks/useFonts";
import { Text } from "react-native";

export const B = ({ children }: any) => <Text style={{fontWeight: 'bold', fontFamily: getFontFamily("500")}}>{children}</Text>