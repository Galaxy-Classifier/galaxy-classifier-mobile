import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Alert
} from 'react-native';
import {
    Button
} from 'react-native-elements'; 
import { 
    Carrousel,
    PhotoModal
} from '../components';
import CameraRoll from '@react-native-community/cameraroll';

import config from '../config';


class UploadView extends Component {
    state = {
        images: [null, null, null],
        showModal: false,
        photos: []
    }
    openGallery(){
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges,showModal:true });
          })
          .catch((err) => {
             //Error Loading Images
            Alert.alert("Error","Error al abrir la liberia");
          });
    }
    onSelectedPhoto(photo){
        let aux = this.state.images;
        console.log(aux);
         let idx = aux.indexOf(photo);
         if(idx >-1){
             aux.splice(idx,1);
         } 
         else{
             aux.push(photo);
         }
         this.setState({images : aux});
         console.log(this.state.images);
    }
    render() {
        return (
            <View style={styles.mainContainer}  >
                <SafeAreaView style={{ flex: 1 }} >
                    <StatusBar barStyle="light-content" />
                    <Text style={styles.welcomeTitleText}>
                        Imagenes a clasificar
                    </Text>
                    <Carrousel  
                        data ={ this.state.images }
                        addImage={ ()=> this.openGallery() }
                    />
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Clasificar" 
                            titleStyle={styles.buttonTitle} 
                            buttonStyle={styles.buttonStyle}
                            onPress={()=> this.props.navigation.navigate('uploadView')}
                        />
                    </View>
                    <PhotoModal 
                        showModal={this.state.showModal} 
                        onCloseModal={()=> this.setState({showModal:false})}  
                        data={this.state.photos}
                        onSelectItem ={ photo => this.onSelectedPhoto(photo)}
                        selectedImages = { this.state.images }
                    />
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
        marginTop: '8%'
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