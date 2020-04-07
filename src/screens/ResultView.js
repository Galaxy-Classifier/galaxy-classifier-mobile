/**
 * Screen component to show the predictions results to the user AB#13 
 * User history: (https://dev.azure.com/apollor/Galaxy%20classifier/_backlogs/backlog/Galaxy%20classifier%20Team/Features/?workitem=13)
 * Created by  Victor Morfin
 */
import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import { 
    Icon
} from 'react-native-elements';
import {
    Carrousel
 } from '../components';
import config from '../config';
const SCREEN_HEIGHT= Dimensions.get('window').height;


class ResultView extends Component {
    state= {
        images: []
    }
    componentWillMount(){
       let { images } = this.props.route.params
       this.setState({ images: images})
    }

    render() {
        return (
            <View style={styles.mainContainer}  >
                <SafeAreaView style={{ flex: 1 }} >
                    <StatusBar barStyle="light-content" />
                    <Carrousel
                        data={this.state.images}
                        onChangeView={idx => console.log('index: '+ idx)}
                    />
                    <Text style={styles.titleText}>
                        Tipo: 
                    </Text>
                    <Text style={styles.valueTitleText}>
                        Galaxía elípitica
                    </Text>
                    <Text style={styles.titleText}>
                        Información: 
                    </Text>
                    <ScrollView style={{flex:1}} contentContainerStyle={{marginBottom:10,marginHorizontal:'5%'}} showsVerticalScrollIndicator persistentScrollbar >
                    <Text style={styles.infoBodyText}>
                    Aqui va información acerca de la galaxia a la que pertenece la imagen, en pocas palabras como una pequeña descripción
                    </Text>
                    </ScrollView>
                    
                    
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
    titleText: {
        width: '100%',
        fontSize: SCREEN_HEIGHT * 0.025,
        color: config.colors.white,
        paddingHorizontal: '5%',
        marginBottom: 10
    },
    valueTitleText: {
        width: '100%',
        fontSize: SCREEN_HEIGHT * 0.035,
        color: config.colors.white,
        paddingHorizontal: '10%',
        marginBottom: 10
    },
    infoBodyText: {
        width: '100%',
        fontSize: SCREEN_HEIGHT * 0.03,
        color: config.colors.white,
        paddingHorizontal: '5%',
        marginBottom: 10

    }
};

export { ResultView };