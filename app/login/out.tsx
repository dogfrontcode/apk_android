import storage from '@/utils/storage';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const LoginOut: React.FC = () => {
    useEffect(() => {
        storage.removeItem('user_data');
        router.replace('/');
    }, []);

    return <View />;
}

export default LoginOut;