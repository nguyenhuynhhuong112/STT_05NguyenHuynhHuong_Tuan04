import {View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
export const Button = () =>{
    return (
    <View style={styles.container}>
        <View style= {styles.view1}>
            <TouchableOpacity >
                <Text style={styles.text}>login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.view2} >
            <TouchableOpacity>
                <Text style={styles.text2}>create account</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}