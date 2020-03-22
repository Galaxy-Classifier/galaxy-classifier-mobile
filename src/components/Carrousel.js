import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import config from '../config';


const renderCards = (data) => {
    if (data.length > 0) {
        let i=0;
        return data.map(
            item => {
                i++;
                return (
                    <View key={i} style={styles.itemContainer} >
                        <Image source={ item ? item.uri :config.images.addImageIcon} style={{ width: '50%' }} />
                    </View>
                );
            }
        );
    }
}

const Carrousel = ({ data }) => {
    return (
        <View style={{ height: '50%' }}>
            <Swiper showsButtons buttonWrapperStyle={{color: config.colors.white}} activeDotColor={config.colors.green} dotColor={config.colors.white}  >
                {renderCards(data)}
            </Swiper>
        </View>

    );
}

const styles={
    itemContainer: { 
        flex: 1, 
        width: '80%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: 'white', 
        borderWidth: 5, 
        margin: '20%', 
        alignSelf: 'center', 
        borderRadius: 10 
    }
}

export { Carrousel };