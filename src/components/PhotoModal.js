import React from 'react';
import {
    Modal,
    View,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Button,
    CheckBox
} from 'react-native-elements';
import config from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
const SCREEN_WIDTH = Dimensions.get('window').width / 3;




const renderPhotos = (data,onSelectItem,selectedImages) => {
    if (data.length > 0) {
        return data.map(
            item => {
                let isChecked =  selectedImages.indexOf(item.node.image.uri) > -1 ? true: false;
                return (
                    <TouchableOpacity key={item.node.image.filename} onPress={()=> onSelectItem(item.node.image.uri) } style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}>
                            <ImageBackground style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}} source={{uri: item.node.image.uri}} >
                                <CheckBox 
                                    checkedIcon='check-circle'
                                    uncheckedIcon='circle'
                                    checked = {isChecked} />
                            </ImageBackground>
                        </TouchableOpacity>
                        
                );
            }
        );
    }
}

const PhotoModal = ({ showModal, onCloseModal, data,onSelectItem, selectedImages,onSaveSelection}) => {
    return (
        <Modal animationType="slide" transparent visible={showModal} onRequestClose={() => onCloseModal()} >
            <View style={{ flex: 1, justifyContent: 'flex-end' }} >
                <View style={{ width: '100%', height: '85%', backgroundColor: 'black' }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Button type="clear" title="Cancelar" titleStyle={{ color: 'white', fontSize: 20 }} onPress={() => onCloseModal()} />
                        <Button type="clear" title="Guardar" titleStyle={{ color: config.colors.green, fontSize: 20 }} onPress={() => onSaveSelection()} />
                    </View>
                    <ScrollView style={{flex:1}} >
                        <View  style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                            {renderPhotos(data, onSelectItem,selectedImages)}
                        </View>
                    </ScrollView>
                </View>
            </View>

        </Modal>
    );
}

export { PhotoModal };