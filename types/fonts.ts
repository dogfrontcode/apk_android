// Font family types for Poppins
export type PoppinsFontFamily =
  | 'Poppins-Regular'
  | 'Poppins-Bold'
  | 'Poppins-SemiBold'
  | 'Poppins-Medium'
  | 'Poppins-Light'
  | 'Poppins-ExtraLight'
  | 'Poppins-Thin'
  | 'Poppins-Black'
  | 'Poppins-ExtraBold'
  | 'Poppins-Italic'
  | 'Poppins-BoldItalic'
  | 'Poppins-SemiBoldItalic'
  | 'Poppins-MediumItalic'
  | 'Poppins-LightItalic'
  | 'Poppins-ExtraLightItalic'
  | 'Poppins-ThinItalic'
  | 'Poppins-BlackItalic'
  | 'Poppins-ExtraBoldItalic';

// Font weight mapping for easier usage
export const PoppinsFontWeights = {
  100: 'Poppins-Thin',
  200: 'Poppins-ExtraLight',
  300: 'Poppins-Light',
  400: 'Poppins-Regular',
  500: 'Poppins-Medium',
  600: 'Poppins-SemiBold',
  700: 'Poppins-Bold',
  800: 'Poppins-ExtraBold',
  900: 'Poppins-Black',
} as const;
