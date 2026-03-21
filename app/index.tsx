import storage from '@/utils/storage';
import { Colors } from '@/constants/Colors';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        storage.getItem('user_data').then((data) => {
            setIsLoggedIn(!!data);
        }).catch(() => {
            setIsLoggedIn(false);
        });
    }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (isLoggedIn) {
    return <Redirect href="/app/menu" />;
  }

  return <Redirect href="/login/gov" />;
}

export default App;