import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Alert,
    TouchableHighlightBase
} from 'react-native';
import {
    Button
} from 'react-native-elements'; 
import { 
    Carrousel,
    PhotoModal,
    TnCModal,
    LoadingModal
} from '../components';
import CameraRoll from '@react-native-community/cameraroll';

import config from '../config';


class UploadView extends Component {
    state = {
        images: [],
        showModal: false,
        photos: [],
        savedImages: [],
        showTnCModal: false,
        loading: false
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
         let idx = aux.indexOf(photo);
         if(idx >-1){
             aux.splice(idx,1);
         } 
         else if( aux.length < 3 ){
             aux.push(photo);
         }
         else{
             Alert.alert('Maxima capacidad', 'Capacidad exdedida. Solamente puedes seleccionar 3 images.');
         }
         this.setState({images : aux});
         
    }
    savingSelectedImages(){
        //Using the spread operator(...) because if was giving a bug when the image state was getting updated
        this.setState({savedImages: [... this.state.images] , showModal:false })
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    async uploadingImages(){
        this.setState({ showTnCModal: false,loading: true});
        await this.sleep(4000);
        this.setState({loading: false});

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
                        data ={ this.state.savedImages.length > 0 ? this.state.savedImages : [null]}
                        addImage={ ()=> this.openGallery() }
                    />
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Clasificar" 
                            titleStyle={this.state.savedImages.length < 1 ? {} : styles.buttonTitle} 
                            buttonStyle={this.state.savedImages.length < 1 ? styles.disabledButtonStyle : styles.buttonStyle}
                            onPress={()=> this.setState({showTnCModal: true})}
                            disabled={this.state.savedImages.length < 1 ? true : false }
                           
                            
                        />
                    </View>
                    <PhotoModal 
                        showModal={this.state.showModal} 
                        onCloseModal={()=> this.setState({showModal:false})}  
                        data={this.state.photos}
                        onSelectItem ={ photo => this.onSelectedPhoto(photo)}
                        selectedImages = { this.state.images }
                        onSaveSelection = { () => this.savingSelectedImages()  }
    
                    />
                    <TnCModal
                        showModal={this.state.showTnCModal}
                        onCloseModal={()=> this.setState({showTnCModal:false})}
                        onAcceptTnC ={() => this.uploadingImages()}
                    />
                    <LoadingModal
                        showModal={this.state.loading}
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
    },
    disabledButtonStyle: {
        width:'60%',
        alignSelf:'center' 
    }
};

export { UploadView };