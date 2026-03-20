import { useFonts as useExpoFonts } from 'expo-font';

export const useFonts = () => {
  const [fontsLoaded] = useExpoFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
  });

  return fontsLoaded;
};

export const getFontFamily = (font_weight: string) => {
    const fontWeights = {
        "300": "Poppins-Light",
        "400": "Poppins-Regular",
        "500": "Poppins-Medium",
        "600": "Poppins-SemiBold",
        "700": "Poppins-Bold",
    };
    return fontWeights[font_weight as keyof typeof fontWeights] || "Poppins-Regular";
}
