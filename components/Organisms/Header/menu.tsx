import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/hooks/useFonts';
import storage from '@/utils/storage';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import DrawerContent from '../Drawer';
import { HeaderContainer } from './styles';
const Header: React.FC = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const router = useRouter();

    const drawerAnimation = useRef(new Animated.Value(-300)).current; // Initial position off-screen to the left

    const openDrawer = () => {
        setToggleModal(true);
        Animated.timing(drawerAnimation, {
            toValue: 0, // Move to visible position (left to right)
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeDrawer = () => {
        Animated.timing(drawerAnimation, {
            toValue: -300, // Move back off-screen to the left
            duration: 300,
            useNativeDriver: true,
        }).start(() => setToggleModal(false));
    };

    const setup = async () => {
        const storedUserName = await storage.getItem('user_data');
        const full_name = JSON.parse(storedUserName as any).dados_pessoais?.nome_completo;
        const first_name = full_name?.split(' ')[0];
        setUserName(first_name || null);
    };

    useEffect(() => {
        setup();
    }, []);

    useEffect(() => {
        const loadProfileImage = async () => {
            const storedProfileImage = await storage.getItem('profile_image');
            if (storedProfileImage) {
                setProfileImage(storedProfileImage);
            }
        };
        loadProfileImage();
    }, []);

    const saveProfileImage = async (uri: string | null) => {
        if (uri) {
            await storage.setItem('profile_image', uri);
        } else {
            await storage.removeItem('profile_image');
        }
    };

    const pickImageFromGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setProfileImage(uri);
            await saveProfileImage(uri);
            setModalVisible(false);
        }
    };

    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setProfileImage(uri);
            await saveProfileImage(uri);
            setModalVisible(false);
        }
    };

    const removePhoto = async () => {
        setProfileImage(null);
        await saveProfileImage(null);
        setModalVisible(false);
    };

    return (
        <HeaderContainer>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={openDrawer} style={{
                    padding: 10
                }}>
                    <Image
                        source={require('@/assets/images/image.png')}
                        style={{ width: 30, height: 30 }}
                        tintColor={'white'}
                    />
                </Pressable>
                {userName && (
                    <Text
                        style={{
                            fontSize: 14,
                            color: 'white',
                            fontWeight: '500',
                        }}
                    >
                        {userName.toUpperCase()}
                    </Text>
                )}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <MaterialCommunityIcons
                    name="bell"
                    size={28}
                    color="white"
                    onPress={() => {
                        router.push('/app/notifications');
                    }}
                />
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        backgroundColor: '#112F76',
                        borderWidth: 1.5,
                        borderColor: 'rgb(255, 255, 255)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {profileImage ? (
                        <Image
                            source={{ uri: profileImage }}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 25,
                            }}
                        />
                    ) : (
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                lineHeight: 38,
                                color: 'rgb(255, 255, 255)',
                            }}
                        >
                            {userName ? userName.charAt(0).toUpperCase() : '?'}
                        </Text>
                    )}
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center', // Centraliza verticalmente
                        alignItems: 'center', // Centraliza horizontalmente
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            paddingTop: 30,
                            padding: 20,
                            borderRadius: 20, // Arredonda os cantos
                            width: '80%', // Largura do modal
                            alignItems: 'center', // Centraliza o conteúdo
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginBottom: 10,
                        }}>
                            <Text style={{ fontSize: 16, textAlign: 'center',
                                fontFamily: getFontFamily('700'), marginBottom: 5 }}>
                                Foto de Perfil
                            </Text>
                            <AntDesign name="close" size={24} color="black" onPress={() => setModalVisible(false)} style={{
                                marginRight: 15,
                            }} />
                        </View>
                        <TouchableOpacity
                            onPress={takePhoto}
                            style={{
                                backgroundColor: Colors.primary,
                                width: '100%',
                                padding: 10,
                                borderRadius: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <FontAwesome6 name="camera-retro" size={20} color="white" style={{
                                marginLeft: 10,
                                width:30,
                            }} />
                            <Text style={{
                                fontSize: 16,
                                color: 'white',
                                fontFamily: getFontFamily('500')
                            }}>Tirar Foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={pickImageFromGallery}
                            style={{
                                backgroundColor: Colors.primary,
                                width: '100%',
                                padding: 10,
                                borderRadius: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <FontAwesome6 name="images" size={20} color="white" style={{
                                marginLeft: 10,
                                width: 30,
                            }} />
                            <Text style={{
                                fontSize: 16,
                                color: 'white',
                                fontFamily: getFontFamily('500')
                            }}>Escolher da Galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={removePhoto}
                            style={{
                                backgroundColor: Colors.primary,
                                width: '100%',
                                padding: 10,
                                borderRadius: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <FontAwesome6 name="trash-can" size={20} color="white" style={{
                                marginLeft: 10,
                                width: 30,
                            }} />
                            <Text style={{
                                fontSize: 16,
                                color: 'white',
                                fontFamily: getFontFamily('500')
                            }}>Remover Foto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
                  <Modal
        animationType="none"
        transparent={true}
        visible={toggleModal}
        onRequestClose={closeDrawer}
        >
            <Pressable
                style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                onPress={closeDrawer}
            >
                <Animated.View
                    style={{
                        transform: [{ translateX: drawerAnimation }],
                        backgroundColor: 'white',
                        borderBottomRightRadius: 20,
                        width: '70%',
                        height: '100%',
                    }}
                >
                    <DrawerContent />
                </Animated.View>
            </Pressable>
        </Modal>
    </HeaderContainer>
    );
};

export default Header;