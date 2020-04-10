/**
 * Screen component to show the predictions results to the user AB#13 
 * User history: (https://dev.azure.com/apollor/Galaxy%20classifier/_backlogs/backlog/Galaxy%20classifier%20Team/Features/?workitem=13)
 * Created by  Victor Morfin
 */
import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import {
    Icon
} from 'react-native-elements';
import {
    Carrousel,
    InformationModal
} from '../components';
import config from '../config';
const SCREEN_HEIGHT = Dimensions.get('window').height;



function ResultView({ navigation, route }) {
    const [id, setId] = useState(0);
    const [showInfo, toogleInfo] = useState(false);

    const { images, prediction } = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:
                () => <Icon name="info" containerStyle={{ marginRight: 20 }} size={30} onPress={() => toogleInfo(true)} type="font-awesome" color={config.colors.green} />
        });
    })
    return (
        <View style={styles.mainContainer}  >
            <SafeAreaView style={{ flex: 1 }} >
                <StatusBar barStyle="light-content" />
                <Carrousel
                    data={images}
                    onChangeView={idx => setId(idx)}
                />
                <Text style={styles.titleText}>
                    Tipo:
            </Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <Text style={styles.valueTitleText}>
                        Galaxía {prediction[id].type}
                    </Text>
                    <Icon name="info-circle" containerStyle={{ marginRight: 20 }} size={30} onPress={() => toogleInfo(true)} type="font-awesome" color={config.colors.green} />
                </View>

                <Text style={styles.titleText}>
                    Información:
            </Text>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ marginBottom: 10, marginHorizontal: '5%' }} showsVerticalScrollIndicator persistentScrollbar >
                    <Text style={styles.infoBodyText}>
                        {prediction[id].information}
                    </Text>
                </ScrollView>

                <InformationModal showModal={showInfo} onCloseModal={() => toogleInfo(false)} />
            </SafeAreaView>

        </View>
    );
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
    titleText: {
        width: '100%',
        fontSize: SCREEN_HEIGHT * 0.025,
        color: config.colors.white,
        paddingHorizontal: '5%',
        marginBottom: 10
    },
    valueTitleText: {
        fontSize: SCREEN_HEIGHT * 0.035,
        color: config.colors.white,
        paddingHorizontal: '10%',
        marginBottom: 10
    },
    infoBodyText: {
        width: '100%',
        fontSize: SCREEN_HEIGHT * 0.03,
        color: config.colors.white,
        paddingHorizontal: '5%',
        marginBottom: 10

    }
};

export { ResultView };