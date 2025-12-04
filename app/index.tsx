import EntryScreen from '@/components/Templates/EntryScreen';
import storage from '@/utils/storage';
import { router } from 'expo-router';
import React, { useEffect } from 'react';

// import { Container } from './styles';

const app: React.FC = () => {

    useEffect(() => {
        storage.getItem('user_data').then((data) => {
            if (data) {
                router.replace('/app/menu');
            }
        });
    }, []);

  return <EntryScreen />;
}

export default app;