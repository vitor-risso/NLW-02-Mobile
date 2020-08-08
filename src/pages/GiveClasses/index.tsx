import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

import GiveClassesBgImg from '../../assets/images/give-classes-background.png';

function GiveClasses (){
    const { goBack } = useNavigation();

    function handleNavigateBack (){
        goBack();
    }

    return (
        <View style={styles.container}> 
            <ImageBackground resizeMode="contain" source={GiveClassesBgImg} style={styles.content}>

            <Text style={styles.title}>Quer ser um Proffy? </Text>
            <Text style={styles.description}>Para começar como professor você precisa se cadastrar na nossa plataforma web </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;