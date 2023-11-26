import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { EvilIcons } from '@expo/vector-icons';


const SearchSearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Discover new opportunities"
                placeholderTextColor='gray'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={() => onTermSubmit(term)} // Trigger search on submission
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFF', 
        height: 40,
        borderRadius: 40,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1, // 设置边框宽度
        borderColor: colors.primary, // 假设 colors.primary 是您想要的蓝色
        borderRadius: 10,
        
        
    },

    inputStyle: {
        flex: 1,
        fontSize: 16,
    },
    
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        color: colors.primary,
        marginHorizontal: 10, 
    }
});

export default SearchSearchBar;