import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Image
} from 'react-native';
import {
    Button
} from 'react-native-elements';
import config from '../config';

class UploadView extends Component {
    render() {
        return (


            <View style={styles.mainContainer}  >
                <SafeAreaView style={{ flex: 1 }} >
                    <StatusBar barStyle="light-content" />
                
                </SafeAreaView>

            </View>

        );
    }
}

const styles = {
    mainContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: config.colors.black
    },
    tecnmLogo: {
        width: '30%', 
        alignSelf: 'flex-end', 
        marginRight: 15 
    },
    welcomeTitleText: {
        width: '100%', 
        fontSize: 35, 
        color: config.colors.white, 
        textAlign: 'center', 
        padding: '5%', 
        marginTop: '10%'
    },
    bodyText: {
        width: '100%', 
        fontSize: 25, 
        color: config.colors.white, 
        textAlign: 'justify', 
        padding: '5%', 
        marginTop: '60%'
    },
    buttonContainer: {
        flex:1, 
        justifyContent:'flex-end',
        paddingBottom:20
    },
    buttonTitle: {
        color: config.colors.green, 
        fontWeight:'700'
    },
    buttonStyle: {
        backgroundColor:'transparent', 
        borderColor: config.colors.green, 
        borderWidth:4,
        width:'60%',
        alignSelf:'center' 
    }
};

export { UploadView };