/**
 * A Modal component to show the terms and conditions about the use of the images that the user upload.
 * For continue with the prediction the user should accept the terms and conditions.
 */

 import React, {useState} from 'react';
 import {
    Modal,
    Text,
    View, 
    ScrollView,
    Dimensions
 } from 'react-native';
 import {
    Button,
    CheckBox,
    Icon
 } from 'react-native-elements';
 import config from '../config';
 const SCREEN_HEIGHT= Dimensions.get('window').height;



 const TnCModal = ({showModal, onCloseModal,onAcceptTnC}) => {
     const [checked, toogleCheck] = useState();
     return(
        <Modal transparent visible={showModal} onRequestClose={()=> onCloseModal()} animationType='fade' >
         
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}} >
            <View style={{width:'90%', height:'80%',borderRadius:5, backgroundColor:config.colors.white,padding:10}} >
            <View style={{width:'100%', alignItems:'flex-start'}}>
            <Icon name="times" type="font-awesome" onPress={() => onCloseModal()} />
            </View>
            
            <Text style={{width:'100%', fontSize: SCREEN_HEIGHT * 0.035, fontWeight:'500',textAlign:'center',marginTop:10 }} > Terminos y Condiciones </Text>
            <ScrollView style={{flex:1}} contentContainerStyle={{padding:10}} >
                <Text style={{fontSize: SCREEN_HEIGHT *0.02, textAlign:'justify' }}>
                Los siguientes términos y condiciones (los "Términos y Condiciones") rigen el uso que usted le dé al sitio 
                web www.cnnexpansion.com (el "Sitio Web") y a cualquiera de los contenidos disponibles por o a través de 
                este Sitio Web, incluyendo cualquier contenido derivado del mismo. Grupo Expansión ("Expansión" o "nosotros") 
                ha puesto a su disposición el Sitio Web. Podemos cambiar los Términos y Condiciones de Uso, en cualquier momento 
                sin ninguna notificación, sólo publicando los cambios en el Sitio Web. AL USAR EL SITIO WEB, USTED ACEPTA Y ESTÁ 
                DE ACUERDO CON ESTOS TÉRMINOS Y CONDICIONES EN LO QUE SE REFIERE AL USO DEL SITIO WEB. Si usted no está de acuerdo 
                con estos Términos y Condiciones, no puede tener acceso al mismo ni usar el Sitio Web de ninguna otra manera. 
                Derechos de Propiedad. Expansión es el único y exclusivo titular de los derechos sobre los títulos, contenido 
                (incluyendo, por ejemplo, audio, fotografías, ilustraciones, gráficos, otros medios visuales, videos, copias, textos, 
                software, títulos, archivos de Onda de choque, etc.), códigos, datos y materiales del mismo, el aspecto y el ambiente, 
                el diseño y la organización del Sitio Web, la compilación de los contenidos, códigos, datos y los materiales en el Sitio Web,
                incluyendo pero no limitado a, cualesquiera derechos de autor, derechos de marca, derechos de patente, derechos de base
                de datos, derechos morales, derechos sui generis y otras propiedades intelectuales, derechos patrimoniales del
                mismo, y en general de todo el Sitio Web. El uso del Sitio Web no le otorga propiedad de ninguno de los 
                contenidos, códigos, datos o materiales a los que pueda acceder en o a través del Sitio Web.
                </Text>
            </ScrollView>
            <CheckBox checked={checked} onPress={()=> toogleCheck(!checked)} title='Acepto los terminos y condiciones' containerStyle={{backgroundColor:'transparent',borderWidth:0}}  />
            <Button disabled={!checked} title='Continuar' onPress={ () =>onAcceptTnC()} />
            </View>
            
        </View>
           
        </Modal>
     );
 }

 export { TnCModal};