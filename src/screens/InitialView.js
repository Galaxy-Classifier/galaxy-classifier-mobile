import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';
import {
    Button
} from 'react-native-elements';
import config from '../config';
const SCREEN_HEIGHT = Dimensions.get('window').height ;


class InitialView extends Component {
    render() {
        return (


            <ImageBackground source={config.images.galaxyBackgroundImage} style={styles.mainContainer} resizeMode="cover" >
                <SafeAreaView style={{ flex: 1 }} >
                    <StatusBar barStyle="light-content" />
                    <Image source={config.images.tecnmLogo} style={ styles.tecnmLogo } />
                    <Text style={styles.welcomeTitleText} >
                        Bienvenido  al sistema clasificador de galaxias
                </Text>
                    <Text style={styles.bodyText} >
                        Este es un sistema que se desarrollo en el Instituto Tecnológico
                        Nacional, campus Culiacán. El cual se encarga de realizar detectar
                        a qué galaxia pertenece la imagen que desees.
                </Text>
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Comenzar" 
                            titleStyle={styles.buttonTitle} 
                            buttonStyle={styles.buttonStyle}
                            onPress={()=> this.props.navigation.navigate('uploadView')}
                        />
                    </View>
                </SafeAreaView>

            </ImageBackground>

        );
    }
}

const styles = {
    mainContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    tecnmLogo: {
        width: '30%', 
        alignSelf: 'flex-end', 
        marginRight: 15 
    },
    welcomeTitleText: {
        width: '100%', 
        fontSize: SCREEN_HEIGHT * 0.04, 
        color: config.colors.white, 
        textAlign: 'center', 
        padding: '5%', 
        marginTop: '10%'
    },
    bodyText: {
        width: '100%', 
        fontSize: SCREEN_HEIGHT * 0.03, 
        color: config.colors.white, 
        textAlign: 'justify', 
        padding: '5%', 
        marginTop: '40%'
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

export { InitialView };