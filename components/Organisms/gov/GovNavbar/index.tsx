import React from 'react';
import { Image } from 'react-native';
import { AccessibilitySection, NavBarContainer } from './styles';
// import { Container } from './styles';
import { Colors } from '@/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const GovNavbar: React.FC = () => {

  return <NavBarContainer style={{
    width: '100%',
    boxShadow: "0 3px 6px #00000029",
    elevation: 7,
  }}>
    <Image
      source={require('@/assets/images/gov-navbar-logo.jpg')}
      style={{ height: 36, width: 100, resizeMode: 'contain' }}
    />
    <AccessibilitySection>
        <FontAwesome5 name="adjust" size={13} color={Colors.govBtn} />
        <FontAwesome5 name="deaf" size={13} color={Colors.govBtn} />
    </AccessibilitySection>
  </NavBarContainer>;
}

export default GovNavbar;