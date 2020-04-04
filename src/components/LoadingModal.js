/**
 * Modal Component to show an Activity indicator to the user, while we're getting the predictions
 * and uploading the images to the server.
 */
import React from 'react';
import { 
    Modal,
    ActivityIndicator,
    View,
    Text,
    Dimensions
} from 'react-native';
import  config from '../config';
const SCREEN_HEIGHT= Dimensions.get('window').height;


const LoadingModal = ({showModal}) => {
    return(
        <Modal transparent animationType='fade' visible={showModal} >
            <View style={styles.container} >
                <ActivityIndicator size="large" color={config.colors.green} />
                <Text style={styles.text}> Cargando ... </Text>
            </View>
        </Modal>
    );
};

const styles = {
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.8)'
    },
    text: {
        color:config.colors.white, 
        fontSize: SCREEN_HEIGHT * 0.03,
        marginTop:20
    }
};

export { LoadingModal };
