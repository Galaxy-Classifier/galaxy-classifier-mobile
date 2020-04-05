/**
 * Modal Component to show in case that the is an error uploading the image and making the prediction.
 */
import React from 'react';
import { 
    Modal,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import  config from '../config';
const SCREEN_HEIGHT= Dimensions.get('window').height;


const ErrorModal = ({showModal,message,onRequestClose}) => {
    return(
        <Modal  transparent animationType='fade' visible={showModal} >
            <TouchableWithoutFeedback onPress={()  => onRequestClose() }  style={{flex:1}}  >
            <View style={styles.container}>
            <View style={styles.innerContainer} >
                <Image source={config.images.erorrIcon} style={styles.image} />
                <Text style={styles.text}>{message}</Text>
            </View>
            </View>
            
            </TouchableWithoutFeedback>
            
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
    innerContainer: {
        width:'90%',
        padding:15, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5
    },
    text: {
        fontSize: SCREEN_HEIGHT * 0.03,
        marginTop:20
    },
    image:{
        width:SCREEN_HEIGHT * 0.05,
        height:SCREEN_HEIGHT * 0.05    
    }

};

export { ErrorModal };