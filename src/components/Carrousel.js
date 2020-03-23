import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import config from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';


const renderCards = (data,addImage) => {
    if (data.length > 0) {
        let i=0;
        return data.map(
            item => {
                i++;
                return (
                    <TouchableOpacity  onPress={ () => addImage() }  key={i} style={styles.itemContainer} >
                        <Image source={ item ? item.uri :config.images.addImageIcon} style={{ width: '50%' }} />
                    </TouchableOpacity>
                );
            }
        );
    }
}

const Carrousel = ({ data, addImage }) => {
    return (
        <View style={{ height: '50%' }}>
            <Swiper showsButtons activeDotColor={config.colors.green} dotColor={config.colors.white}  >
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
    }
}

export { Carrousel };