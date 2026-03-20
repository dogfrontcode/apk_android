import storage from '@/utils/storage';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const LoginOut: React.FC = () => {
    useEffect(() => {
        Promise.all([
            storage.removeItem('user_data'),
            storage.removeItem('cnh_front'),
            storage.removeItem('cnh_back'),
            storage.removeItem('cnh_sign'),
            storage.removeItem('cnh_qr'),
            storage.removeItem('cnh_files_cached'),
            storage.removeItem('profile_image'),
        ]).then(() => router.replace('/'));
    }, []);

    return <View />;
}

export default LoginOut;