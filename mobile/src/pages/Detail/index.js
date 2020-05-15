import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailCompose from 'expo-mail-composer';

export default function Detail() {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity onPress={() => { }}>
                    <Feather name='arrow-left' size={28} color={"#e02041"}></Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentProperty}>APD:</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentProperty}>Cadelinha atropelada:</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentProperty}>R$ 120,00</Text>


            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso. </Text>

                <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.acition} onPress={() => { }}>
                        <Text style={styles.actionText}>WhatsAPP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acition} onPress={() => { }}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
}