import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import config from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
const SCREEN_WIDTH = Dimensions.get('window').width ;
const SCREEN_HEIGHT = Dimensions.get('window').height ;





const renderCards = (data,addImage) => {
    if (data.length > 0) {
        let i=0;
        return data.map(
            item => {
                i++;
                return (
                    <TouchableOpacity  onPress={ () => addImage() }  key={i} style={item ? styles.selectedItemContainer : styles.itemContainer} >
                        <Image resizeMode='cover' source={ item ? {uri: item} :config.images.addImageIcon} style={item ? styles.selectedImage : {width:'50%'}} />
                    </TouchableOpacity>
                );
            }
        );
    }
}

const Carrousel = ({ data, addImage }) => {
    return (
        <View style={{ height: '50%' }}>
            <Swiper showsButtons={data.length >1 ?  true : false} activeDotColor={config.colors.green} dotColor={config.colors.white}  >
                {renderCards(data,addImage)}
            </Swiper>
        </View>

    );
}

const styles={
    itemContainer: { 
        width: '80%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: 'white', 
        borderWidth: 5, 
        margin: '20%', 
        alignSelf: 'center', 
        borderRadius: 10 ,
        padding:'3%'
    },
    selectedItemContainer: {
        width: '80%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '15%', 
        alignSelf: 'center', 
        borderRadius: 10 ,
        padding:'3%'
    },
    selectedImage: {
        width: SCREEN_WIDTH * 0.8, 
        height:SCREEN_HEIGHT * 0.27,
        borderColor: config.colors.white,
        borderWidth:5,
        borderRadius:10,
    }
}

export { Carrousel };