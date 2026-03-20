import storage from '@/utils/storage';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const App: React.FC = () => {

    useEffect(() => {
        storage.getItem('user_data').then((data) => {
            if (data) {
                router.replace('/app/menu');
            } else {
                router.replace('/login/gov');
            }
        });
    }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

export default App;