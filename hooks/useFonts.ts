import { useFonts as useExpoFonts } from 'expo-font';

export const useFonts = () => {
  const [fontsLoaded] = useExpoFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-Black': require('@/assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins-Italic': require('@/assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-BoldItalic': require('@/assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'Poppins-SemiBoldItalic': require('@/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
    'Poppins-MediumItalic': require('@/assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    'Poppins-LightItalic': require('@/assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    'Poppins-ExtraLightItalic': require('@/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf'),
    'Poppins-ThinItalic': require('@/assets/fonts/Poppins/Poppins-ThinItalic.ttf'),
    'Poppins-BlackItalic': require('@/assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
    'Poppins-ExtraBoldItalic': require('@/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
  });

  return fontsLoaded;
};

export const getFontFamily = (font_weight: string) => {
    const fontWeights = {
        "100": "Poppins-Thin",
        "200": "Poppins-ExtraLight",
        "300": "Poppins-Light",
        "400": "Poppins-Regular",
        "500": "Poppins-Medium",
        "600": "Poppins-SemiBold",
        "700": "Poppins-Bold",
        "800": "Poppins-ExtraBold",
        "900": "Poppins-Black",
        "italic": "Poppins-Italic",
    };
    return fontWeights[font_weight as keyof typeof fontWeights] || "Poppins-Regular";
}
