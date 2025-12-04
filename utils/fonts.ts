import { PoppinsFontFamily, PoppinsFontWeights } from '@/types/fonts';

/**
 * Get Poppins font family name based on weight
 * @param weight - Font weight (100-900) or 'normal'/'bold'
 * @param italic - Whether the font should be italic
 * @returns Poppins font family name
 */
export const getPoppinsFont = (
  weight: keyof typeof PoppinsFontWeights | 'normal' | 'bold' = 'normal',
  italic: boolean = false
): PoppinsFontFamily => {
  let fontWeight: keyof typeof PoppinsFontWeights;

  if (weight === 'normal') {
    fontWeight = 400;
  } else if (weight === 'bold') {
    fontWeight = 700;
  } else {
    fontWeight = weight;
  }

  const baseFont = PoppinsFontWeights[fontWeight] || 'Poppins-Regular';

  if (italic) {
    return (baseFont.replace('Poppins-', 'Poppins-') + 'Italic') as PoppinsFontFamily;
  }

  return baseFont as PoppinsFontFamily;
};

/**
 * Text style helper for Poppins fonts
 */
export const poppinsTextStyle = (
  weight: keyof typeof PoppinsFontWeights | 'normal' | 'bold' = 'normal',
  italic: boolean = false
) => ({
  fontFamily: getPoppinsFont(weight, italic),
});
