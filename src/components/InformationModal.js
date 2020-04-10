/**
 * A Modal component to show the information about the galaxies we are supporting
 */

import React, {useState} from 'react';
import {
   Modal,
   Text,
   View, 
   ScrollView,
   Dimensions,
    Image
} from 'react-native';
import {
   Button,
   CheckBox,
   Icon
} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import config from '../config';
import info from '../galaxy_items.json';
const SCREEN_HEIGHT= Dimensions.get('window').height;



const renderFacts = (data) => {
    return data.map( fact => {
        return(
        <Text key={fact.id} style={{width:'100%', fontSize: SCREEN_HEIGHT * 0.02}} >{fact.text}</Text>
        );
    })
}

const renderGalaxies = () => {
    return info.galaxies.map(
        galaxy => {
            return (
                <View style={{flex:1}}>
                    <Image source={{ uri: galaxy.src.pngS}} style={{alignSelf:'center',width: SCREEN_HEIGHT *0.15, height: SCREEN_HEIGHT *0.15,borderRadius: 70}} /> 
               <Text  style={{width:'100%', textAlign:'center',fontSize:SCREEN_HEIGHT*0.03,marginTop:15,marginBottom:30}}  >{"Galaxía " + galaxy.title}</Text>
               <ScrollView style={{flex:1}} contentContainerStyle={{padding:10}} >
               {renderFacts(galaxy.info)}
                </ScrollView>
                </View>
            );
        }
    );
}

const InformationModal = ({showModal, onCloseModal}) => {
    const [checked, toogleCheck] = useState(); 
    return(
       <Modal transparent visible={showModal} onRequestClose={()=> onCloseModal()} animationType='fade' >
        
       <View style={{flex:1,justifyContent:'center', alignItems:'center'}} >
           <View style={{width:'90%', height:'80%',borderRadius:5, backgroundColor:config.colors.white,padding:10}} >
           <View style={{width:'100%', alignItems:'flex-start'}}>
           <Icon name="times" type="font-awesome" onPress={() => onCloseModal()} />
           </View>
           
           <Text style={{width:'100%', fontSize: SCREEN_HEIGHT * 0.035, fontWeight:'500',textAlign:'center',marginTop:10,marginBottom:10 }} > Información </Text>
               <Swiper>
                   {renderGalaxies()}
               </Swiper>
           </View>
           
       </View>
          
       </Modal>
    );
}

export { InformationModal };