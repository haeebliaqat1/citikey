import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Modal, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import sampleVideo from '../assets/sample.mp4';
import { AssetURI, Configuration } from './configuration';
import {VESDK, VideoEditorModal,} from 'react-native-videoeditorsdk';

export default class VideoEditor extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
            <VideoEditorModal visible={true} video={require('../assets/sample.mp4')}/>
            </View>
        );
    }
}


export { VESDK, VideoEditorModal };