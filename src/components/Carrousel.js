import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Text
} from 'react-native';
import ViewPagerAndroid from "@react-native-community/viewpager";
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
                    <TouchableOpacity disabled={addImage ? false : true}  onPress={ addImage ? () => addImage() : null }  key={i} style={item ? styles.selectedItemContainer : styles.itemContainer} >
                        <Image resizeMode='cover' source={ item ? {uri: item} :config.images.addImageIcon} style={item ? styles.selectedImage : {width:'50%'}} />
                    </TouchableOpacity>
                );
            }
        );
    }
}

const Carrousel = ({ data, addImage,onChangeView }) => {
    return (
        <View style={{ height: '50%' }}>
            <Swiper showsButtons={data.length >1 ?  true : false} activeDotColor={config.colors.green} dotColor={config.colors.white} onIndexChanged={ onChangeView ? idx =>  onChangeView(idx) : idx => console.log(idx) }  >
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
        margin: SCREEN_HEIGHT * 0.1, 
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