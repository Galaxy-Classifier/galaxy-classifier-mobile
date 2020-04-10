/**
 * A Modal component to show the information about the product owners
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
import info from '../people.json';
const SCREEN_HEIGHT= Dimensions.get('window').height;





const renderPeople = () => {
    return info.stakeholders.map(
        stakeholder => {
            return (
                <View style={{flex:1}}>
                    <Image source={config.images.user} style={{alignSelf:'center',width: SCREEN_HEIGHT *0.15, height: SCREEN_HEIGHT *0.15,borderRadius: 70}} /> 
               <ScrollView style={{flex:1}} contentContainerStyle={{padding:10}} >
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.025,marginTop:15,marginBottom:5,fontWeight:'300'}}  >Nombre: </Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.03, fontWeight:'400',marginLeft:10}}  >{stakeholder.name}</Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.025,marginTop:15,marginBottom:5,fontWeight:'300'}}  >Apellidos: </Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.03, fontWeight:'400',marginLeft:10}}  >{stakeholder.lastName}</Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.025,marginTop:15,marginBottom:5,fontWeight:'300'}}  >Rol: </Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.03, fontWeight:'400',marginLeft:10}}  >{stakeholder.role}</Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.025,marginTop:15,marginBottom:5,fontWeight:'300'}}  >Email: </Text>
                    <Text  style={{width:'100%',fontSize:SCREEN_HEIGHT*0.03, fontWeight:'400',marginLeft:10}}  >{stakeholder.email}</Text>
  
                </ScrollView>
                </View>
            );
        }
    );
}

const PeopleModal = ({showModal, onCloseModal}) => {
    return(
       <Modal transparent visible={showModal} onRequestClose={()=> onCloseModal()} animationType='fade' >
        
       <View style={{flex:1,justifyContent:'center', alignItems:'center'}} >
           <View style={{width:'90%', height:'80%',borderRadius:5, backgroundColor:config.colors.white,padding:10}} >
           <View style={{width:'100%', alignItems:'flex-start'}}>
           <Icon name="times" type="font-awesome" onPress={() => onCloseModal()} />
           </View>
           
           <Text style={{width:'100%', fontSize: SCREEN_HEIGHT * 0.035, fontWeight:'500',textAlign:'center',marginTop:10,marginBottom:10 }} > Nosotros </Text>
               <Swiper>
                   {renderPeople()}
               </Swiper>
           </View>
           
       </View>
          
       </Modal>
    );
}

export { PeopleModal };