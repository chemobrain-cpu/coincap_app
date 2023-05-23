import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Modal,
} from "react-native";
import { useSelector } from "react-redux"



const Calculator = ({ modalVisible,changeVisibility,navigateToCard,modalTopic,modalText}) => {
    let { background, importantText, normalText, fadeColor, blue, fadeButtonColor } = useSelector(state => state.userAuth)
    


    return (<Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                changeVisibility;
            }}
        >
            <View style={{ ...styles.modalBackground, backgroundColor: background === 'black' ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)' }}>
                <View style={{ ...styles.modalTop, backgroundColor: background === 'white' ? fadeColor : importantText }}>
                </View>

                <View style={{ ...styles.modalView, backgroundColor: background, borderColor: fadeColor }}>

                    <Text style={{...styles.modalHeader,color:importantText}}>{modalTopic}</Text>

                    <Text style={{...styles.modalText,color:normalText}}>{modalText}</Text>

                    <TouchableOpacity style={{...styles.modalButtonContainer,backgroundColor:fadeColor}} onPress={navigateToCard}>
                        <Text style={{...styles.modalButtonText,color:importantText}}>got it!</Text>
                    </TouchableOpacity>



                </View>

            </View>



        </Modal>);
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    modalTop: {
        height: 4,
        width: '20%',
        position: 'absolute',
        top: '65%',
        alignSelf: 'center',
        borderRadius: 5

    },
    modalView: {
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        top: '68%',
        padding:15,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: .5,
        paddingHorizontal: 20

    },
    modalHeader: {
        fontSize: 20,
        fontFamily: 'Poppins',
        alignSelf: 'flex-start',
        marginBottom: 10

    },
    modalText: {
        fontSize: 16,
        fontFamily: 'ABeeZee',
        alignSelf: 'flex-start',
        marginBottom: 15,
        color: 'rgb(100,100,100)'

    },
    modalButtonContainer: {
        width: '100%',
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 30

    },
    modalButtonText: {
        fontSize: 15,
        fontFamily: 'Poppins',

    },

})

export default Calculator;