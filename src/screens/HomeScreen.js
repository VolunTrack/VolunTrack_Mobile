import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import CreateButton from '../components/CreateButton';
import {withNavigation} from "react-navigation";
import useResults from "../hooks/useResults";

const HomeScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    return <View>
        <SearchBar
            term={searchTerm}
            onTermChange={setSearchTerm}
            onTermSubmit={() => {
                navigation.navigate('Menu', searchTerm);
            }}
        />
        <Text style = {styles.topText}>It looks like you haven't added any</Text>
        <Text style = {styles.bottomText}>Volunteering tasks yet...</Text>
        <CreateButton title="Create a New Task!"/>
    </View>
}

const styles =  StyleSheet.create({
    topText: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 100,
        color: '#1E2022',
        fontFamily: "HelveticaNeue"
    },
    bottomText: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 120,
        color: '#1E2022',
        fontFamily: "HelveticaNeue"
    },

});

export default withNavigation(HomeScreen);
