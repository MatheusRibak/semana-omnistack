import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
            </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escola um dos casos abaixo e salve o dia!</Text>


            <FlatList 
            style={styles.incidentList}
            
            data={[1, 2, 3]}
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
                <View style={styles.incident}>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentProperty}>APD:</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentProperty}>Cadelinha atropelada:</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentProperty}>R$ 120,00</Text>

                <TouchableOpacity style={styles.detailsButton}
                    onPress={navigateToDetail}>
                    <Text styles={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name='arrow-right' size={16} color="#e02041"></Feather>
                </TouchableOpacity>

            </View>
            )}
            />



  



        </View>

    );
}